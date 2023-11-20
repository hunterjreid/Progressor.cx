<template>
    

    <div class="footer-menus">

      <div class="menuCatch" style="margin-bottom: 0px;">
    <ul class="footer-menu">
      <li><router-link to="/blog/home">Home</router-link></li>
      <li><router-link to="/blog/cybersecurity-expertise">Learn About Our Cybersecurity Expertise</router-link></li>
      <li><router-link to="/blog/time-optimization">Discover Time Optimization Solutions</router-link></li>
      <li><router-link to="/blog/revenue-protection">Explore Revenue Protection Services</router-link></li>
      <li><router-link to="/blog/rapid-defense-advancement">Achieve Rapid Defense Advancement</router-link></li>
      <li><router-link to="/blog/about">About Us</router-link></li>
      <li><router-link to="/blog/our-mission">Our Mission</router-link></li>
      <li><router-link to="/blog/company-history">Company History</router-link></li>
      <li><router-link to="/blog/leadership-team">Leadership Team</router-link></li>
      <li><router-link to="/blog/corporate-responsibility">Corporate Responsibility</router-link></li>
    </ul>

    <ul class="footer-menu">
  <li><router-link to="/blog/about-us">About Us</router-link></li>
  <li><router-link to="/blog/meet-our-expert-team">Meet Our Expert Team</router-link></li>
  <li><router-link to="/blog/client-testimonials">Read Client Testimonials</router-link></li>
  <li><router-link to="/blog/check-out-our-blog">Check Out Our Blog</router-link></li>
  <li><router-link to="/blog/contact-support-team">Contact Our Support Team</router-link></li>
  <li><router-link to="/blog/services">Services</router-link></li>
  <li><router-link to="/blog/cybersecurity-solutions">Cybersecurity Solutions</router-link></li>
  <li><router-link to="/blog/data-privacy-consulting">Data Privacy Consulting</router-link></li>
  <li><router-link to="/blog/risk-management">Risk Management</router-link></li>
  <li><router-link to="/blog/cloud-security">Cloud Security</router-link></li>
</ul>
<ul class="footer-menu">
  <li><router-link to="/blog/services">Services</router-link></li>
  <li><router-link to="/blog/consulting-services">Consulting Services</router-link></li>
  <li><router-link to="/blog/security-audits">Comprehensive Security Audits</router-link></li>
  <li><router-link to="/blog/training-programs">Specialized Training Programs</router-link></li>
  <li><router-link to="/blog/partnership-opportunities">Explore Partnership Opportunities</router-link></li>
  <li><router-link to="/blog/resources">Resources</router-link></li>
  <li><router-link to="/blog/whitepapers">Whitepapers</router-link></li>
  <li><router-link to="/blog/case-studies">Case Studies</router-link></li>
  <li><router-link to="/blog/webinars">Webinars</router-link></li>
  <li><router-link to="/blog/faqs">FAQs</router-link></li>
</ul>
</div>


            
  


    <footer class="footer">

        <div>
      <router-link to="/">
        <img alt="Logo" src=".././assets/Logo.png" class="max-w-xs logo"/>
      </router-link>      <h3 class="text-lg font-bold">Empower Your Cyber Defense.</h3><br></div><div style="display: flex;
    flex-direction: column;
    align-items: flex-end;">

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
      </div></div>
    </footer></div>
  </template>
  
  <style>
  .social-icons {
    color: #000000;
    font-size: 14px;
  }
  
  .footer {
    background-color: #f4f4f4;
    padding: 20px 20px;
    text-align: center;
    max-width: 980px;
    margin: 0px auto !important;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #000000;
    width: calc(100% - 40px);
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
  color: #ffffff; /* Change link color on hover (you can choose a different color) */
}

.footer-menu a:hover {
  color: #007bff; /* Change link color on hover (you can choose a different color) */
}

.menuCatch {
    display: flex;
    background: #464646;
    justify-content: center;
 
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
  .footer-menus {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 799px;
}
  </style>
  