<template>
  <div style="max-width: 800px; margin: 0 auto; padding: 20px">
    <div
      class="pricing-card"
      style="
        width: calc(100% - 46px);
        background: white;
        border-image: linear-gradient(#ff1313, #5c85ff) 30;
        border-width: 4px;
        border-style: solid;
      "
    >
      <div class="right-left">
        <div>
          <h2>Introducing our Special Launch Offer - $1 for 10K!</h2>

          Make a one-time payment of $1.00USD to get 10,000 Tokens to use in
          Progressor chat. <i class="fa fa-check"></i>
          <br />
          <button
            v-if="!$root.user"
            style="
              margin-bottom: 40px;
              font: 1em sans-serif;
              background: linear-gradient(270deg, #ff1313 31%, #5c85ff);
            "
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
            @click="$router.push('/login')"
          >
            Sign up now to experience
          </button>
          <button
            v-else
            style="
              color: black;
              font-size: 20px;
              color: white;
              border: 1px solid white;
              width: 30%;
              margin-bottom: 40px;
              background: linear-gradient(270deg, rgb(5, 5, 5) 91%, #5c85ff);
            "
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
            @click="$router.push({ path: '/bonus_deal' })"
          >
            Redeem now
          </button>
        </div>
        <img src="@/assets/offer.png" />
      </div>
    </div>
    <!-- Your existing code here -->
    <h1>Enjoy straightforward pricing that suits any scale seamlessly.</h1>

    <!-- Pricing Cards -->
    <div class="pricing-cards">
      <!-- Card 1 -->
      <div class="pricing-card">
        <h2>$9/month</h2>
        <ul class="feature-list">
          <li><i class="fa fa-check"></i> 250 Tokens/Day</li>
          <li><i class="fa fa-check"></i> Access to Basic Features</li>
          <li><i class="fa fa-check"></i> Email and Chat Support</li>
        </ul>
        <button
          v-if="!$root.user"
          style="
            margin-bottom: 40px;
            font: 1em sans-serif;
            background: linear-gradient(270deg, #ff1313 31%, #5c85ff);
          "
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
          @click="$router.push('/login')"
        >
          Sign Up to Continue
        </button>
        <button
          v-else
          style="
            margin-bottom: 40px;
            font: 1em sans-serif;
            background: linear-gradient(270deg, #ff1313 31%, #5c85ff);
          "
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
          @click="$router.push({ path: '/pricing2', query: { pricing: 9 } })"
        >
          Pay now
        </button>
      </div>

      <!-- Card 2 -->
      <div class="pricing-card">
        <h2>$19/month</h2>
        <ul class="feature-list">
          <li><i class="fa fa-check"></i> 1,000 Tokens/Day</li>
          <li><i class="fa fa-check"></i> Access to Advanced Features</li>
          <li><i class="fa fa-check"></i> Email and Chat Support</li>
        </ul>

        <button
          v-if="!$root.user"
          style="
            margin-bottom: 40px;
            font: 1em sans-serif;
            background: linear-gradient(270deg, #ff1313 31%, #5c85ff);
          "
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
          @click="$router.push('/login')"
        >
          Sign Up to Continue
        </button>
        <button
          v-else
          style="
            margin-bottom: 40px;
            font: 1em sans-serif;
            background: linear-gradient(270deg, #ff1313 31%, #5c85ff);
          "
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
          @click="$router.push({ path: '/pricing2', query: { pricing: 19 } })"
        >
          Pay now
        </button>
      </div>

      <!-- Card 3 -->
      <div class="pricing-card largest-card">
        <h2>$42/month</h2>
        <ul class="feature-list">
          <li><i class="fa fa-check"></i> 10,000 Tokens/Day</li>
          <li><i class="fa fa-check"></i> Access to Premium Features</li>
          <li><i class="fa fa-check"></i> Priority Support 24/7</li>
        </ul>

        <button
          v-if="!$root.user"
          style="
            margin-bottom: 40px;
            font: 1em sans-serif;
            background: linear-gradient(270deg, #131212 31%, #6a6a6d);
          "
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
          @click="$router.push('/login')"
        >
          Sign Up to Continue
        </button>
        <button
          v-else
          style="
            margin-bottom: 40px;
            font: 1em sans-serif;
            background: linear-gradient(270deg, #ff1313 31%, #5c85ff);
          "
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
          @click="$router.push({ path: '/pricing2', query: { pricing: 42 } })"
        >
          Pay now
        </button>
      </div>

      <!-- Custom Price Card -->
      <div class="pricing-card custom-card">
        <h2>Custom Price</h2>
        <h2>Progressor PLUS+</h2>
        <li><i class="fa fa-check"></i> Infinite Tokens</li>
        <p>
          Contact us for a personalized plan tailored to your requirements,
          including custom token limits and additional benefits.
        </p>
        <button @click="$router.push('/apply')">Contact</button>
      </div>
    </div>
    <router-link class="jlinkers" to="/pricing2"> </router-link>
    <h2>
      If Progressor isn't to your liking, we offer hassle-free refunds at any
      time.
    </h2>
    <router-link class="jlinkers" to="/tokens">
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
      >
        How do tokens work?
      </button>
    </router-link>
    <p>Your Satisfaction is 100% Guaranteed or Your Money Back</p>
    <FooterComp />
    <!-- Your existing code here -->
  </div>
</template>

<script>
import FooterComp from "@/components/FooterComp.vue";

export default {
  name: "PricingPage",
  components: {
    FooterComp,
  },
  data() {
    return {
      showPopup: true,
    };
  },
  methods: {
    closePopup() {
      this.showPopup = false;
    },
    selectPlan() {
      // Handle the selected plan based on the price
      // You can add your logic here, for example, showing a confirmation dialog.
    },
    showCustomPriceDialog() {
      // Show a dialog or navigate to a custom pricing page
    },
  },
};
</script>

<style scoped>
.right-left {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row-reverse;
  align-items: center;
}
.notice-box {
  background: linear-gradient(270deg, #ff1313 31%, #5c85ff);
  text-align: center;
  display: flex;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  border: 1px solid black;
  border-radius: 14px;
}
.feature-list {
  list-style-type: none;
  padding: 0;
}

.feature-list li {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.feature-list li i {
  margin-right: 5px;
  color: #007bff;
}

.pricing-card.largest-card {
  color: white;
  background: linear-gradient(159deg, #0090ff, #e10000);
  font-size: 23px;
  border: 2px solid #007bff;
}

.custom-card {
  background-color: #31eeee3b !important; /* Custom background color for the largest card */
  font-size: 28px; /* Increase font size for the largest card */
  border: 2px solid #007bff18; /* Add a border for emphasis */
}

/* Styling for Pricing Cards */
.pricing-cards {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.pricing-card {
  width: calc(23% - 40px);
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.pricing-card h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.pricing-card p {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.pricing-card button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.pricing-card button:hover {
  background-color: #0056b3;
}

@media (max-width: 600px) {
  .pricing-card {
    width: calc(100% - 70px);
  }
  .pricing-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
