<template>

  <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
    <br>  <br>  <br>  <br>  <br>
    <h1>Choose a Subscription Plan</h1>

    <ul>
      <li>
        <input type="radio" name="subscriptionPlan" value="monthly"> Monthly ($10/month)
      </li>
      <li>
        <input type="radio" name="subscriptionPlan" value="annual"> Annual ($100/year)
      </li>
    </ul>

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
      <button @click="payWithStripe" :disabled="paymentProcessing">
        Pay with Stripe
      </button>
      <p v-if="paymentProcessing">Proceeding to payment screen. Please wait...</p>
    </div>

    <br />

    <FooterComp />
  </div>
</template>

<script>
import { getAuth } from 'firebase/auth';
import FooterComp from "@/components/FooterComp.vue";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { Stripe } from "stripe";

const stripe = new Stripe("sk_test_51HRBTFBewAw4IAEuztSDWicx95ofc2cYNB5uAGpFP4rWqlYY2puzq3JEPVfbuRMRRDdG9uHEf1M0kOzPtfBa30cL00vRf6R6jH");

export default {
  name: "PaymentPage",
  components: {
    FooterComp,
  },
  data() {
    return {
      customAmount: 0,
      paymentProcessing: false,
      paymentLink: "",
      subscriptionId: "",
      subscriptionPlan: "monthly",
    };
  },
  methods: {

    
    
    async payWithStripe() {
  this.paymentProcessing = true;



  const product = await stripe.products.create({
  name: 'Monthly Subscription',
});

// Create a price for the product (representing $19 per month)
const price = await stripe.prices.create({
  unit_amount: 1900, // Amount in cents (19 dollars)
  currency: 'usd',
  recurring: {
    interval: 'month',
  },
  product: product.id,
});

// Create a checkout session for the subscription
const checkoutSession = await stripe.checkout.sessions.create({
  mode: 'subscription',
  payment_method_types: ['card'],
  line_items: [
    {
      price: price.id,
      quantity: 1,
    },
  ],
  success_url: 'https://example.com/success',
  cancel_url: 'https://example.com/cancel',
});

  // Add the payment information to Firebase.
  const subscriptionRef = collection(getFirestore(), "subscriptions");
  const subscriptionData = {
    uid: getAuth().currentUser.uid,
    subscriptionId: checkoutSession.id,
    subscriptionPlan: this.subscriptionPlan,
    active: true,
  };
  await addDoc(subscriptionRef, subscriptionData);

  // Redirect the user to the Stripe Checkout session URL.
  window.open(checkoutSession.url, "_blank", "width=800,height=00");
  this.paymentProcessing = false;
}
  },
};
</script>
