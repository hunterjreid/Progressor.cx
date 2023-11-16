<template>
  <div class="centered-content">
    <h1>Welcome To Progressor. Sign Up with Email or Google</h1>
    <div v-if="!user">
      <form @submit.prevent="createAccountWithEmail">
        <input type="email" v-model="email" placeholder="Email" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <button type="submit">Sign Up with Email</button>
      </form>
      <button @click="loginWithGoogleSignIn">Sign Up with Google</button>
    </div>

    <button v-if="user" @click="logout" style="color: red">Log Out</button>

    <!-- Display success and error messages -->
    <p v-if="successMessage" style="color: green">{{ successMessage }}</p>
    <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

export default {
  name: "SignUp",
  data() {
    return {
      user: null,
      email: '',
      password: '',
      successMessage: '', // To display success messages
      errorMessage: '',   // To display error messages
    };
  },
  methods: {
    async createAccountWithEmail() {
      const auth = getAuth();
      const email = this.email;
      const password = this.password;

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        // Check if it's the user's first sign-in
        const isFirstSignIn = await this.checkFirstSignIn(userCredential.user.uid);

        if (isFirstSignIn) {
          // Give initial tokens to the user
          await this.giveInitialTokens(userCredential.user.uid);
        }

        this.$root.user = userCredential.user;
        this.successMessage = 'Account created with email and password.';
        this.$router.push('/welcome');
      } catch (error) {
        this.errorMessage = 'Error creating an account: ' + error.message;
      }
    },

    async checkFirstSignIn(userId) {
      const db = getFirestore();
      const userDocRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userDocRef);

      return !userDoc.exists();
    },

    async giveInitialTokens(userId) {
      const db = getFirestore();
      const userDocRef = doc(db, 'users', userId);
      const initialTokens = 1000;

      await setDoc(userDocRef, { tokens: initialTokens });

      // Update the userTokens in the root component
      this.$root.userTokens = initialTokens;
    },

    loginWithGoogleSignIn() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // Sign in with Google
  signInWithPopup(auth, provider)
    .then(result => {
      // Check if it's the user's first sign-in
      const isFirstSignIn = this.checkFirstSignIn(result.user.uid);

      if (isFirstSignIn) {
        // Give initial tokens to the user
        this.giveInitialTokens(result.user.uid);
      }

      // Update user state
      this.$root.user = result.user;
      this.successMessage = 'Signed up with Google.';
      this.$router.push('/welcome');
    })
    .catch(error => {
      this.errorMessage = 'Error signing up with Google: ' + error.message;
    });
},

    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.$root.user = null;
          this.successMessage = 'Logged out.';
        })
        .catch(error => {
          this.errorMessage = 'Error logging out: ' + error.message;
        });
    }
  }
};
</script>


<style>
.centered-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* This makes the container take the full viewport height */
  text-align: center; /* Center text within the container */
}
</style>
