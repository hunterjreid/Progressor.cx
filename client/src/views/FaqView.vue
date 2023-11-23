<template>
  <div style="max-width: 800px; margin: 0 auto; padding: 20px">
    <FAQComp />
    <br />
    <b>
If you have any additional questions, feel free to reach out to us via email!</b><br /><br />
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from "@/components/FooterComp.vue";
import FAQComp from "@/components/FAQComp.vue";
export default {
  name: "FaqView",
  components: {
    FooterComp,
    FAQComp,
  },
};
</script>
