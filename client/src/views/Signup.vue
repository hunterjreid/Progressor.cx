<template>
    <div class="landing">
        <div>
            <div class="parallax-container">
      <div class="parallax-content">
        <div class="parallax-layer layer1" :style="getParallaxStyle(.5)">
          <h1>Signup</h1>
          <p style="font-size: 16px;">
            
 <!-- Sign-up form section -->
 <section class="body-content">
      <div >
  
        
        <!-- Sign-up form -->
        <form @submit.prevent="submitForm" class="mt-6">
          <div class="mb-4">
            <label for="username" style="color: #000;" class="block font-semibold">Username</label>
            <input type="text"  style="color: #000;" id="username"  class="w-full px-3 py-2 border rounded" required>
          </div>
          <div class="mb-4">
            <label for="email"  style="color: #000;" class="block font-semibold">Email</label>
            <input type="email" style="color: #000;" id="email" class="w-full px-3 py-2 border rounded" required>
          </div>
          <div class="mb-4">
            <label for="password"  style="color: #000;" class="block font-semibold">Password</label>
            <input type="password" style="color: #000;"  id="password" class="w-full px-3 py-2 border rounded" required>
          </div>
          <div class="mb-4">
            <label for="password"  style="color: #000;" class="block font-semibold">Password Confirm</label>
            <input type="password" style="color: #000;"  id="password" class="w-full px-3 py-2 border rounded" required>
          </div>
          <button type="submit" class="bg-blue-53ee3 text-white px-4 py-2 rounded hover:bg-blue-600">Sign Up</button>
        </form>
      </div>
    </section>
          </p>
        </div>
      </div>
    </div>




</div>

    
      <FooterComp />
    </div>
  </template>
  
  <script>

import FooterComp from '@/components/FooterComp.vue';
  export default {
    name: 'SignupView',
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
  background-image: url('../assets/main225.png'); /* Add your image URL here */
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
  