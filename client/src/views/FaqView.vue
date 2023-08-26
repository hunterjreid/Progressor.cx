<template>
    <div style="    max-width: 800px;
    margin: 0 auto;
    padding: 20px;">
      <h1>FaQ</h1>
      <p>here we have a list of FAQ.</p>
     
        <FAQComp />
        <br>
        <b>Any more questions u can just email us!</b><br><br>
      <FooterComp />
  
    </div>
  </template>
  
  <script>
  import FooterComp from '@/components/FooterComp.vue';
  import FAQComp from '@/components/FAQComp.vue'; 
  export default {
    name: 'FaqView',components: {
    FooterComp, FAQComp
  }
  };
  </script>