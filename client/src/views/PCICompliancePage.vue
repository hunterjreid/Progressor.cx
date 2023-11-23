<template>
  <div class="main">
    <h1 class="title">PCI Compliance Policy</h1>
    <p class="description">
      Welcome to our PCI Compliance Page. As users of our platform, your
      commitment to maintaining PCI compliance is essential for secure and
      responsible data handling.
    </p>

    <h3 class="sub-title">Introduction:</h3>
    <p class="sub-description">
      These guidelines govern your use of our platform, ensuring PCI compliance
      and ethical data practices.
    </p>

    <h3 class="sub-title">Your Commitments:</h3>
    <p class="sub-description">By using our platform, you commit to:</p>
    <ul class="list">
      <li>
        Adhering to ethical and responsible handling of payment card data.
      </li>
      <li>
        Respecting privacy and data protection principles, ensuring
        confidentiality of cardholder information.
      </li>
      <li>
        Being transparent about data handling practices and capabilities to
        users.
      </li>
      <li>
        Not using the platform for malicious purposes, including unauthorized
        access or data breaches.
      </li>
      <li>
        Promptly reporting any security concerns or issues related to data
        handling.
      </li>
    </ul>

    <h3 class="sub-title">Payment Processing with Stripe:</h3>
    <p class="sub-description">
      To ensure PCI compliance, we leverage Stripe, a secure and PCI DSS
      compliant payment processing platform. When handling payment card data, we
      adhere to the following practices:
    </p>
    <ul class="list">
      <li>
        Integration with Stripe Elements to securely collect and tokenize
        payment information directly on our platform without sensitive data
        passing through our servers.
      </li>
      <li>
        Utilization of Stripe's Payment Intent API to dynamically confirm
        payments and handle client-side confirmation while maintaining a high
        level of security.
      </li>
      <li>
        Regularly updating our integration with the latest Stripe API versions
        and security enhancements to align with PCI DSS requirements.
      </li>
      <li>
        Implementing best practices recommended by Stripe to enhance the overall
        security of payment transactions.
      </li>
    </ul>

    <h1 class="title">Our Commitments:</h1>
    <h3 class="sub-title">Transparency and Security:</h3>
    <p class="sub-description">
      We are dedicated to transparency and security in data handling, including:
    </p>
    <ul class="list">
      <li>
        Providing clear explanations of data handling processes, ensuring users
        understand how and why their information is processed.
      </li>
      <li>
        Implementing measures to identify and mitigate any security risks,
        ensuring fair treatment for all users.
      </li>
      <li>
        Regularly updating and improving our systems to incorporate the latest
        advancements in security practices and compliance standards.
      </li>
      <li>
        Ensuring data privacy and security in processing payment card
        information, maintaining compliance with PCI DSS regulations.
      </li>
      <li>
        Engaging with the community and stakeholders for feedback on security
        measures, fostering transparency and inclusivity in the development
        process.
      </li>
      <li>
        Conducting regular audits to assess and address potential security
        concerns in the handling of payment card data.
      </li>
      <li>
        Collaborating with industry experts and regulatory bodies to contribute
        to the responsible handling of payment card information and staying
        informed about emerging security considerations.
      </li>
    </ul>

    <h3 class="sub-title">User Empowerment:</h3>
    <p class="sub-description">We empower users by:</p>
    <ul class="list">
      <li>
        Providing clear information on how payment card data is used and stored.
      </li>
      <li>
        Offering accessible and user-friendly documentation on data handling
        procedures and controls.
      </li>
      <li>
        Ensuring users have the ability to manage their consent for data
        processing and opt-out if necessary.
      </li>
      <li>
        Facilitating user education on PCI compliance and providing resources
        for understanding data security implications.
      </li>
    </ul>

    <h3 class="sub-title">Continuous Improvement:</h3>
    <p class="sub-description">
      We are committed to continuously improving our systems for PCI compliance
      by:
    </p>
    <ul class="list">
      <li>
        Staying informed about advancements in data security and PCI DSS
        compliance, incorporating the latest research and best practices.
      </li>
      <li>
        Actively seeking feedback from users, experts, and the broader community
        to enhance our security measures.
      </li>
      <li>
        Regularly reviewing and updating our PCI compliance policies to reflect
        evolving security standards and user expectations.
      </li>
      <li>
        Investing in research and development to address emerging security
        challenges in payment card data handling.
      </li>
    </ul>

    <p class="last-updated">Last Updated: November 18, 2023</p>
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from "@/components/FooterComp.vue";

export default {
  name: "PCICompliancePage",
  components: {
    FooterComp,
  },
};
</script>

<style scoped>
.main {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
