<template>
  <div class="main">
    <h1 class="ewqew">Cybersecurity Landscape</h1>

    <div class="grid-container">
  <div class="grid-item" @click="$router.push('/blog/Mobile_Security')">
    <img src="@/assets/land/191.png" alt="Placeholder Image 1">
    <h2>Mobile Security</h2>
  </div>
  <div class="grid-item" @click="$router.push('/blog/Site_Threats')">
    <img src="@/assets/land/6339325.png" alt="Placeholder Image 2">
    <h2>Site Threats</h2>
  </div>
  <div class="grid-item" @click="$router.push('/blog/Folder_Protection')">
    <img src="@/assets/land/32.png" alt="Placeholder Image 3">
    <h2>Folder Protection</h2>
  </div>
  <div class="grid-item" @click="$router.push('/blog/General_Protection')">
    <img src="@/assets/land/3100148.png" alt="Placeholder Image 3">
    <h2>General Protection</h2>
  </div>
  <div class="grid-item" @click="$router.push('/blog/Provision_Protection')">
    <img src="@/assets/land/7211075.png" alt="Placeholder Image 3">
    <h2>Provision Protection</h2>
  </div>
  <div class="grid-item" @click="$router.push('/blog/Encryption')">
    <img src="@/assets/land/encryption-icon.png" alt="Placeholder Image 6">
    <h2>Encryption</h2>
  </div>
  <div class="grid-item" @click="$router.push('/blog/Site_Security')">
    <img src="@/assets/land/5803128.png" alt="Placeholder Image 3">
    <h2>Site Security</h2>
  </div>
  <div class="grid-item" @click="$router.push('/blog/Online_Privacy')">
    <img src="@/assets/land/3759829.png" alt="Placeholder Image 3">
    <h2>Online Privacy</h2>
  </div>
  <div class="grid-item" @click="$router.push('/blog/Antivirus')">
    <img src="@/assets/land/1705438.png" alt="Placeholder Image 3">
    <h2>Antivirus</h2>
  </div>


  <div class="grid-item" @click="$router.push('/blog/Security_Threats')">
  <img src="@/assets/land/2716638.png" alt="Placeholder Image 3">
  <h2>Security Threats</h2>
</div>

<div class="grid-item" @click="$router.push('/blog/DDoS_Protection')">
  <img src="@/assets/land/2431664.png" alt="Placeholder Image 3">
  <h2>DDoS Protection</h2>
</div>

<div class="grid-item" @click="$router.push('/blog/Network_Security')">
  <img src="@/assets/land/1200px-Internet-icon.svg.png" alt="Placeholder Image 3">
  <h2>Network Security</h2>
</div>

<div class="grid-item" @click="$router.push('/blog/Identity_Management')">
  <img src="@/assets/land/3663601-200.png" alt="Placeholder Image 3">
  <h2>Identity Management</h2>
</div>

<div class="grid-item" @click="$router.push('/blog/Cloud_Security')">
  <img src="@/assets/land/4232136.png" alt="Placeholder Image 3">
  <h2>Cloud Security</h2>
</div>

<div class="grid-item" @click="$router.push('/blog/Email_Security')">
  <img src="@/assets/land/4232118.png" alt="Placeholder Image 3">
  <h2>Email Security</h2>
</div>

<div class="grid-item" @click="$router.push('/blog/IoT_Security')">
  <img src="@/assets/land/1185915.png" alt="Placeholder Image 3">
  <h2>IoT Security</h2>
</div>

<div class="grid-item" @click="$router.push('/blog/Anti_Privilege_Escalation')">
  <img src="@/assets/land/4043562-200.png" alt="Placeholder Image 3">
  <h2>Anti Privilege Escalation</h2>
</div>

<div class="grid-item" @click="$router.push('/blog/Intrusion_Detection_Systems')">
  <img src="@/assets/land/2588216-200.png" alt="Placeholder Image 3">
  <h2>Intrusion Detection Systems</h2>
</div>

<div class="grid-item" @click="$router.push('/blog/Configuration_Error')">
  <img src="@/assets/land/1520680-200.png" alt="Placeholder Image 3">
  <h2>Configuration Error</h2>
</div>

<div class="grid-item" @click="$router.push('/blog/Identity_and_Access_Management')">
  <img src="@/assets/land/7482661.png" alt="Placeholder Image 3">
  <h2>Identity and Access Management</h2>
</div>

</div>
  
    
    <br>
    <FooterComp/>
  </div>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue';
export default {
  name: 'CyberLandscape',
  components: {
    FooterComp,
  },
};
</script>

<style>
.ewqew {
  font-size: 47px;
    background: linear-gradient(159deg, #0090ff, #e10000);
    padding: 20px;
    color: white;
    text-align: center;
    border-radius: 10px;
}
.main {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 0px;
} 

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.grid-item {
  padding: 20px;
  cursor: pointer;
  border-radius: 10px;
  color: rgb(0, 0, 0);
  text-align: center;
  background-color: rgb(212, 212, 212);
}

.grid-item img {
  max-width: 100%;
  border-radius: 5px;
}

@media (max-width: 600px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  .grid-item {
    padding: 2px;
    border-radius: 10px;
    color: white;
  }

  .main {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
}
</style>
