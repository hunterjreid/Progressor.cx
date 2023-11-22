<template>
  <div style="max-width: 800px; margin: 0 auto; padding: 0 20px;">
    <div v-if="user">
      <h1>ACCOUNT, {{ user.email }}</h1>

      <button @click="cancelSubscription">Cancel Subscription</button>
          <button @click="renewSubscription">Renew Subscription</button>
          <button @click="upgradeSubscription">Upgrade Subscription</button>
          <button @click="manageBilling">Manage Billing</button>
          <button @click="viewUsage">View Usage</button>

      <button @click="logout">Logout</button>
    </div>
    <div v-else>
      <p>You are not logged in...</p>
      <router-link to="/login">Login</router-link> | <router-link to="/signup">Signup</router-link>
    </div>
    <div v-if="usageInfo">
      <h2>Usage Information</h2>
      <ul>
        <li v-for="usage in usageInfo" :key="usage.id">
          {{ usage.timestamp }} - {{ usage.tokensUsed }} tokens used
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, orderBy, getDocs, query } from 'firebase/firestore';


export default {
  data() {
    return {
      user: this.$root.user,
      subscriptionInfo: null,
      usageInfo: [
        { id: 1, timestamp: '2023-01-01 10:00 AM', tokensUsed: 50 },
        { id: 2, timestamp: '2023-01-02 12:30 PM', tokensUsed: 30 },
        { id: 3, timestamp: '2023-01-03 03:45 PM', tokensUsed: 20 },
        // Add more usage data as needed
      ],
    };
    
  },
  methods: {
    async viewUsage() {
      try {
    const userUid = this.$root.user.uid;

    if (!userUid) {
      console.error('User ID is empty or undefined.');
      return;
    }

    const db = getFirestore();
    const usageRef = collection(db, 'usage');
    const querySnapshot = await getDocs(query(usageRef, orderBy('timestamp', 'desc')));

    // Extract usage information from the query snapshot
    querySnapshot.forEach((doc) => {
        console.log('Usage Info:', doc.data());
    });

} catch (error) {
    console.error('Error fetching usage information:', error);
}

},
    logout() {
      // Implement logout logic
    },
    cancelSubscription() {
      // Implement subscription cancellation logic
    },
    renewSubscription() {
      // Implement subscription renewal logic
    },
    upgradeSubscription() {
      // Implement subscription upgrade logic
    },
    manageBilling() {
      // Implement billing management logic
    },

  },
  created() {
    this.viewUsage()
  },
};
</script>

<style scoped>
/* Keep necessary styling as per your design */
</style>
