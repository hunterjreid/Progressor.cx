<template>
  <div>
    <div class="container" style="maring-bottom: 20px">
      <h1>Token System</h1>
      <p>
        Tokens are the currency of Progressor!. Each token represents 2
        characters. For example:
      </p>

      <ul class="feature-list">
        <li>
          <i class="fas fa-check-circle"></i>Small questions requires 20 tokens.
        </li>
        <li>
          <i class="fas fa-check-circle"></i>Detailed questions might consume
          50-200 tokens.
        </li>
      </ul>

      <p>
        With 100,000 tokens, your capacity would increase accordingly, allowing
        you to perform alot of tasks.
      </p>
      <button
        @click="$router.push({ path: '/pricing' })"
        style="maring-bottom: 20px"
      >
        Back
      </button>
      <br />
      <FooterComp />
    </div>
  </div>
</template>

<script>
import FooterComp from "@/components/FooterComp.vue";

export default {
  name: "HowtokensWorkPage",
  components: {
    FooterComp,
  },
  data() {
    return {
      showPopup: true,
    };
  },
  methods: {},
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0px auto;
  padding: 0px 20px;
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
</style>
