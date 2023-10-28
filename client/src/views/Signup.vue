<template>
  <div class="centered-content">
    <h1>Welcome To Progressor. Enter your Email or proceed with Google</h1>
    <h1 v-if="enteredEmail && validUser" style="color: green">Login</h1>
    <h1 v-if="enteredEmail && !validUser" style="color: green">Create Account</h1>
    <div v-if="!user">
      <form @submit.prevent="checkValidUser">
        <input type="email" v-model="email" placeholder="Email" required>
        <button type="submit">Continue With Email</button>
      </form>
    </div>

    <div v-if="enteredEmail && !validUser">
      <form @submit.prevent="createAccount">
        <input type="password" v-model="newPassword" placeholder="Password" required>
        <button @click="createAccount" type="submit">Create Account</button>
        <button @click="enteredEmail = false">Go back</button>
      </form>
    </div>

    <div v-if="enteredEmail && validUser">
      <form @submit.prevent="emailPasswordSignIn">
        <input type="password" v-model="password" placeholder="Password" required>
        <button type="submit">Sign In with Email</button>
        <button @click="enteredEmail = false">Go back</button>
      </form>
    </div>

    <br><br><a v-if="!user" >OR </a>

    <button   v-if="! user" @click="loginWithGoogleSignIn">Sign in with Google</button>

    <button v-if="user" @click="logout" style="color: red">Log Out</button>

    <!-- Display success and error messages -->
    <p v-if="successMessage" style="color: green">{{ successMessage }}</p>
    <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, fetchSignInMethodsForEmail } from 'firebase/auth';

export default {
  name: "SignUp",
  data() {
    return {
      user: null,
      newUser: false,
      email: '',
      password: '',
      newEmail: '',
      newPassword: '',
      validUser: false,
      enteredEmail: false,
      successMessage: '', // To display success messages
      errorMessage: '',   // To display error messages
    };
  },
  methods: {
    checkValidUser() {
  const auth = getAuth();
  const email = this.email;

  fetchSignInMethodsForEmail(auth, email)
    .then((result) => {
      this.validUser = true;
      this.enteredEmail = true;
      this.successMessage = 'User found.';
      console.log(result);
    })
    .catch(error => {
      if (error.code === "auth/invalid-login-credentials") {
        this.validUser = false;
        this.enteredEmail = true;
        this.errorMessage = 'User not found: ' + error.message;
      } else if (error.code === "auth/wrong-password") {
        this.validUser = false;
        this.enteredEmail = true;
        this.errorMessage = 'Incorrect password: ' + error.message;
      } else {
        this.errorMessage = 'Error checking user: ' + error.message;
      }
    });
},


    emailPasswordSignIn() {
      const auth = getAuth();
      const email = this.email;
      const password = this.password;

      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          this.user = userCredential.user;
          this.successMessage = 'Logged in with email and password.';
        })
        .catch(error => {
          this.errorMessage = 'Error signing in with email and password: ' + error.message;
        });
    },

    createAccount() {
      const auth = getAuth();
      const email = this.email;
      const password = this.newPassword;

      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          this.user = userCredential.user;
          this.successMessage = 'Account created with email and password.';
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
          this.user = result.user;
          this.successMessage = 'Logged in with Google.';
        })
        .catch(error => {
          this.errorMessage = 'Error signing in with Google: ' + error.message;
        });
    },

    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.user = null;
          this.validUser = false;
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
