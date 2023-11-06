<template>
  <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
    <h1>Update Log</h1>

    <div class="updates">
      <h2>Version Updates</h2>
      <ul>
        <li v-for="(update, index) in updates" :key="index">
          <strong class="version-header">Version {{ update.version }}</strong> - {{ update.date }}:
          <p class="update-description">{{ update.description }}</p>
        </li>
      </ul>
    </div>

    <FooterComp />
  </div>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue';

export default {
  name: 'UpdatesView',
  components: {
    FooterComp,
  },
  data() {
    return {
      updates: [
        {
          version: '1.0',
          date: '2023-01-15',
          description: 'Initial release of our application.',
        },
        {
          version: '1.1',
          date: '2023-03-10',
          description: 'Added new features and improved performance.',
        },
        {
          version: '1.2',
          date: '2023-05-20',
          description: 'Fixed several bugs and enhanced user experience.',
        },
        {
          version: '1.3',
          date: '2023-07-15',
          description: 'Introduced a new user interface design.',
        },
        {
          version: '1.4',
          date: '2023-09-05',
          description: 'Optimized application for mobile devices.',
        },
        {
          version: '1.5',
          date: '2023-11-10',
          description: 'Added support for multiple languages.',
        },
        {
          version: '1.6',
          date: '2024-01-15',
          description: 'Implemented user feedback and suggestions.',
        },
        {
          version: '1.7',
          date: '2024-03-20',
          description: 'Enhanced security and data privacy features.',
        },
        {
          version: '1.8',
          date: '2024-05-15',
          description: 'Improved performance and reduced load times.',
        },
        {
          version: '1.9',
          date: '2024-07-10',
          description: 'Added integration with third-party services.',
        },
        {
          version: '2.0',
          date: '2024-09-20',
          description: 'Major update with new features and enhancements.',
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
