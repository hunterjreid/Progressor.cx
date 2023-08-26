<template>
    <div class="main">
      <h1>Our Cybersecurity Solutions</h1>
      <p>Explore the comprehensive range of cybersecurity solutions we provide to our clients. From advanced technologies to exceptional support, we have it all covered.</p>
      
      <div class="grid-container">
        <div class="grid-item" style="background: linear-gradient(135deg, #8E44AD, #3498DB);">
          <h2>Customized Threat Detection</h2>
          <p>Deploy tailored threat detection systems to identify and neutralize cyber threats specific to your environment.</p>
        </div>
        <div class="grid-item" style="background: linear-gradient(135deg, #6C3483, #1F618D);">
          <h2>Incident Response Planning</h2>
          <p>Create a personalized plan to respond swiftly and effectively to security incidents and minimize potential damages.</p>
        </div>
        <div class="grid-item" style="background: linear-gradient(135deg, #1A5276, #52BE80);">
          <h2>Secure Communication Solutions</h2>
          <p>Implement secure communication channels and encryption methods to protect sensitive data from unauthorized access.</p>
        </div>
        <div class="grid-item" style="background: linear-gradient(135deg, #8E44AD, #3498DB);">
          <h2>Continuous Threat Monitoring</h2>
          <p>Monitor your digital landscape round-the-clock to stay vigilant against evolving cyber threats and vulnerabilities.</p>
        </div>
        <div class="grid-item" style="background: linear-gradient(135deg, #6C3483, #1F618D);">
          <h2>Regulatory Compliance Assistance</h2>
          <p>Ensure your cybersecurity measures align with industry standards and regulations to stay compliant and secure.</p>
        </div>
        <div class="grid-item" style="background: linear-gradient(135deg, #1A5276, #52BE80);">
          <h2>24/7 Expert Support</h2>
          <p>Access our team of cybersecurity experts at any time for guidance and resolution of security concerns.</p>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'ServicesView',
  };
  </script>
  
  <style>
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
}
  </style>
  