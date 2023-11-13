<template>
    <div class="landing">
        <div id="middleLocker">
            <div class="parallax-container">
      <div class="parallax-content">
        <div class="parallax-layer layer1" :style="getParallaxStyle(.5)">
          <h1>What is Progressor?</h1>
          <p style="font-size: 16px;">
            Progressor is the leading mobile app for enhancing your cybersecurity knowledge and protecting your digital presence. Join us today and take control of your online security!
          </p>
        </div>
      </div>
    </div>



  

    <section class="body-content">
      <div class="article-wrapper">
        <h1 class="text-3xl font-bold">Unlock the Power of Progressor Plus Plan</h1>
        <ul class="list-disc ml-6 mt-4">
          <li><strong>Comprehensive Cybersecurity Suite:</strong> Elevate your security with advanced threat detection, incident response, secure communication, and more.</li>
          <li><strong>Personalized Protection:</strong> Tailored security solutions that align with your specific needs and challenges.</li>
          <li><strong>Ongoing Monitoring:</strong> Continuous vigilance to safeguard against evolving cyber threats and vulnerabilities.</li>
          <li><strong>Efficient Incident Response:</strong> Rapid and effective response to security incidents to minimize potential damage.</li>
          <li><strong>Regulatory Compliance:</strong> Adherence to industry standards and regulations to ensure your security measures are up to date.</li>
          <li><strong>24/7 Support:</strong> Access to expert support round the clock for any security concerns.</li>
        </ul>
        <div style="display: flex; justify-content: center;">
          <img style="margin: 20px auto;" src="../assets/make_money.png" alt="Description of the image">
        </div>

        <h1 class="text-3xl font-bold mt-6">Empower Your Digital Defense</h1>
        <ul class="list-disc ml-6 mt-4">
          <li>Discover the effectiveness of our meticulously crafted cybersecurity strategies.</li>
          <li>We continually refine our methods, including rigorous testing and optimization of security measures.</li>
          <li>Our commitment extends to efficient service delivery through strategic delegation and outsourcing.</li>
          <li>Transparency is paramount; we provide service contracts and invoices for a clear business relationship.</li>
        </ul>
        <br>
        <h1 class="text-3xl font-bold mt-6">Stay Informed with Our Insights</h1>
        <div style="display: flex; justify-content: center;">
          <router-link :to="{ path: '/blog/Enhancing_Cybersecurity' }">
            <button class="bg-blue-53ee3">
              Enhancing Cybersecurity Blog
            </button>
          </router-link>
          <router-link :to="{ path: '/blog/Top_Digital_Threats' }">
            <button class="bg-blue-53ee3">
              Top Digital Threats Blog
            </button>
          </router-link>
          <router-link :to="{ path: '/blog/Cybersecurity_Best_Practices' }">
            <button class="bg-blue-53ee3">
              Cybersecurity Best Practices Blog
            </button>
          </router-link>
        </div>
      </div>
    </section>
</div>
<div id="middleLocker">
<div id="hed-img" class="plx">
<main class="container mx-auto p-4">
<div class="benefits-grid">
  <div class="benefit-box bg-gray-100">
    <h3 class="benefit-title" style="font-size: 14px; font-weight: 600;">1. Robust Protection</h3>
    <p style="font-size: 12px;">Experience comprehensive cybersecurity strategies backed by industry expertise.</p>
  </div>
  <div class="benefit-box bg-gray-100">
    <h3 class="benefit-title" style="font-size: 14px; font-weight: 600;">2. Personalized Solutions</h3>
    <p style="font-size: 12px;">Tailor-made security measures that adapt to your specific digital challenges.</p>
  </div>
  <div class="benefit-box bg-gray-100">
    <h3 class="benefit-title" style="font-size: 14px; font-weight: 600;">3. Continuous Monitoring</h3>
    <p style="font-size: 12px;">Stay vigilant against evolving cyber threats with round-the-clock monitoring.</p>
  </div>
  <div class="benefit-box bg-gray-100">
    <h3 class="benefit-title" style="font-size: 14px; font-weight: 600;">4. Swift Incident Response</h3>
    <p style="font-size: 12px;">Experience rapid and effective responses to potential security incidents.</p>
  </div>
