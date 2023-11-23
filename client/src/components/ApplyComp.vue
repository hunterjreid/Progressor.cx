<template>
      <section class="my-8">

        <form class="contact-form">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" v-model="name" required>

          <label for="country">Company:</label>
          <input type="text" id="country" name="country" v-model="country" required>

          <label for="email">What tech stack do you use:</label>
          <input type="email" id="email" name="email" v-model="email" required>

          <label for="phone">Phone number:</label>
          <input type="text" id="phone" name="phone" v-model="phone" required>


          <label for="message">How will you use Progressor Plus:</label>
          <textarea id="message" name="message" v-model="message" rows="4"></textarea>

          <!-- <label for="picture">Upload one picture of you (optional):</label>
      <input type="file" @change="onFileChange" accept="image/*"> -->

      <img v-if="profilePicture" :src="profilePicture" style="max-width: 200px; max-height: 200px;" alt="Profile Picture">

      <button style="width: 100%;font-size: 1.24em;" type="button" @click="submitForm">Apply Now to Progressor.cx Plus+</button>
        </form>
      </section>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
   
        name: '',
      country: '',
      email: '',
      phone: '',
      twitter: '',
      instagram: '',
      message: '',
      picture: null,
      picturePreview: null,
 
    uploadedProfilePicture: null,
      };
    },
    methods: {
        async submitForm() {
      try {
        const formData = new FormData();
        formData.append('name', this.name);
        formData.append('country', this.country);
        formData.append('email', this.email);
        formData.append('phone', this.phone);
        formData.append('twitter', this.twitter);
        formData.append('instagram', this.instagram);
        formData.append('message', this.message);

        // Get the file input element
        const fileInput = document.querySelector('input[type="file"]');
      const file = fileInput.files[0];

      if (file) {
        // Append the file to the form data
        formData.append('picture', file);
      }

        await axios.post(`${this.$root.api_prefix}/api/submit_contact`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        // Reset form fields after successful submission
        this.name = '';
        this.country = '';
        this.email = '';
        this.phone = '';
        this.twitter = '';
        this.instagram = '';
        this.message = '';

        // Reset the file input
        fileInput.value = '';

        alert('Contact information submitted successfully!');
      } catch (error) {
        console.error('Error submitting contact information:', error);
        alert('Error submitting contact information. Please try again later.');
      }
    },
},
    onFileChange(event) {
      const file = event.target.files[0];
      this.profilePicture = URL.createObjectURL(file);

      const formData = new FormData();
      formData.append('picture', file);

      // Make an API call to upload the picture
      axios.post(`${this.$root.api_prefix}/api/upload_picture`, formData)
        .then((response) => {
          // Handle the response if needed
          console.log('Profile picture uploaded successfully:', response.data);
        })
        .catch((error) => {
          console.error('Error uploading profile picture:', error);
          // Handle the error if needed
        });
    },
  };
  </script>
  
  <style scoped>
  .contact-form {
    display: flex;
    flex-direction: column;
  }
 
.contact-form button[type="submit"] {
  background-color: #747474;
  color: #fff;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
}

.contact-form button[type="submit"]:hover {
  background-color: #474747;
}
.my-8 {
    background: #88888815;
    padding: 10px;
    margin-top: 20px;
    border-radius: 20px;

}

.contact-form input:focus,
.contact-form textarea:focus,
.contact-form input:hover,
.contact-form textarea:hover {
  border-color: #2c2d2e;
}
.contact-form {
    display: flex;
    margin: 0px;
    flex-direction: column;
  }

  .contact-form label {
    margin-top: 10px;
    font-weight: bold;
    color: #6b207d; /* Purple */
  }

  .contact-form input[type="text"],
  .contact-form input[type="email"],
  .contact-form textarea {
    padding: 8px;
    border: 1px solid #132bff; /* Light pink */
    border-radius: 5px;
    margin-top: 5px;
  }

  .contact-form input[type="file"] {
    margin-top: 5px;
  }

  .profile-picture {
    max-width: 200px;
    max-height: 200px;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid #e0d0e8; /* Light pink */
  }

  .contact-form button[type="button"] {
    background-color: #c813ff; /* Darker pink */
    color: #fff;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }

  .contact-form button[type="button"]:hover {
    background-color: #a03333; /* Darker pink on hover */
  }

  /* Add focus and hover styles for input and textarea */
  .contact-form input:focus,
  .contact-form textarea:focus,
  .contact-form input:hover,
  .contact-form textarea:hover {
    border-color: #6b207d; /* Purple on focus/hover */
  }

  .blog-titlee {
    font-weight: 700;
margin-bottom: 10px;
-webkit-text-stroke: 1px black;
text-stroke: 1px black;
-webkit-text-fill-color: transparent;
font-family: system-ui;
background-image: linear-gradient(270deg,#ff1313 31%,#5c85ff);
-webkit-background-clip: text;
background-clip: text;
font-size: 37px;
margin: 0px;
  }
  </style>
  