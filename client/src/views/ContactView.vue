<template>
    <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries about our services, please feel free to get in touch with us using the information below:</p>
      
      <div class="contact-info">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:info@ommida.com">info@progressor.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
  

      </div>
      
      <form @submit.prevent="submitForm">
      <h2>Contact Form</h2>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>

      <label for="message">Message:</label>
      <textarea id="message" v-model="message" required></textarea>

      <button type="submit">Submit</button>
    </form>
      
      <FooterComp />
    </div>
  </template>
  
  <script>
  import FooterComp from '@/components/FooterComp.vue';

  
  export default {
    name: 'ContactView',
    components: {
      FooterComp,

    }
  };
  </script>
  
  <style>
.contact-info {
  margin-top: 20px;
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 8px;
}

.contact-info h2 {
  margin-top: 10px;
  color: #333;
}
form {
  margin-top: 20px;
}

form label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
}

form input,
form textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

form button {
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

form button:hover {
  background-color: #2980b9;
}
  /* Your existing styles here */
  </style>
  