</div>
</main>


    </div>
            
    <section class="body-content">
  <div class="article-wrapper" style="max-width: 700px; margin: 0px auto 0px auto; line-height: 1.69; width: 95%; text-align: left; display: flex; flex-direction: column; align-items: center;">
    <h1 class="text-3xl font-bold">Progressor.cx</h1>
    <p class="my-4">
      Empower your digital defense with Progressor.cx, a cutting-edge cybersecurity SaaS solution. Our expert team collaborates with businesses to fortify security and mitigate cyber threats.
    </p>
    <router-link :to="{ path: '/blog/Enhancing_Cybersecurity' }">
      <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4" style="padding: 10px 40px;">
        Explore Insights
      </button>
    </router-link>
  </div>
</section>
<div class="hed-content body-content" style="background: linear-gradient(45deg, #ff00a6, #00ffcc);">
  <h2>Ready to Elevate Your Security?</h2>
  <router-link :to="{ path: '/apply' }">
    <button class="bg-blue-53ee3">
      APPLY NOW
    </button>
  </router-link>
</div>

<br>

</div>
    
      <FooterComp />
    </div>
  </template>
  
  <script>

import FooterComp from '@/components/FooterComp.vue';
  export default {
    name: 'NewLanding',
    data() {
      return {
        colorChangeActive: false,
        scrollPosition: 0,
      };
    },
    mounted() {
    window.addEventListener('scroll', this.throttledHandleScroll);
    window.addEventListener('load',  window.scrollTo({ top: 0 })); // Add this line to trigger scroll to top on page load
  },
    beforeUnmount() {
      window.removeEventListener('scroll', this.throttledHandleScroll);
    },components: {
    FooterComp,
  },
    methods: {
      throttledHandleScroll() {
        // Implement your throttled scroll handling logic here
        this.scrollPosition = window.scrollY;
      },
      getParallaxStyle(factor) {
        // Implement your parallax calculation logic here
        const yPosition = -this.scrollPosition * factor;
        return {
          transform: `translateY(${yPosition}px)`,
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .landing {
    font-family: Arial, sans-serif;
    margin: 0 auto;
    height: calc(100% - 100px);
    position: fixed;
    overflow-y: auto;
    bottom: 0px;
    width: 100%;
    display: flex;
    padding: 0px;
    flex-direction: column;
    align-items: center;
  }
  
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  p {
    padding: 10px 0px;
  }
  
  .placeholder-hed {
    width: 100%;
    height: 50px;
    background-color: rgba(255, 113, 108, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
  }
  #middleLocker {
    max-width: 800px;
    
  }
 
  
  
  .plx {
    width: 100%;
    background-size: cover;
    background-position: center top;
    background-attachment: fixed;

    position: relative;
    background-color: #000000;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 20px;
    font-size: 45px;
  }
  

@media (max-width: 600px) {
  /* Adjust padding and margins for better spacing */
  .image {
max-width: 100% !important;
  }

}
  .hed-content {
    text-align: center;
    padding: 32px 0;
    z-index: 10;
    position: relative;
    background-color: white;
    z-index: 10;
    position: relative;
    will-change: margin;
    transition: margin 300ms ease-in-out;
  }
  
  .body-content {
    width: 100%;
    padding: 16px;
    padding-top: 24px;
    margin: auto;
    position: relative;
    z-index: 10;
    background-color: white;
  }
  
  .article-wrapper {
    max-width: 700px;
    margin: 0px auto 0px auto;
    line-height: 1.69;
    width: 95%;
    text-align: left;
  }
  
  #story-plx {
    background-attachment: scroll;
    background-position-y: 0px;
    position: fixed;
    top: 0px;
    z-index: 7;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/full-lonely.jpg);
    opacity: 1;
  }
  
  .parallax-container {

  }
  
  .parallax-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400%;

  }
  .bg-blue-53ee3 {
    padding: 20px;
    margin-right: 10px;
  }
  
  .parallax-layer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease-out;
    background-size: cover;
    background-attachment: fixed;
    margin-top: 260px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);    margin-top: 1360px;  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  }
  
  .layer1 {
    width: 100%;
  height: 50vh; /* Use viewport height to ensure the element covers the entire screen */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-out;
  background-image: url('../assets/main22.png'); /* Add your image URL here */
  background-size: cover;
  background-attachment: fixed;
  margin: 0; /* Reset margin to zero */
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;    flex-direction: column;
  }
  
  
  h1,
  p {
    font-size: 24px;
    text-align: center;
    padding: 20px;
  }
  
  .color-change-section {
    height: 100vh;
    background-color: white;
    transition: background-color 0.5s ease-in-out;
  }
  
  .color-change-section.active {
    background-color: black;
  }
  </style>
  