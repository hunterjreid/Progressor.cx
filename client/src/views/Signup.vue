<template>
  <div class="centered-content">
    <h1
      style="
        font-family: 'M PLUS 1 Code', monospace !important;
        font-size: 4em;
        margin: 0;
      "
    >
      Sign up
    </h1>
    <div v-if="!user" style="width: 100%; margin-bottom: 10px">
      <form @submit.prevent="createAccountWithEmail">
        <input
          style="i_box"
          type="email"
          v-model="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
    OR
    <button
      v-if="!user"
      class="gogole"
      style="background-color: none !important"
      @click="loginWithGoogleSignIn"
    >
      <img src="@/assets/google.png" />
    </button>

    <!-- Display success and error messages -->
    <p v-if="successMessage" style="color: green">{{ successMessage }}</p>
    <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
  </div>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

export default {
  name: "SignUp",
  data() {
    return {
      user: null,
      email: "",
      password: "",
      successMessage: "", // To display success messages
      errorMessage: "", // To display error messages
    };
  },
  methods: {
    async createAccountWithEmail() {
      const auth = getAuth();
      const email = this.email;
      const password = this.password;

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        // Check if it's the user's first sign-in
        const isFirstSignIn = await this.checkFirstSignIn(
          userCredential.user.uid
        );

        if (isFirstSignIn) {
          // Give initial tokens to the user
          await this.giveInitialTokens(userCredential.user.uid);
        }

        this.$root.user = userCredential.user;
        this.successMessage = "Account created with email and password.";
        this.$router.push("/welcome");
      } catch (error) {
        this.errorMessage = "Error creating an account: " + error.message;
      }
    },

    async checkFirstSignIn(userId) {
      const db = getFirestore();
      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);
      return !userDoc.exists();
    },

    async giveInitialTokens(userId) {
      const db = getFirestore();
      const userDocRef = doc(db, "users", userId);
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
        .then((result) => {
          // Check if it's the user's first sign-in
          const isFirstSignIn = this.checkFirstSignIn(result.user.uid);
          if (isFirstSignIn) {
            // Give initial tokens to the user
            this.giveInitialTokens(result.user.uid);
          }
          // Update user state
          this.$root.user = result.user;
          this.successMessage = "Signed up with Google.";
          this.$router.push("/welcome");
        })
        .catch((error) => {
          this.errorMessage = "Error signing up with Google: " + error.message;
        });
    },
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.$root.user = null;
          this.successMessage = "Logged out.";
        })
        .catch((error) => {
          this.errorMessage = "Error logging out: " + error.message;
        });
    },
  },
};
</script>

<style>
.centered-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 0px auto;
  padding: 0px 20px;
  text-align: center; /* Center text within the container */
}
.i_box {
  width: 100%;
}
</style>
