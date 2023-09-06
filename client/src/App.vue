<!-- Progressor.cx https://github.com/hunterjreid/Progressor.cx -->
<!-- MAIN -->
<template>
    <div id="master">
      <header v-if="$route.path !== '/chat'" class="header">
        <div class="gradient-header2 wave-bottom" style="z-index: 99999">
          <p class="header-text">
            Welcome to Progressor.cx! Try now.
            <a>
              <router-link style="color: white" @click="closeMenu" to="/chat"
                >Click Here try Progressor.cx</router-link
              ></a
            >
          </p>
        </div>
        <div
          class="header-content container mx-auto flex justify-between items-center"
        >
          <router-link @click="closeMenu" to="/">
            <img
              alt="Logo"
              src="./assets/logo_clean.png"
              class="max-w-xs logo r3r3"
              style="height: 30px"
              @click="navigateToHome"
            />
          </router-link>
          <router-link
            @click="closeMenu"
            style="text-decoration: none"
            to="/home2"
          >
            <a class="header_link">What</a>
          </router-link>
          <router-link
            @click="closeMenu"
            style="text-decoration: none"
            to="/landing"
          >
            <a class="header_link">Blogs ↓</a>
          </router-link>
          <router-link
            @click="closeMenu"
            style="text-decoration: none"
            to="/privacy"
          >
            <a class="header_link">Privacy</a>
          </router-link>
  
          <a @click="menuOpen = !menuOpen" style="cursor: pointer">
            <span v-html="menuOpen ? upArrowIcon : dropdownIcon"></span>
            {{ menuOpen ? 'Company' : 'Company' }}
          </a>
          <router-link
            @click="closeMenu"
            style="text-decoration: none"
            to="/price"
          >
            <a class="header_link">Pricing</a>
          </router-link>
        </div>
        <div v-if="menuOpen" class="b_menthis">
          <router-link to="/home2" @click="closeMenu" class="link">
            <span class="emoji">🌟</span> Fancy New Screen
          </router-link>
          <router-link to="/apply" @click="closeMenu" class="link">
            <span class="emoji">📝</span> Apply
          </router-link>
          <router-link to="/terms" @click="closeMenu" class="link">
            <span class="emoji">📜</span> Terms
          </router-link>
          <router-link to="/services" @click="closeMenu" class="link">
            <span class="emoji">🚀</span> Services
          </router-link>
          <router-link to="/contact" @click="closeMenu" class="link">
            <span class="emoji">📞</span> Contact
          </router-link>
          <router-link to="/faq" @click="closeMenu" class="link">
            <span class="emoji">❓</span> FAQ
          </router-link>
          <router-link to="/career" @click="closeMenu" class="link">
            <span class="emoji">🎃</span> Careers V2
          </router-link>
  
          <button
            v-if="this.$cookies.isKey('admin')"
            @click="$router.push('/admin')"
            style="
              border: 1px solid black;
              margin: 20px;
              margin-top: 0px;
              background: linear-gradient(45deg, red, orange);
            "
          >
            <span class="emoji">👑</span> ADMIN PANEL
          </button>
        </div>
      </header>
      <header v-else class="header">
        <div
          style="
            height: 100px;
            z-index: 99999;
            background: linear-gradient(159deg, rgb(0, 0, 0), rgb(111, 111, 111));
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          "
        >
          <router-link
            to="/"
            @click="closeMenu"
            style="font-size: 64px"
            class="link"
          >
            <span class="emoji">👈</span>
          </router-link>
  
          <img
            alt="Logo"
            src="./assets/logo_clean.png"
            class="max-w-xs logo r3r3"
            style="max-width: 330px"
          />
        </div>
      </header>
  
      <main
        id="mainSCROL"
        @click="closeMenu"
        style="
          height: calc(100% - 100px);
          position: fixed;
          overflow-y: scroll;
          bottom: 0px;
          width: 100%;
          padding: 0px;
        "
        :style="{ backgroundColor: $route.path === '/chat' ? 'black' : '' }"
      >
        <router-view></router-view>
      </main>
    </div>
  </template>
