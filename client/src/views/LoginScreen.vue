<template>
  <div class="centered-content">
    <h1
      style="
        font-family: 'M PLUS 1 Code', monospace !important;
        font-size: 4em;
        margin: 0;
      "
    >
      Log in
    </h1>

    <div v-if="!user" style="width: 100%; margin-bottom: 10px">
      <form @submit.prevent="emailPasswordSignIn">
        <input type="email" v-model="email" placeholder="Email" required />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
        />
        <a href="/contact">Forgot Password</a>
        <button
          style="background-color: black; margin-left: 30px"
          type="submit"
        >
          Log in
        </button>
      </form>
    </div>

    <button v-if="user" @click="logout">Log Out</button>
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
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import FooterComp from "@/components/FooterComp.vue";
export default {
  name: "LoginView",
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
    async emailPasswordSignIn() {
      const auth = getAuth();
      const email = this.email;
      const password = this.password;

      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        // Update login times in Firestore
        await this.updateLoginTimes(userCredential.user.uid);

        this.$root.user = userCredential.user;
        this.successMessage = "Logged in with email and password.";
        this.$router.push("/welcome");
      } catch (error) {
        this.errorMessage =
          "Error signing in with email and password: " + error.message;
      }
    },
    components: {
      FooterComp,
    },
    async loginWithGoogleSignIn() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      try {
        const result = await signInWithPopup(auth, provider);

        this.$root.user = result.user;
        this.successMessage = "Logged in with Google.";
        this.$router.push("/welcome");
      } catch (error) {
        this.errorMessage = "Error signing in with Google: " + error.message;
      }
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
.gogole {
  border: none;
  background: none;
  padding: 0px;
  margin: 0px;
  outline: none;
  background: none !important;
}
</style>
