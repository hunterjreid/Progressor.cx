<template>
  <div style="max-width: 800px; margin: 0px auto; padding: 0px 20px;">
    <div v-if="$root.user">

      <h1>Welcome <template v-if=" $root.user.displayName">{{ $root.user.displayName }}</template> <template v-else>{{ $root.user.email }}</template> </h1>
  
      <router-link to="/chat2">Chat</router-link> 



      <div  class="subscription-container" style="    border: 5px dashed blue;" v-if="$root.tokens = 1000 && $root.firstLogin == true">
 
 <label for="firstLogin ">We see its your First Login: Welcome to Progressor! We gave you 1000 tokens for free to get started!!!</label>>  <router-link to="/chat2">Try now!</router-link>
</div>


<div  class="subscription-container"  v-if="$root.tierData == '0'" :style="{ backgroundColor: tierColors[$root.tierData] }"> NO PLAN!    <p>View subscriptions or read on docs.</p>  <router-link to="/pricing">Subscribe now!</router-link></div>
<div  class="subscription-container"  v-else-if="$root.tierData == '1'" :style="{ backgroundColor: '#4c5fa8ab' }"> TIER 1         <button @click="$router.push('/manage')">Manage Subscription</button>      <h1>You are TIER 1 Subscriber</h1> <br></div>
<div  class="subscription-container"  v-else-if="$root.tierData == '2'" :style="{ backgroundColor: 'blue' }"> TIER 2         <button @click="$router.push('/manage')">Manage Subscription</button>      <h1>You are TIER 1 Subscriber</h1> <br></div>
<div  class="subscription-container"  v-else-if="$root.tierData == '3'" :style="{ backgroundColor: 'orange' }"> TIER 3         <button @click="$router.push('/manage')">Manage Subscription</button>      <h1>You are TIER 1 Subscriber</h1> <br></div>

      <!-- Display subscription information -->

 
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
    </div>   <br>
    <FooterComp />
 
  </div>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue';

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
        '1': '#1085ecab', // Define color for Tier 1
        '2': '#864da1ab', // Define color for Tier 2
        '3': '#e10000ab', // Define color for Tier 3
      },
    };
  },
  components: {
    FooterComp
  },
  methods: {
    async logout() {
  try {
    // Check if the user is logged in and has a UID
    if (this.user && this.user.uid) {
      // Existing logout logic
 

      // Logout using your existing logout logic


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
        this.$root.logout();
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
  mounted() {
    this.user = this.$root.user;
    this.tier = this.$root.tierData;
    console.log(this.tier)











// Map tier values to numerical values
const tierMapping = {
  'NO': 0,
  'tier1': 1,
  'tier2': 2,
  'tier3': 3,
};

// Map the tier value to its corresponding numerical value
this.tierValue = tierMapping[this.tier];

// Set a default subscription
this.selectedSubscription = 'no';

// Update subscription info based on the default
this.updateSubscription();


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
