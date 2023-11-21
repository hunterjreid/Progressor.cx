<template>
    <div class="main">
      <h1>Progressor.cx Expert Chatbot Services</h1>
    <p>Welcome to Progressor, your expert chatbot companion. Ask us anything about cybersecurity, and we'll provide you with insightful answers and guidance. Our expertise covers a range of topics, from specific threat scenarios to incident response planning.</p>
    
      <div class="grid-container">

        <div class="grid-item" style="background: linear-gradient(135deg, #f00f0f, #128cdd);">
          <h2 style="    color: white;">Regulatory Compliance Assistance</h2>
          <p  style="    color: white;">Ensure your cybersecurity measures align with industry standards and regulations to stay compliant and secure.</p>
        </div>
        <div class="grid-item" style="background: linear-gradient(135deg, #029dfd, #f00f0f);">
          <h2 style="    color: white;">24/7 Expert Support</h2>
          <p style="    color: white;"> Access our team of cybersecurity experts at any time for guidance and resolution of security concerns.</p>
        </div>
        <div class="grid-item" style="background: linear-gradient(135deg, #6C3483, #1F618D);">
  <h2 style="color: white;">Tailored Threat Detection</h2>
  <p style="color: white;">Curious about customized threat detection systems? Ask us how to identify and neutralize cyber threats specific to your environment.</p>
</div>

<div class="grid-item" style="background: linear-gradient(135deg, #029dfd, #f00f0f);">
  <h2 style="color: white;">Effective Incident Response</h2>
  <p style="color: white;">Have questions about creating a personalized plan for incident response? Inquire about responding swiftly and minimizing potential damages.</p>
</div>

<div class="grid-item"  style="background: linear-gradient(135deg, #029dfd, #f00f0f);">
  <h2 style="color: white;">Securing Communication Channels</h2>
  <p style="color: white;">Interested in implementing secure communication channels and encryption methods? Learn how to protect sensitive data from unauthorized access.</p>
</div>

<div class="grid-item" style="background: linear-gradient(135deg, #029dfd, #f00f0f);">
  <h2 style="color: white;">Continuous Threat Monitoring</h2>
  <p style="color: white;">Discover how to monitor your digital landscape round-the-clock and stay vigilant against evolving cyber threats and vulnerabilities.</p>
</div>
</div>
      <br>
      <FooterComp/>
    </div>
  </template>
  

  <script>
  import FooterComp from '@/components/FooterComp.vue';
  export default {
    name: 'ServicesView',  components: {
    FooterComp,
  },
  };
  </script>
  
  <style>
  grid-item {
    color: white;
  }
  .main {
    max-width: 800px; margin: 0 auto; padding: 20px;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  
  .grid-item {
    padding: 20px;
    border-radius: 10px;
    color: white;
  }
  @media (max-width: 600px) {
    .grid-container  {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .grid-item {
    padding: 2px;
    border-radius: 10px;
    color: white;
  }
  .main {
    max-width: 800px; margin: 0 auto; padding: 20px;
  }
  h2 {
    color: white;
  }
}
  </style>
  