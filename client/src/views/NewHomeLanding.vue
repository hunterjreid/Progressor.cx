<template>
    <div style="max-width: 800px; margin: 0 auto; padding: 20px; padding-top: 0px;">



        <div class="bg_img">
      <h1 class="titleee">Progress with Progressor.cx</h1>
      <h4  class="below_para2">
Are you concerned about the security of your code, Just ask progressor!</h4>
      <h1 class="below_para">Engineered to perfectionProgressor Cyber Security Q&A Chat Bot" – Your Ultimate Code Security Companion!
 </h1>

</div>


<h2 class="font-semibold text-white font-semiboldcxs " style="text-align: center;">Companies just trust progressor.cx</h2>
    <div style="display: flex;
  justify-content: space-around;">
        <img src="@/assets/Manulife_logo.svg" style="margin-left:20px;" alt="AI Cyber Security" class="max-w-md h-auto" />
        <img src="@/assets/Manulife_logo.svg" style="margin-left:20px;" alt="AI Cyber Security" class="max-w-md h-auto" />
        <img src="@/assets/Manulife_logo.svg" style="margin-left:20px;" alt="AI Cyber Security" class="max-w-md h-auto" />   <img src="@/assets/Manulife_logo.svg" style="margin-left:20px;" alt="AI Cyber Security" class="max-w-md h-auto" />
        <img src="@/assets/Manulife_logo.svg" style="margin-left:20px;" alt="AI Cyber Security" class="max-w-md h-auto" />
    </div>


    <div class="what_is_box">
    <h2 class="font-semibold text-white" style="text-align: center;">What is progressor.cx?</h2>
    <h1 class="titleee3">Find and fix vulnerabilities with a single responce</h1>










    <section class="my-8">
    <!-- Benefits in 3x2 tiles -->
    <div class="grid grid-cols-3 gap-4">
      <!-- Benefit 1 -->
      <div class="bg-gray-100 p-4">
        <img src="./../assets/icons/22.png" class="img_bolco" alt="Benefit 1">
        <h2 class="font-semibold">Loving Comunity</h2>
        <p>Join our cybersecurity journey - feel the warmth of our family and our unwavering support.</p>
      </div>

      <!-- Benefit 2 -->
      <div class="bg-gray-100 p-4">
        <img src="./../assets/icons/222.png" class="img_bolco" alt="Benefit 2">
        <h2 class="font-semibold">Always ahead of the curb</h2>
        <p>Stay ahead in cybersecurity with our expert network, always one step ahead of emerging threats.</p>
      </div>

      <!-- Benefit 3 -->
      <div class="bg-gray-100 p-4">
        <img src="./../assets/icons/2222.png" class="img_bolco" alt="Benefit 3">
        <h2 class="font-semibold">Save your company money</h2>
        <p>Global cybercrime costs rise yearly, with businesses losing billions - a constant battleground.</p>
      </div>


    </div>

    <h2 class="font-semibold text-white" style="text-align: center;">Why wait?</h2>
  </section>











</div>
 <FooterComp />
      

    </div>
  </template>
  
  <script>
  import FooterComp from '@/components/FooterComp.vue';

  
  export default {
    name: 'NewHomeLanding',
    components: {
      FooterComp,

    }
  };
  </script>
  
  <style>
  
  .bg_img {
    background-image: url('@/assets/main225.png'); 
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 370px;
    padding: 100px 0px;
  }
  .titleee {
    font-weight: 900;
    margin-top: 0px;
    font-size: 50px;
    color: rgb(255, 255, 255);
    padding: 20px;
    margin: 0px;
    margin-left: 20px;
    width: 300px;
    margin-top: -100px;
  }

  .what_is_box {
    padding: 20px;
    background: #c2c2c2;
    margin-top: 20px;
    border-radius: 10px;
  }

  .titleee3 {
    margin-top: 0px;
    font-size: 38px;text-align: center;
  }

  .below_para {
    font-weight: 900;
    margin-top: 0px;
    /* font-size: 50px; */
    color: rgb(255, 255, 255);
    padding: 20px;
    margin: 0px;
    margin-left: 20px;
    width: 400px;
    font-size: 20px;
  }

  .below_para2 {
    font-weight: 900;
    margin-top: 0px;
    /* font-size: 50px; */
    color: rgb(172, 236, 255);
    padding: 20px;
    margin: 0px;
    margin-left: 20px;
    width: 400px;
    font-size: 16px;
  }

::-webkit-scrollbar {
  display: none;
}
  .contact-info {
    margin-top: 20px;
  }
  .contact-info h2 {
    margin-top: 10px;
  }


  @media only screen and (max-width: 600px) {

    .bg_img {
        background-image: url(http://localhost:8080/img/main225.cef4fc43.png);
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 50px;
    padding: 100px 0px;
    }
  .titleee {
    margin-top: -60px;
    width: 180px;
    padding: 2px;
    font-size: 22px;



}
.font-semiboldcxs {
    font-size: 14px;
    margin: 0;
    text-align: center;
    margin-bottom: 10px;
}

.below_para {
    display: none;
}

.below_para2 {
font-size: 12px;

width: 180px;
padding: 2px;

  }
}
  /* Your existing styles here */
  </style>
  