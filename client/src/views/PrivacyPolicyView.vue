<template>
    <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
      <h1 style="font-size: 36px; margin-bottom: 20px;">Privacy Policy</h1>
  
      <h2 style="font-size: 24px; margin-bottom: 15px;">Introduction:</h2>
      <p style="font-size: 16px; margin-bottom: 20px;">
        Welcome to Progressor. This Privacy Policy outlines how we collect, use, maintain, and disclose information collected from users of our mobile app.
      </p>
  
      <h3 style="font-size: 20px; margin-bottom: 10px;">Information We Collect:</h3>
      <p style="font-size: 16px; margin-bottom: 20px;">
        We may collect various types of information, including but not limited to:
      </p>
      <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Contact information (name, email)</li>
        <li>Usage data (app behavior, interactions)</li>
        <li>Device information (model, operating system)</li>
        <li>Payment details (if applicable)</li>
        <!-- ... (add more types of information) ... -->
      </ul>
  
      <h3 style="font-size: 20px; margin-bottom: 10px;">How We Use Your Information:</h3>
      <p style="font-size: 16px; margin-bottom: 20px;">
        We may use your information for various purposes, including but not limited to:
      </p>
      <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Providing and improving our app services</li>
        <li>Personalizing user experience</li>
        <li>Processing transactions and payments</li>
        <li>Sending app-related communications</li>
        <!-- ... (add more purposes) ... -->
      </ul>
  
      <h3 style="font-size: 20px; margin-bottom: 10px;">Sharing Your Information:</h3>
      <p style="font-size: 16px; margin-bottom: 20px;">
        We may share your information with:
      </p>
      <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Third-party service providers for app operations</li>
        <li>Legal authorities when required by law</li>
        <li>Business partners for marketing purposes</li>
        <li>With your explicit consent</li>
        <!-- ... (add more entities) ... -->
      </ul>
  
      <h3 style="font-size: 20px; margin-bottom: 10px;">Data Security:</h3>
      <p style="font-size: 16px; margin-bottom: 20px;">
        We take reasonable measures to protect your information from unauthorized access, alteration, or disclosure.
      </p>
  
      <!-- ... (continue adding sections about user rights, data retention, cookies, etc.) ... -->
  
      <h3 style="font-size: 20px; margin-bottom: 10px;">Your Choices and Rights:</h3>
      <p style="font-size: 16px; margin-bottom: 20px;">
        You have the right to access, update, or delete your personal information. You can also manage app-related notifications.
      </p>
  
      <h3 style="font-size: 20px; margin-bottom: 10px;">Contact Us:</h3>
      <p style="font-size: 16px;">
        If you have any questions or concerns about this Privacy Policy, please contact us at:
      </p>
      <ul style="list-style: none; padding-left: 0; margin-top: 10px;">
        <li>E-Mail: <a href="mailto:privacy@progressorapp.com" style="color: #007bff;">privacy@progressorapp.com</a></li>
        <li>Address: 123 App Street, Your City, Country</li>
      </ul>
      <FooterComp />
    </div>
  </template>
  
  <script>
    import FooterComp from '@/components/FooterComp.vue';
    export default {
      name: 'PrivacyPolicyView',
      components: {
        FooterComp
      }
    };
  </script>
  