<!-- JS -->
<script>
  
  export default {
    name: "App",
  
    data() {
      return {
        api_prefix: `http://${location.hostname}:3001`,
        // CHANGE IN PROD ^^^^^^^^^^^^^^^^^^^^^^^^

        menuOpen: false,
        activeDropdown: null,
        isDropdownVisible: {
          aboutus: false,
          contactus: false,
  
        },
      };
    },
  
    methods: {
        toggleDropdown(menu) {
      if (this.activeDropdown === menu) {
        this.activeDropdown = null;
      } else {
        this.activeDropdown = menu;
      }
    }, scrollToTop() {
        const element = document.getElementById("mainSCROL");
        if (element) {
        element.scrollTo({ top: 0 });
      }
  
    },
  
      closeMenu() {
      this.menuOpen = false;
    },
  
      showDropdown(menu) {
        this.isDropdownVisible[menu] = true;
      },
      hideDropdown(menu) {
        this.isDropdownVisible[menu] = false;
      },
      handleScroll() {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const triggerHeight = windowHeight * 0.5;
        if (scrollY > triggerHeight) {
          this.hideDropdown('aboutus');
  
        }
      },
    },
    watch: {
    $route() {
      this.scrollToTop();
      this.closeMenu();
    },
  },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  };
  </script>
