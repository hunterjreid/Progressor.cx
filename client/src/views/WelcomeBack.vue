<template>
  <div style="max-width: 800px; margin: 0px auto; padding: 0px 20px;">
    <div v-if="user">

      <h1>Welcome <template v-if=" $root.user.displayName">{{ $root.user.displayName }}</template> <template v-else>{{ $root.user.email }}</template> </h1>
  
     

 <div>
       
        <input type="radio" id="noSubscription" value="no" v-model="selectedSubscription" @change="updateSubscription">
        <label for="noSubscription">No Subscription</label>

        <input type="radio" id="tier1" value="Tier 1" v-model="selectedSubscription" @change="updateSubscription">
        <label for="tier1" :style="{ backgroundColor: tierColors['Tier 1'] }">Tier 1</label>

        <input type="radio" id="tier2" value="Tier 2" v-model="selectedSubscription" @change="updateSubscription">
        <label for="tier2" :style="{ backgroundColor: tierColors['Tier 2'] }">Tier 2</label>

        <input type="radio" id="tier3" value="Tier 3" v-model="selectedSubscription" @change="updateSubscription">
        <label for="tier3" :style="{ backgroundColor: tierColors['Tier 3'] }">Tier 3</label>
      </div>

      <div  class="subscription-container" style="    border: 5px dashed blue;" v-if="$root.tokens = 1000 && $root.firstLogin == true">
 
 <label for="firstLogin ">We see its your First Login: Welcome to Progressor! We gave you 1000 tokens for free to get started!!!</label>>  <router-link to="/chat2">Try now!</router-link>
</div>

      <!-- Display subscription information -->
      <div v-if="subscriptionInfo && selectedSubscription !== 'no'"  class="subscription-container" :style="{ backgroundColor: tierColors[selectedSubscription] }">
        <router-link to="/chat2"><h1>Use Progressor.cx</h1></router-link>
        <p>{{ subscriptionInfo }}</p>
        <div v-if="selectedSubscription === 'no'">
          <p>View subscriptions or read on docs.</p>  <router-link to="/pricing">Subscribe now!</router-link>
        </div>
        <div v-else>

          <button @click="$router.push('/manage')">Manage Subscription</button>
        </div>
      </div>

      <div v-if="selectedSubscription === 'no'" class="subscription-container" :style="{ backgroundColor: tierColors[selectedSubscription] }">
          <h1>You must select a plan continue using Progressor.cx</h1>  <router-link to="/chat2">Use Progresor Chat If you have coins here</router-link> <br><button @click="$router.push('/pricing')">Select plan</button>
      </div>

      <button @click="logout">Logout</button>

      <template v-if="selectedSubscription === 'Tier 3'">
<br>
      <label for="tokensInput">You May Enter number of tokens:</label>
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
      </div></template>
    </div>
    <div v-else>
      <p>You are not Logged in...</p>
      <router-link to="/login">Login</router-link> | <router-link to="/signup">Signup</router-link>
    </div>
  </div>
</template>

<script>
import { getFirestore, doc, setDoc, getDoc  } from 'firebase/firestore';

export default {
  data() {
    return {
      user: this.$root.user,
      selectedSubscription: 'no',
      subscriptionInfo: null,
      tokensToAdd: 0,
      showTokenAddedPopup: false,
      firstLogin: true,
      firstLoginAcknowledge: false,
      tierColors: {
        'Tier 1': '#1085ecab', // Define color for Tier 1
        'Tier 2': '#864da1ab', // Define color for Tier 2
        'Tier 3': '#e10000ab', // Define color for Tier 3
      },
    };
  },
  methods: {
    async logout() {
  try {
    // Check if the user is logged in and has a UID
    if (this.user && this.user.uid) {
      // Existing logout logic
 

      // Logout using your existing logout logic
      this.$root.logout();
      this.selectedSubscription = null;
      this.subscriptionInfo = null;
      this.$router.push('/login');

      // Get the UID of the logged-in user
      const uid = this.user.uid;

      // Increment login times in the database
      const db = getFirestore();
      const userDocRef = doc(db, 'users', uid);

      // Get the existing user data
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();

        // Increment the login times
        const updatedLoginTimes = (userData.loginTimes || 0) + 1;

        // Update the user document with the incremented login times
        await setDoc(userDocRef, { loginTimes: updatedLoginTimes }, { merge: true });

        // Update the local login times property
        this.loginTimes = updatedLoginTimes;

        // ... existing login success logic ...
      } else {
        // Handle the case where user data is not available
        console.error('User data not available for logout');
      }
    } else {
      // Handle the case where the user is not logged in or does not have a UID
      console.error('User not logged in or UID not available for logout');
           this.user = null; // Clear user data
    }
  } catch (error) {
    console.error('Logout error:', error);
  }
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
    updateSubscription() {
      switch (this.selectedSubscription) {
        case 'no':
          this.subscriptionInfo = 'You have no subscription.';
          break;
        case 'Tier 1':
        case 'Tier 2':
        case 'Tier 3':
          this.subscriptionInfo = `You have a ${this.selectedSubscription} subscription. You are due for a top-up in X days of XXX Tokens.`;
          break;
        default:
          this.subscriptionInfo = null;
      }
    },
  },
  created() {
    this.user = this.$root.user;
    this.selectedSubscription = 'no'; // Set a default subscription
    this.updateSubscription(); // Update subscription info based on the default
  },
};
</script>

<style scoped>
.subscription-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.subscription-container h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.subscription-container label {
  display: block;
  margin-bottom: 10px;
}

.subscription-container input[type="radio"] {
  margin-right: 5px;
}

.subscription-container p {
  margin-top: 20px;
  font-size: 16px;
}

.subscription-container button {
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
}

.subscription-container button:hover {
  background-color: #2980b9;
}

.subscription-container .token-added-popup {
  /* Adjust styles for the token-added-popup as needed */
}

/* Add any additional styling as per your design */
</style>
