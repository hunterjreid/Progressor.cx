<template>
  <div class="blog-container">
    <div v-if="loading" class="loading-overlay" :class="{ 'hide': !loading }">
 
      <div class="loading-spinner">
        <img alt="Logo" src="./../assets/SPINNER.png" class="max-w-xs logo" style="    height: 50px;
    padding: 25px;" />
      </div>
    </div>
    <div class="main" v-else>
      <br v-if="this.$cookies.isKey('admin')">
      <button v-if="this.$cookies.isKey('admin')" @click="$router.push('/admin')" style="border:1px solid black;margin: 20px;margin-top: 0px;
        background: linear-gradient(45deg, red, orange);">goto Admin</button>
      <h1 class="blog-title" v-if="blog">{{ blog.title }}</h1>
      <a v-else><br>Sorry this blog has either been removed or deleted No blog found. Please</a>
      <p v-if="blog" class="blog-content" v-html="blog.content"></p>
      <!-- <br> -->
      <!-- <p v-if="blog" class="blog-content">{{ blog.read_count }} Views</p>
      <router-link :to="'/all_blogs'">View all Blogs</router-link><br> -->
      <router-link :to="'/'">Back to Home Page</router-link>
      <div></div>
      <br>
      <FooterComp />
    </div>

  </div>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue';
import { getFirestore, collection, getDoc, doc } from 'firebase/firestore';

export default {
  name: 'BlogView',
  data() {
    return {
      blog: null,
      loading: true,
    };
  },
  components: {
    FooterComp,
  },
  watch: {
    '$route.params.id': {
      handler(newId) {
        // Fetch the blog data for the new ID
        this.fetchBlog(newId);
      },
      immediate: true, // Fetch data immediately when the component is mounted
    },
  },
  methods: {
    async fetchBlog() {
      this.loading = true;
      const blogId = this.$route.params.id;

      try {
        // Initialize Firestore
        const db = getFirestore();

        // Reference to the "blogs" collection and the specific document
        const blogCollectionRef = collection(db, 'blogs');
        const blogDocRef = doc(blogCollectionRef, blogId);

        // Fetch the blog data from Firestore
        const docSnap = await getDoc(blogDocRef);

        if (docSnap.exists()) {
          this.blog = docSnap.data();
        } else {
          console.log('Blog not found');
          this.blog = null; // Set blog to null to display "No blog found" message
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setTimeout(() => {
          this.loading = false;
        }, 500);
      }
    },
    },
 


async created() {

  const blogId = this.$route.params.id;
    this.fetchBlog(blogId);
},
};
</script>

<style>
.main {
    max-width: 798px;
    margin: 0 auto;
}
  .blog-title {
    font-weight: 700;
    margin-bottom: 10px;
    -webkit-text-stroke: 1px black;
    text-stroke: 1px black;
    -webkit-text-fill-color: transparent;
    font-family: system-ui;
    background-image: linear-gradient(200deg,#0090ff 31%,#e50000);
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 60px;
    margin-top: -15px;
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
  