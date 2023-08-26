<template>
    <footer class="footer">
      <router-link to="/">
        <img alt="Logo" src=".././assets/logo_clean.png" class="max-w-xs logo" style="height: 30px;" />
      </router-link>
      <h3 class="text-lg font-bold">Empower Your Cyber Defense.</h3><br>
      <h3 class="text-lg font-bold">CONTACT US</h3>
      <p>E-Mail: info@progressor.cx</p>
      <p class="footer-text">© 2023 Progressor.cx. All rights reserved.</p>
      <div class="contact"></div>
      <div class="social">
        <h3 class="text-lg font-bold">CONNECT WITH US</h3>
        <p>
          Follow us on social media
        </p>
        <div class="social-icons">
          <!-- Use 'fa-3x' class to make the icons 3 times larger -->
          <a href="#" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fab fa-instagram fa-3x"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fab fa-linkedin fa-3x"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fab fa-twitter fa-3x"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fas fa-envelope fa-3x"></i>
          </a>
          <!-- Add more social media icons as needed -->
        </div>
      </div>
    </footer>
  </template>
  
  <style>
  .social-icons {
    color: #000000;
    font-size: 14px;
  }
  
  .footer {
    background-color: #f4f4f4;
    padding: 20px;
    text-align: center;
    max-width: 980px;
    margin: 0px auto !important;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center !important;
    color: #000000;
  }
  
  @media (max-width: 600px) {
    /* Adjust padding and margins for better spacing */
    footer {
      height: auto !important;
      flex-direction: column !important;
    }
  }
  
  .social-icons .social-icon i {
    font-size: 24px;
    color: #000000;
    margin: 2px;
  }
  
  .footer-text {
    color: #000000;
    font-size: 14px;
  }
  </style>
  