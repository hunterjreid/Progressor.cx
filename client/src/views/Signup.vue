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
    createAccountWithEmail() {
      const auth = getAuth();
      const email = this.email;
      const password = this.password;

      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          this.$root.user = userCredential.user;
          this.successMessage = 'Account created with email and password.';
          this.$router.push('/welcome');
        })
        .catch(error => {
          this.errorMessage = 'Error creating an account: ' + error.message;
        });
    },

    loginWithGoogleSignIn() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
        .then(result => {
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
