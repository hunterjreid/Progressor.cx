<template>
  <div style="max-width: 800px; margin: 0 auto; padding: 20px">
    <h1>Update Log</h1>

    <div class="updates">
      <h2>Version Updates</h2>
      <ul>
        <li v-for="(update, index) in updates" :key="index">
          <strong class="version-header">Version {{ update.version }}</strong> -
          {{ update.date }}:
          <p class="update-description">{{ update.description }}</p>
        </li>
      </ul>
    </div>

    <FooterComp />
  </div>
</template>

<script>
import FooterComp from "@/components/FooterComp.vue";

export default {
  name: "UpdatesView",
  components: {
    FooterComp,
  },
  data() {
    return {
      updates: [
        {
          version: "1.0",
          date: "24 November 2023",
          description: "Initial release of progressor.cx.",
        },

        // You can continue adding more updates here
      ],
    };
  },
};
</script>

<style>
ui {
  background-color: aliceblue;
}
.contact-info {
  margin-top: 20px;
}
.contact-info h2 {
  margin-top: 10px;
}

.updates {
  margin-top: 20px;
}
.updates h2 {
  margin-top: 10px;
}

.version-header {
  font-size: 18px; /* Adjust the font size as needed */
  color: #007bff; /* Change the color as desired */
}

.update-description {
  margin-top: 5px; /* Adjust the top margin as needed */
  font-size: 16px; /* Adjust the font size as needed */
  /* You can add more styles here, such as font color or background color */
}
</style>
