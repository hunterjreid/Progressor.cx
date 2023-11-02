<template>
  <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
    <h1>Enter the Amount and Pay with Stripe</h1>

    <div class="custom-amount">
      <label for="amount">Enter Amount:</label>
      <input
        type="number"
        id="amount"
        v-model="customAmount"
        min="1"
        step="0.01"
      />
      <button @click="payWithStripe">Pay with Stripe</button>
    </div>
    <br />

    <FooterComp />
  </div>
</template>
<script>
import { getAuth } from 'firebase/auth';
import FooterComp from "@/components/FooterComp.vue";
import { Stripe } from "stripe";
import { collection } from 'firebase/firestore';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const stripe = new Stripe("sk_test_51HRBTFBewAw4IAEuztSDWicx95ofc2cYNB5uAGpFP4rWqlYY2puzq3JEPVfbuRMRRDdG9uHEf1M0kOzPtfBa30cL00vRf6R6jH");

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
    async payWithStripe() {
      const auth = getAuth();
      const user = auth.currentUser;
      const uid = user.uid;

const subscriptionsRef = collection(getFirestore(), "subscriptions");

// Data for the subscription
      const subscriptionData = {
        uid: uid,
        price: this.customAmount,
        successUrl: "YOUR_SUCCESS_URL", // Replace with your success URL
        cancelUrl: "YOUR_CANCEL_URL", // Replace with your cancel URL
      };

try {
        // Add the document to Firestore
        const docRef = await subscriptionsRef.add(subscriptionData);
        console.log("Document written with ID: ", docRef.id);

// Use the Stripe instance to create a payment intent
        const paymentIntent = await stripe.paymentIntents.create({
          amount: this.customAmount * 100, // Stripe amount is in cents
          currency: "usd", // Change to your desired currency
        });

// You'll get a client secret from the paymentIntent
        const clientSecret = paymentIntent.client_secret;

// Redirect the user to the Stripe Payment Page
        // You can use stripe.redirectToCheckout() instead of window.location.href
        window.location.href = `https://checkout.stripe.com/pay/${clientSecret}`;
      } catch (error) {
        console.error("Error adding document or creating payment intent: ", error);
      }
    },
  },
};
</script>