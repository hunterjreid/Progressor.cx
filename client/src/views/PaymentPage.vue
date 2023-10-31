<template>
  <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
    <h1>Enter the Amount and Pay with Stripe</h1> 
    <a v-if="your_id">Payment generated with id : {{ your_id }}</a>

    <!-- Custom Amount Input -->
    <div class="custom-amount">
      <label for="amount">Enter Amount:</label>
      <input type="number" id="amount" v-model="customAmount" />
      <button @click="payWithStripe">Pay with Stripe</button>
    </div>
    <br>

    <FooterComp /> <!-- Your existing code here -->
  </div>
</template>

<script>
import FooterComp from "@/components/FooterComp.vue";
import { Stripe } from "stripe";

const stripe = Stripe("sk_test_51HRBTFBewAw4IAEuztSDWicx95ofc2cYNB5uAGpFP4rWqlYY2puzq3JEPVfbuRMRRDdG9uHEf1M0kOzPtfBa30cL00vRf6R6jH");

export default {
  name: "PaymentPage",
  components: {
    FooterComp,
  },
  data() {
    return {
      customAmount: 0,
      your_id: "",
    };
  },
  methods: {
    payWithStripe() {
      // Use the Stripe instance to create a payment intent
      stripe.paymentIntents
        .create({
          amount: this.customAmount * 100, // Stripe amount is in cents
          currency: "usd", // Change to your desired currency
        })
        .then((paymentIntent) => {
          // You'll get a client secret from the paymentIntent
          const clientSecret = JSON.stringify(paymentIntent);

          // Call a function to handle the payment on the client side
          this.handlePayment(clientSecret);
        });
    },
    handlePayment(clientSecret) {
      console.log(clientSecret)
      this.your_id += [ clientSecret ] 
      // Use Stripe Elements to handle the payment
      // You can find more details about Stripe Elements in the Stripe documentation
      // https://stripe.com/docs/stripe-js/elements/quickstart
    },
  },
};
</script>

<style scoped>
.custom-amount {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.custom-amount label {
  margin-right: 10px;
}

.custom-amount input {
  width: 100px;
}

.custom-amount button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.custom-amount button:hover {
  background-color: #0056b3;
}
</style>
