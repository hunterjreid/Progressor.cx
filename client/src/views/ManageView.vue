<template>
  <div style="max-width: 800px; margin: 0 auto; padding: 0 20px">
    <div v-if="user">
      <h1>ACCOUNT, {{ user.email }}</h1>

      <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />

      <button @click="cancelSubscription">Cancel Subscription</button>
      <button style="background-color: #3b6bbd" @click="renewSubscription">
        Renew Subscription
      </button>
      <button style="background-color: #6e4a83" @click="upgradeSubscription">
        Upgrade Subscription
      </button>
      <button style="background-color: #9b2c4e" @click="manageBilling">
        Manage Billing
      </button>
      <button style="background-color: rgb(180 29 51)" @click="viewUsage">
        View Usage
      </button>

      <button style="background-color: #ce0c15" @click="logout">Logout</button>
    </div>
    <div v-else>
      <p>You are not logged in...</p>
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Signup</router-link>
    </div>
    <div v-if="usageInfo">
      <h2>Usage Information</h2>
      <ul>
        <li v-for="usage in usageInfo" :key="usage.id">
          {{ usage.timestamp }} - {{ usage.tokensUsed }} tokens used
        </li>
      </ul>

      <!-- Chart to display usage information -->
    </div>
  </div>
</template>

<script>
import {
  getFirestore,
  collection,
  orderBy,
  getDocs,
  query,
} from "firebase/firestore";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  data() {
    return {
      user: this.$root.user,
      subscriptionInfo: null,
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [{ data: [40, 20, 12] }],
      },
      chartOptions: {
        responsive: true,
      },
      usageInfo: [
        { id: 1, timestamp: "2023-01-01 10:00 AM", tokensUsed: 50 },
        { id: 2, timestamp: "2023-01-02 12:30 PM", tokensUsed: 30 },
        { id: 3, timestamp: "2023-01-03 03:45 PM", tokensUsed: 20 },
        // Add more usage data as needed
      ],
      chartInstance: null,
    };
  },
  components: { Bar },
  methods: {
    async viewUsage() {
      try {
        const userUid = this.$root.user.uid;

        if (!userUid) {
          console.error("User ID is empty or undefined.");
          return;
        }

        const db = getFirestore();
        const usageRef = collection(db, "usage");
        const querySnapshot = await getDocs(
          query(usageRef, orderBy("timestamp", "desc"))
        );

        // Extract usage information from the query snapshot
        const usageData = [];
        querySnapshot.forEach((doc) => {
          usageData.push(doc.data());
        });

        // Update the data property with the retrieved data
        this.usageInfo = usageData;

        // Update the chart with the new data
        this.updateChart();

        // Update the chartData property with the tokensUsed values from the retrieved data
        this.chartData.datasets[0].data = this.usageInfo.map(
          (usage) => usage.tokensUsed
        );
        this.chartData.labels = this.usageInfo.map((usage) => usage.timestamp);
      } catch (error) {
        console.error("Error fetching usage information:", error);
      }
    },

    logout() {
      // Implement logout logic
    },
    cancelSubscription() {
      // Implement subscription cancellation logic
    },
    renewSubscription() {
      // Implement subscription renewal logic
    },
    upgradeSubscription() {
      // Implement subscription upgrade logic
    },
    manageBilling() {
      // Implement billing management logic
    },
  },
  created() {
    this.viewUsage();
  },
};
</script>

<style scoped>
@media (max-width: 600px) {
  h1 {
    font-size: 1.2em;
  }
}
/* Keep necessary styling as per your design */
</style>
