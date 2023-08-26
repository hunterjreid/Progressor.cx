<template>
    <div class="blog-container">
      <div v-if="loading" class="loading-overlay" :class="{ 'hide': !loading }">
        <div class="loading-spinner">
          <img alt="Logo" src="./../assets/logo_clean.png" class="max-w-xs logo" style="height: 50px; padding: 27px; margin-left: -25px; margin-top: 8px;" />
        </div>
      </div>
      <div class="main" v-else><br v-if="this.$cookies.isKey('admin')">
        <button v-if="this.$cookies.isKey('admin')" @click="$router.push('/admin')" style="border:1px solid black;margin: 20px;margin-top: 0px;
   background: linear-gradient(45deg, red, orange);">goto Admin</button>
        <h1 class="blog-title" v-if="blog">{{ blog.title }}</h1>
        <a v-else ><br>This blog doesn't exisit or has been made private. </a>
        <p v-if="blog" class="blog-content" v-html="blog.content"></p>
  <br>
  <p v-if="blog" class="blog-content" >{{blog.read_count}} Views</p>
        <router-link :to="'/all_blogs'">View all Blogs</router-link><br>
        <router-link :to="'/'">Back to Home Page</router-link>
      </div>
      <FooterComp />

    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import FooterComp from '@/components/FooterComp.vue'; // Adjust the path
  export default {
    name: 'BlogView',
    data() {
      return {
        blog: null,
        loading: true, // Add a loading state
      };
    },components: {
    FooterComp
  },
    created() {
      const blogId = this.$route.params.id;
  
      axios
        .post(`${this.$root.api_prefix}/blogs/${blogId}/view`)
        .then((response) => {
          this.blog = response.data;
        })
        .catch((error) => {
          console.error('Error fetching blog:', error);
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false; // Set loading state to false after a delay
          }, 500); // Adjust the delay as needed
        });
    },
  };
  </script>
  
  <style>  .main {
    max-width: 800px; margin: 0 auto; padding: 20px;
  }
  .blog-title {
    font-weight: 700;
    margin-bottom: 10px;
    -webkit-text-stroke: 1px black;
    text-stroke: 1px black;
    -webkit-text-fill-color: transparent;
    font-family: system-ui;
    background-image: linear-gradient(270deg,#13fff3 31%,#df64d3);
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 37px;
  }
  
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9); /* Use rgba for opacity transition */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }
  
  .loading-overlay.hide {
    opacity: 0;
    pointer-events: none; /* Disable interactions with hidden overlay */
  }
  
  .loading-spinner {
    width: 100px;
    height: 100px;
    animation: spin 1s linear infinite;
  }
  .main {
    max-width: 800px; margin: 0 auto; padding: 20px;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  