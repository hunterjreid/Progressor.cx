<template>

  <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
    <h1 class="titlew">You're just <b>one step</b> away from becoming a member of the Progressors Club!</h1>
    <p>
      You have chosen the ${{ $route.query.pricing }} plan. Would you like to pay monthly or annually?
    </p>
 
 
 
      <li>
        <input type="radio" name="subscriptionPlan"  @click="this.customAmount=  $route.query.pricing, subscriptionPlan = 'month'"   value="monthly"><a class="subscriptionPlan"> Monthly (${{ $route.query.pricing }}/month)</a>
      </li>
      <li>
        <input type="radio" name="subscriptionPlan"  @click="this.customAmount =  $route.query.pricing * 11.2, subscriptionPlan = 'year'" value="annual"> <a class="subscriptionPlan">Annual (${{ ($route.query.pricing * 11.2).toFixed(2) }}/year)</a> <a style="       background: rgb(228, 9, 9);
    color: white;">⭐ 7% CHEAPER LESS MONTHLY</a>
      </li>
    

    <div class="custom-amount">
      <!-- <label for="amount">Enter Amount:</label> -->
      <!-- <input
        type="number"
        id="amount"
        v-model="customAmount"
        min="1"
        step="0.01"
      /> -->
      <button @click="payWithStripe" :disabled="paymentProcessing || this.customAmount == 0">
        Pay
      </button>
      <div class="loading-spinner" v-if="paymentProcessing">      <img   alt="Logo" src="./../assets/SPINNER.png" class="max-w-xs" style="    height: 50px;
    padding: 25px;" /></div>
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
      subscriptionPlan: "month",
      
    };
  },
  methods: {

    
    
    async payWithStripe() {
  this.paymentProcessing = true;



  const product = await stripe.products.create({
  name: 'Progressor.cx - AI Cybersecuirty Chatbot',
});

// Create a price for the product (representing $19 per month)
const price = await stripe.prices.create({
  unit_amount: this.customAmount*100, // Amount in cents (19 dollars)
  currency: 'usd',
  recurring: {
    interval: this.subscriptionPlan,
  },
  product: product.id,
});

// Create a checkout session for the subscription
const checkoutSession = await stripe.checkout.sessions.create({
  mode: 'subscription',
  customer_email:  this.$root.user.email ,
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

<style scoped>
.titlew {
  font-family: 'M PLUS 1 Code';
  font-style: 20px;
}
:disabled {
  opacity: 0.2;
}
.subscriptionPlan {
  font-size: 2em;
}
button {
  font-size: 2em;
}

</style>
