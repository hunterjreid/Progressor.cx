<template>
  <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
    <h1>
      You have chosen the ${{ $route.query.pricing }} plan. Select a payment option:
    </h1>

    <li>
      <input type="radio" name="paymentOption" @click="setPaymentOption('oneTime')" value="oneTime">
      One-Time Payment (${{ $route.query.pricing }})
    </li>

    <div class="custom-amount">
      <button @click="payWithStripe" :disabled="paymentProcessing || this.customAmount == 0">
        Pay with Stripe
      </button>
      <p v-if="paymentProcessing">Proceeding to payment screen. Please wait...</p>
    </div> 
    <p v-if="$route.query.status == 'confirmed'">Payment confirmed. Enjoy your coins!</p>
      <p v-if="$route.query.status == 'declined'">Payment declined. Payment method failed.</p>
   
    <br/>

    <FooterComp />
  </div>
</template>

<script>
import { getAuth } from 'firebase/auth';
import FooterComp from "@/components/FooterComp.vue";
import { getFirestore, collection, addDoc, doc, updateDoc } from 'firebase/firestore';
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
      paymentOption: "oneTime",
    };
  },
  methods: {
    async updateTokenCount(uid, amount) {
      const userRef = doc(getFirestore(), 'users', uid);
      await updateDoc(userRef, { tokens: amount });
    },
    setPaymentOption(option) {
      this.paymentOption = option;
      this.customAmount = this.$route.query.pricing;
    },
    async payWithStripe() {
      this.paymentProcessing = true;

      const product = await stripe.products.create({
        name: 'Progressor.cx - AI Cybersecurity Chatbot',
      });

      const price = await stripe.prices.create({
        unit_amount: 1 * 100, // Amount in cents
        currency: 'usd',
        product: product.id,
      });

      const checkoutSession = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{ price: price.id, quantity: 1 }],
        mode: 'payment',
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
      });

      const paymentRef = collection(getFirestore(), "payments");
      const paymentData = {
        uid: getAuth().currentUser.uid,
        paymentId: checkoutSession.id,
        paymentOption: this.paymentOption,
        paid: false,
      };

      await addDoc(paymentRef, paymentData);

      // Update the user's token count when the payment is confirmed.
      if (this.paymentOption === 'oneTime' && this.$route.query.status === 'confirmed') {
        await this.updateTokenCount(getAuth().currentUser.uid, 1000); // Add 1000 tokens
      }

      window.open(checkoutSession.url, "_blank", "width=800,height=600");
      this.paymentProcessing = false;
    },
  },
};
</script>

<style>
:disabled {
  opacity: 0.2;
}
</style>
