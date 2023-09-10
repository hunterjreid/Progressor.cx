<template>
    

    <div class="footer-menus">
        <div class="menuCatch" style="margin-bottom: 0px;">
            <ul class="footer-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#cybersecurity-expertise">Learn About Our Cybersecurity Expertise</a></li>
                <li><a href="#time-optimization">Discover Time Optimization Solutions</a></li>
                <li><a href="#revenue-protection">Explore Revenue Protection Services</a></li>
                <li><a href="#rapid-defense-advancement">Achieve Rapid Defense Advancement</a></li>
            </ul>

            <ul class="footer-menu">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Meet Our Expert Team</a></li>
                <li><a href="#">Read Client Testimonials</a></li>
                <li><a href="#">Check Out Our Blog</a></li>
                <li><a href="#">Contact Our Support Team</a></li>
            </ul>

            <ul class="footer-menu">
                <li><a href="#">Services</a></li>
                <li><a href="#">Consulting Services</a></li>
                <li><a href="#">Comprehensive Security Audits</a></li>
                <li><a href="#">Specialized Training Programs</a></li>
                <li><a href="#">Explore Partnership Opportunities</a></li>
            </ul>
            
        </div>
        <div class="menuCatch" style="margin-top: 0px;">
            <ul class="footer-menu">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Our Mission</a></li>
        <li><a href="#">Company History</a></li>
        <li><a href="#">Leadership Team</a></li>
        <li><a href="#">Corporate Responsibility</a></li>
    </ul>

    <ul class="footer-menu">
        <li><a href="#">Services</a></li>
        <li><a href="#">Cybersecurity Solutions</a></li>
        <li><a href="#">Data Privacy Consulting</a></li>
        <li><a href="#">Risk Management</a></li>
        <li><a href="#">Cloud Security</a></li>
    </ul>

    <ul class="footer-menu">
        <li><a href="#">Resources</a></li>
        <li><a href="#">Whitepapers</a></li>
        <li><a href="#">Case Studies</a></li>
        <li><a href="#">Webinars</a></li>
        <li><a href="#">FAQs</a></li>
    </ul>
            
        </div>

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
    </footer></div>
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
  

  
  .social-icons .social-icon i {
    font-size: 24px;
    color: #000000;
    margin: 2px;
  }
  
  .footer-text {
    color: #000000;
    font-size: 14px;
  }.footer-menus {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    flex-direction: column;
}

.footer-menu {
  list-style: none; /* Remove bullet points */
  margin: 0; /* Remove default margin */
  padding: 0 20px; /* Add padding to separate menus */
}

.footer-menu li {
  margin: 10px 0; /* Add space between list items */
}

.footer-menu a {
  text-decoration: none; /* Remove underline from links */
  color: #000000; /* Set link color */
  font-weight: bold; /* Make links bold */
}

.footer-menu a {
  color: #a5a5a5; /* Change link color on hover (you can choose a different color) */
}

.footer-menu a:hover {
  color: #007bff; /* Change link color on hover (you can choose a different color) */
}

.menuCatch {
    display: flex;
    background: #464646;
    justify-content: center;
    margin-top: 20px;
    flex-direction: row;
}
@media (max-width: 600px) {
    /* Adjust padding and margins for better spacing */
    footer {
      height: auto !important;
      flex-direction: column !important;
    }
    .menuCatch {
    display: flex;
    background: #464646;
    justify-content: center;
    margin-top: 20px;
    flex-direction: column;
}
  }
  </style>
  