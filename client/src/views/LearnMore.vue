<template>
    <div class="landing-page">

      <div style="display: flex; text-align: center; justify-content: center; align-items: center;">
        <h2>Elevate Your Career with Progressor</h2>
      </div>
      <p style="text-align: center; font-style: italic; max-width: 450px; margin: 24px auto;">
        Join Progressor's leading cybersecurity community and propel your professional journey. Benefit from expert mentorship, privacy assurance, and unparalleled professionalism as you step towards success.
      </p>
      <section class="section">
        <div class="content">
          <div class="text">
            <h2>Welcome to Our Voyage</h2>
            <p>We are a dedicated team passionate about offering exceptional services to our users.</p>
          </div>
          <div class="image">
            <img class="iamner" src="../assets/SET(1).png" alt="Team Collaboration">
          </div>
        </div>
      </section>
  

      <section class="section reverse">
        <div class="content">
          <div class="image">
            <img class="iamner" src="../assets/SET(2).png" alt="Innovation">
          </div>
          <div class="text">
            <h2>Our Dedication to Excellence</h2>
            <p>With a focus on quality and innovation, we constantly push the boundaries of cybersecurity.</p>
          </div>
        </div>
      </section>
  
      <!-- Section 3: Key Points -->
      <section class="key-points">
        <h2>Our Core Values</h2>
        <ul>
          <li>Cutting-Edge Solutions</li>
          <li>User-Centric Approach</li>
          <li>Continuous Innovation</li>
          <!-- Add more core values -->
        </ul>
      </section>
  
      <!-- Section 4: Lifestyle Imagery -->
      <section class="lifestyle">
        <h2>Embrace a Better Cybersecurity Lifestyle</h2>
        <div class="lifestyle-images">
          <!-- Add more cybersecurity lifestyle images -->
        </div>
      </section>
  
      <p style="text-align: center; font-style: italic; max-width: 450px; margin: 24px auto;">
        Join Progressor's leading cybersecurity community and propel your professional journey. Benefit from expert mentorship, privacy assurance, and unparalleled professionalism as you step towards success.
      </p>
      <FooterComp />
    </div>
  </template>
  
  <script>
    import FooterComp from '@/components/FooterComp.vue';
  export default {
    name: 'LearnMore',components: {
    FooterComp,
  },  mounted() {
    window.addEventListener('load', window.scrollTo({ top: 0 }));
  }
  };
  </script>
  
  <style>
  .landing-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }
  
  .reverse {
    flex-direction: row-reverse;
  }
  
@media (max-width: 600px) {
  /* Adjust padding and margins for better spacing */
  .image {
max-width: 100% !important;
  }.lifestyle-images img {
    max-width: 33%;
    margin: 0 3px !important;
}

}
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .text {
    max-width: 50%;
    text-align: center;
  }
  
  .image {
    max-width: 50%;
  }
  
  .image img {
    max-width: 100%;
    height: auto;
  }
  .iamner {
    max-width: 100%;
  }
  
  .key-points {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .key-points ul {
    list-style: none;
    padding: 0;
  }
  
  .key-points li {
    margin-bottom: 10px;
  }
  
  .lifestyle {
    text-align: center;
  }
  
  .lifestyle h2 {
    margin-bottom: 20px;
  }
  
  .lifestyle-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .lifestyle-images img {
    max-width: 33%;
    margin: 0 10px;
  }
  </style>
  