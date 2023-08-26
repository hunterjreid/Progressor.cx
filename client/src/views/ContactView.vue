<template>
    <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries about our services, please feel free to get in touch with us using the information below:</p>
      
      <div class="contact-info">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:info@ommida.com">info@progressor.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
  

      </div>
      

      
      <FooterComp />
    </div>
  </template>
  
  <script>
  import FooterComp from '@/components/FooterComp.vue';

  
  export default {
    name: 'ContactView',
    components: {
      FooterComp,

    }
  };
  </script>
  
  <style>
  .contact-info {
    margin-top: 20px;
  }
  .contact-info h2 {
    margin-top: 10px;
  }
  /* Your existing styles here */
  </style>
  