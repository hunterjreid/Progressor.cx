<template>
    <div style="    max-width: 800px;
    margin: 0 auto;
    padding: 20px;">

<div v-if="showPopup" class="notice-box">
    <span class="close-button" @click="closePopup" style="cursor: pointer;">X</span>
<div class="notice-content">
  <p style="background-color: rgba(0, 0, 0, 0.062); font-size: 12px;">
    Due to the high demand in submissions, we encourage you to provide comprehensive details about yourself to make your application stand out.
  </p>
</div>
</div>

<h1>Apply for Progressor Plus Plan</h1>
<p>Take your cybersecurity to the next level with our Progressor Plus plan. Join our community and gain access to advanced security features and personalized protection.</p>
<a>
  <ApplyComp /><br>
</a>

Are you ready to enhance your digital defense with the Progressor Plus plan? Look no further! Join our exclusive cybersecurity community at Progressor.cx and explore a range of powerful security opportunities that await you. We're passionate about strengthening digital resilience, and we're seeking individuals who are eager to be a part of this mission.

<h1>30 Money Back gauentee</h1>

<div>At Progressor.cx, we don't just provide services; we offer a pathway to fortified digital security. Here are some compelling reasons why you should consider applying</div>

<br>

<FooterComp />

</div>
</template>

  
  <script>
  import FooterComp from '@/components/FooterComp.vue'; // Adjust the path
  import ApplyComp from '@/components/ApplyComp.vue'; // Adjust the path
  export default {
    name: 'ApplyView',components: {
    FooterComp, ApplyComp
  },
  data() {
    return {
      showPopup: true,
    };
  }, methods: {
    closePopup() {
      this.showPopup = false;
    },
  },
  };
  </script>

  <style scoped>
  .notice-box {background: linear-gradient(270deg,#ff1313 31%,#5c85ff);
    text-align: center;

  display: flex;
    color: white;    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    border: 1px solid black;
    border-radius: 14px;}

  </style>