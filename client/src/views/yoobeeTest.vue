<template>
  <div>
    <!-- Your component content here -->
  </div>
</template>

<script>
export default {
  mounted() {
    // Check if the user is authenticated (you need to implement this logic)

    // If the user is authenticated, redirect to the chat screen

    this.$router.push("/chat2");
    this.$root.userTokens = 9999;
    this.$root.tokens_bypass = true;
    this.$root.user = true;
  },
};
</script>

<style>
/* Your component styles here */
</style>
