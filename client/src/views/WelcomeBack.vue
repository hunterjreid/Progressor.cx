
<template>
  <div style="max-width: 800px; margin: 0px auto; padding: 0px 20px;">
    <div v-if="user">
      <h1>Welcome back, {{ user.email }}</h1>
      <p v-if="subscription">You have an active subscription: {{ subscription }}</p>
      <router-link to="/chat2">Use Progressor.cx</router-link>
      <button @click="logout">Logout</button>

      <label for="tokensInput">Enter number of tokens:</label>
      <input type="number" id="tokensInput" v-model="tokensToAdd" />
      <button @click="addTokens">Set Tokens</button>

      <div class="token-added-popup" v-show="showTokenAddedPopup">
        <div class="modal-card">
          <div class="modal-card-title">Tokens Added</div>
          <div class="modal-card-text">
            Your tokens have been successfully added to your account.
          </div>
          <div class="modal-card-actions">
            <button @click="closeTokenAddedPopup">OK</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>You are not Logged in...</p>
      <router-link to="/login">Login</router-link> | <router-link to="/signup">Signup</router-link>
    </div>
  </div>
</template>



<script>
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

export default {
  data() {
    return {
      user: this.$root.user,
      subscription: null,
      tokensToAdd: 0,
      showTokenAddedPopup: false,
    };
  },
  methods: {
    logout() {
      // Perform logout actions here, e.g., clear user data and redirect to the login page.
      this.user = null;
      this.$root.logout()
      this.subscription = null;
      // Redirect to the login page (assuming you're using Vue Router)
      this.$router.push('/login');
    },
    addTokens() {
      if (this.user && this.tokensToAdd > -1) {
        const db = getFirestore();
        const userDocRef = doc(db, 'users', this.user.uid);

        // Set the user's tokens to the specified amount
        const tokensData = { tokens: this.tokensToAdd };

        // Set the document with the specified tokens value
        setDoc(userDocRef, tokensData)
          .then(() => {
            // Show the token added popup
            this.showTokenAddedPopup = true;
            this.$root.userTokens = this.tokensToAdd

            // Reset the tokensToAdd input field
            this.tokensToAdd = 0;
          })
          .catch((error) => {
            console.error('Error setting tokens:', error);
          });
      }
    },
    closeTokenAddedPopup() {
      this.showTokenAddedPopup = false;
    },
  },
  created() {
    // Fetch user and subscription data when the component is created (you may need to customize this part).
    // Assign user and subscription data to this.user and this.subscription.
    // For example:
    this.user = this.$root.user;
    this.subscription = 'Premium';

    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      this.user = currentUser;
      // You can fetch the subscription information here and assign it to the subscription ref.
      this.subscription = 'Premium';
    }
  },
};
</script>