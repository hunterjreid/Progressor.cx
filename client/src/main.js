import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import routes from './router.js';
import { initializeApp } from "firebase/app";



const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router).use(require('vue-cookies'));

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1WnxeRZW57reJWEyF3S4KIVnwHqG3xLs",
  authDomain: "progressor-cx.firebaseapp.com",
  projectId: "progressor-cx",
  storageBucket: "progressor-cx.appspot.com",
  messagingSenderId: "1083453696705",
  appId: "1:1083453696705:web:2af3d693b3591e88b38240",
  measurementId: "G-STCTPS3VDY"
};

// Initialize Firebase using a different variable
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

app.mount('#app');
