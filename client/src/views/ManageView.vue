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
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$root.user,
      subscriptionInfo: null,
    };
  },
  methods: {
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
    viewUsage() {
      // Implement usage viewing logic
    },
  },
  created() {
    // Implement initialization logic
  },
};
</script>

<style scoped>
/* Keep necessary styling as per your design */
</style>