<!-- STYLE GLOBAL -->
<style>
  * {
    font-family: "Almarai", sans-serif;
    font-family: "Comfortaa", cursive;
  
    font-weight: 400;
  
    font-style: normal;
  }
  
  .header-text {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    margin: 0;
    margin-bottom: 15px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  }
  
  /* Add bubbles */
  .gradient-header::before {
    content: "";
    position: absolute;
    bottom: -15px;
    left: -15px;
    right: -15px;
    height: 30px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0) 80%
    );
    border-radius: 50% / 100px 100px 0 0;
    z-index: -2;
  }
  
  .social-icons .social-icon i {
    font-size: 24px;
    color: #fff;
  }
  
  .jlinkers {
    font-size: 14px;
    color: #00c3ff;
  }
  
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    margin: 0;
    padding: 0;
  }
  .footer-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .contact,
  .site-map,
  .social {
    max-width: none; /* Reset max-width to take full width */
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  #master {
    background: black;
  }
  
  img {
    max-width: 200px;
  }
  
  main {
    padding: 20px;
  }
  
  .dropdown {
    position: relative;
    margin-left: 20px;
    transition: 0.3s;
  }
  
  .dropdown span {
    cursor: pointer;
    color: rgb(0, 0, 0);
    font-size: 20px;
    text-decoration: none;
  }
  
  .dropdown-content {
    display: flex;
    left: 0px;
    position: relative;
    background: #cdcdcd;
    border-radius: 19px;
    right: 0px;
    padding: 0px 10px;
    flex-direction: column;
    margin-bottom: -230px;
  }
  
  .dropdown-content router-link {
    display: block;
    margin: 5px 0;
    color: white;
    text-decoration: none;
  }
  
  .dropdown-content {
    opacity: 0;
    transition: opacity 0.3s;
    /* Other styles remain the same */
  }
  
  .dropdown-content.visible {
    opacity: 1;
  }
  
  button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #2c3e50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #34495e;
  }
  
  footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0px;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .contact,
  .social {
    flex: 1;
    max-width: 300px;
  }
  
  .contact h3,
  .social h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .contact p,
  .social p {
    margin: 0;
  }
  
  header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    right: 0;
    background-color: #fff;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    flex-direction: column;
    align-items: stretch;
  }
  
  nav {
    display: flex;
    margin-top: 50px;
    justify-content: flex-start;
  }
  
  nav a {
    margin-left: 20px;
    color: rgb(0, 0, 0);
    font-size: 20px;
    text-decoration: none;
  }
  
  /* Additional styling for the mobile menu */
  /* Set mobile menu width to 100% */
  .md\\:hidden {
    display: block;
    width: 100%;
  }
  
  /* Grid links */
  .grid-links {
    /* Optional: Center the links horizontally */
    display: flex;
    justify-content: center;
  }
  
  .header {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  .wave-top::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 10px;
    background-size: 20px 40px;
    background-image: radial-gradient(
      circle at 10px -15px,
      transparent 20px,
      rgba(237, 30, 30, 1) 21px
    );
  }
  
  .wave-top::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 15px;
    background-size: 40px 40px;
    background-image: radial-gradient(
      circle at 10px 26px,
      rgba(237, 30, 30, 1) 20px,
      transparent 21px
    );
  }
  
  .wave-mid {
    background-color: rgba(237, 30, 30, 1);
    height: 50px;
  }
  
  .wave-bottom {
    position: relative;
  }
  .header_link {
    font-size: 13px;
    font-weight: bold;
    color: #000;
    margin: 0;
    margin-bottom: 15px;
  
    text-decoration: none !important;
  }
  
  .wave-bottom::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 10px;
    background-size: 20px 40px;
    background-image: radial-gradient(
      circle at 10px -15px,
      transparent 20px,
      #fff 21px
    );
  }
  
  .wave-bottom::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 15px;
    background-size: 40px 40px;
    background-image: radial-gradient(
      circle at 10px 26px,
      #fff 20px,
      transparent 21px
    );
  }
  .gridx {
    text-align: center;
    display: flex;
    justify-content: center;
  }
  
  .b_menthis {
    background: linear-gradient(159deg, #0091ff2f, #e100002a);
    color: white;
    text-align: center;
  }
  
  .gradient-header2 {
    background: linear-gradient(159deg, #0090ff, #e10000);
    text-align: center;
  }
  
  .header-text {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    padding: 10px 0px 15px 0px;
    margin: 0;
  }
  .header__ {
    background: #ff00a6;
    text-align: center;
    padding: 2px 20px;
  }
  
  /* Main header section */
  .main-header {
    /* Add your existing styles here */
  }
  
  .r3r3 {
    margin-right: 140px !important;
  }
  
  /* Mobile menu */
  .mobile-menu {
    width: 60%;
    background-color: aqua;
  }
  .link {
    display: block;
    margin-bottom: 10px;
    text-decoration: none;
    color: #333;
    font-size: 18px;
  }
  @media (min-width: 600px) {
    /* Adjust padding and margins for better spacing */
    .header_link {
      margin: 10px;
      font-size: 20px;
    }
  }
  
  .emoji {
    margin-right: 10px;
  }
  .grid router-link {
    padding: 10px;
    background-color: #2c3e50;
    color: #fff;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    display: block;
  }
  @media (max-width: 600px) {
    .r3r3 {
      margin: 0px !important;
    }
    /* Adjust padding and margins for better spacing */
    .container {
      max-width: 100%;
      display: flex;
      flex-direction: column;
    }
    #master {
      width: calc(100% + 10px);
      overflow-x: hidden; /* Hide horizontal overflow */
    }
    .header-content {
      max-width: 100%;
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      font-size: 12px;
      padding: 0px !important;
    }
    /* Adjust font sizes */
    .header-text {
      padding: 12px;
      font-size: 12px;
    }
    body {
      overflow-x: hidden; /* Hide horizontal overflow at the body level */
    }
  
    /* Other adjustments as needed */
  }
  
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  
    z-index: 1000; /* Ensure the header stays above other content */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a shadow for a subtle effect */
    transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Add transitions for smooth effects */
  }
  
  .header-content {
    padding: 10px 20px; /* Add padding to the header content */
  }
  
  .router-link-exact-active {
    text-shadow: 2px 2px 4px rgb(22, 93, 247) !important;
  }
  </style>
  