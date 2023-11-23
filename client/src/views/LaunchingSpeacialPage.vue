<template>
  <div style="max-width: 800px; margin: 0 auto; padding: 20px">
    <div v-if="$route.query.status == undefined">
      <h1>Introducing our Special Launch Offer - $1 for 10K!</h1>
      <h2>
        Make a one-time payment of $1.00USD to get 10,000 Tokens to use in
        Progressor chat.
      </h2>
    </div>

    <div class="custom-amount">
      <button
        style="font-size: 30px"
        @click="payWithStripe"
        :disabled="paymentProcessing || this.customAmount == 0"
      >
        Pay
      </button>
      <p v-if="paymentProcessing">
        Proceeding to payment screen. Please wait...
      </p>
      <div class="loading-spinner" v-if="paymentProcessing">
        <img
          alt="Logo"
          src="./../assets/SPINNER.png"
          class="max-w-xs"
          style="height: 50px; padding: 25px"
        />
      </div>
    </div>
    <h1 v-if="$route.query.status == 'confirmed'">
      Your coins have now been added !!!
    </h1>
    <p v-if="$route.query.status == 'confirmed'">
      Payment confirmed. Enjoy your coins!
    </p>
    <h1 v-if="$route.query.status == 'declined'">
      Payment cancelled or declined
    </h1>

    <br />

    <FooterComp />
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import FooterComp from "@/components/FooterComp.vue";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { Stripe } from "stripe";

const stripe = new Stripe(
  "sk_test_51HRBTFBewAw4IAEuztSDWicx95ofc2cYNB5uAGpFP4rWqlYY2puzq3JEPVfbuRMRRDdG9uHEf1M0kOzPtfBa30cL00vRf6R6jH"
);

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
      const userRef = doc(getFirestore(), "users", uid);
      console.log("adding token");
      // Use the increment method to add tokens
      await updateDoc(userRef, { tokens: increment(amount) });
    },
    setPaymentOption(option) {
      this.paymentOption = option;
      this.customAmount = this.$route.query.pricing;
    },
    async payWithStripe() {
      this.paymentProcessing = true;

      const product = await stripe.products.create({
        name: "Progressor.cx - AI Cybersecurity Chatbot",
      });

      const price = await stripe.prices.create({
        unit_amount: 1 * 100, // Amount in cents
        currency: "usd",
        product: product.id,
      });

      const checkoutSession = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        customer_email: this.$root.user.email,
        line_items: [{ price: price.id, quantity: 1 }],
        mode: "payment",
        success_url: "https://progressor.cx/bonus_deal?status=confirmed",
        cancel_url: "https://progressor.cx/bonus_deal?status=declined",
      });

      const paymentRef = collection(getFirestore(), "payments");
      const paymentData = {
        uid: getAuth().currentUser.uid,
        paymentId: checkoutSession.id,
        paymentOption: this.paymentOption,
        paid: false,
      };

      await addDoc(paymentRef, paymentData);

      if (this.$route.query.status === "confirmed") {
        console.log("adding token");
        await this.updateTokenCount(getAuth().currentUser.uid, 1000); // Add 1000 tokens
      }

      // Update the user's token count when the payment is confirmed.

      window.location.href = checkoutSession.url;
      this.paymentProcessing = false;
    },
  },
  async mounted() {
    this.setPaymentOption("oneTime");
    // Check if the route is payment confirmed and execute logic
    if (this.$route.query.status === "confirmed") {
      // Wait for the authentication state to be ready
      const unsubscribe = onAuthStateChanged(getAuth(), async (user) => {
        if (user) {
          // Update the user's token count when the payment is confirmed.
          await this.updateTokenCount(user.uid, 1000); // Add 1000 tokens
        } else {
          console.error("User not authenticated");
        }

        // Unsubscribe to onAuthStateChanged to avoid memory leaks
        unsubscribe();
      });
    }
  },
};
</script>

<style>
:disabled {
  opacity: 0.2;
}
.loading-spinner {
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;
}
</style>
