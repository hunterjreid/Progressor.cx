<template>
  <div class="centered-content">
    <h1>Welcome To Progressor. Please Log In</h1>
    <div v-if="!user">
      <form @submit.prevent="emailPasswordSignIn">
        <input type="email" v-model="email" placeholder="Email" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <button type="submit">Log In</button>
      </form>
    </div>

    <button v-if="user" @click="logout">Log Out</button>

    <button v-if="!user" @click="loginWithGoogleSignIn">Login with Google</button>

    <!-- Display success and error messages -->
    <p v-if="successMessage" style="color: green">{{ successMessage }}</p>
    <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


export default {
  name: "LoginView",
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
    async emailPasswordSignIn() {
      const auth = getAuth();
      const email = this.email;
      const password = this.password;

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        // Update login times in Firestore
        await this.updateLoginTimes(userCredential.user.uid);

        this.$root.user = userCredential.user;
        this.successMessage = 'Logged in with email and password.';
        this.$router.push('/welcome');
      } catch (error) {
        this.errorMessage = 'Error signing in with email and password: ' + error.message;
      }
    },

    async loginWithGoogleSignIn() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      try {
        const result = await signInWithPopup(auth, provider);


        this.$root.user = result.user;
        this.successMessage = 'Logged in with Google.';
        this.$router.push('/welcome');
      } catch (error) {
        this.errorMessage = 'Error signing in with Google: ' + error.message;
      }
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
