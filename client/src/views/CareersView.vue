<template>
    <div class="container">
      <h1>Careers</h1>
      <p>Join our dynamic team and explore exciting career opportunities with us. We are always looking for talented individuals to join our family.</p>
        
      <div class="career-list">

        <div class="career" @click="openPopup('Marketing')">
          <h2>Marketing</h2>
          <p>Join our marketing team and help us spread the word about our platform. If you're experienced in online marketing strategies and are excited about promoting unique content, we'd love to hear from you.</p>
        </div>
    
        <div class="career" @click="openPopup('Customer Support')">
          <h2>Customer Support</h2>
          <p>If you have excellent communication skills and enjoy assisting people, consider joining our customer support team. You'll play a vital role in ensuring our users have a positive experience on our platform.</p>
        </div>
      </div>
        
      <div v-if="selectedCareer" class="popup">
        <div class="popup-content">
          <h2>{{ selectedCareer }}</h2>
          <p><!-- More detailed information about the selected career goes here. --></p>
          <button @click="closePopup">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CareersView',
    data() {
      return {
        selectedCareer: null,
      };
    },
    methods: {
      openPopup(career) {
        this.selectedCareer = career;
      },
      closePopup() {
        this.selectedCareer = null;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Global Styles */
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }
  
  /* Container Styles */
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  /* Career Listings Styles */
  .career-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .career {
    background-color: #ffffff;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;
  }
  
  .career:hover {
    background-color: #f7f7f7;
    transform: scale(1.02);
  }
  
  .career h2 {
    margin-top: 0;
  }
  
  /* Popup Styles */
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .popup-content {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  
  .popup h2 {
    margin-top: 0;
  }
  
  .popup button {
    background-color: #007bff;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .popup button:hover {
    background-color: #0056b3;
  }
  
  /* Responsive Styles */
  @media (max-width: 600px) {
    .career-list {
      flex-direction: column;
    }
  }
  </style>
  