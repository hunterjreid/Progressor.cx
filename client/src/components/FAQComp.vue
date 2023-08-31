<template>
    <div>
      <section class="my-8">
        <h2 class="text-2xl font-bold">Frequently Asked Questions (FAQ)</h2>
        <div class="faq-container">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <button class="faq-question" @click="toggleFAQ(index)">{{ faq.question }}</button>
            <div v-if="faq.open" class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <style>
    /* Add your CSS styles here */
    .faq-container {
      background-color: #f6f2f8; /* Light purple */
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    .faq-item {
      margin: 10px 0;
      border: 1px solid #e0d0e8; /* Light pink */
      border-radius: 5px;
      padding: 10px;
    }
  
    .faq-question {
      font-size: 16px;
      font-weight: bold;
      color: #000000; /* Purple */
      background-color: #ffd6f61e; /* Light pink */
      padding: 8px 12px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      width: 100%;
      text-align: left;
      transition: background-color 0.3s ease;
    }
  
    .faq-question:hover {
        color: #ffffff; /* Purple */
      background-color: #2e2e2ec2; /* Darker pink on hover */
    }
  
    .faq-answer {
        margin-top: 10px;
    font-size: 14px;
    color: #ffffff;
    background-color: #b4cf1b;
    background: linear-gradient(45deg, #ff00a638, #00ffcc);background: linear-gradient(159deg, #0090ff, #e10000);
    text-align: center;
    padding: 12px;
    border: 2px solid #00000038;
    }
  </style>
  
  <script>
  export default {
    name: 'FAQComp',
    data() {
      return {
        faqs: [
          {
            question: "How can Progressor.cx enhance my cybersecurity?",
            answer: "Answer 1: Progressor.cx offers a comprehensive suite of cybersecurity solutions including threat detection, incident response, secure communication, and more. Our experts work closely with you to tailor our services to your specific needs.",
            open: false
          },
          {
            question: "Do I need to have advanced technical knowledge to use Progressor.cx?",
            answer: "Answer 2: Not at all. Progressor.cx is designed to be user-friendly and accessible. Our team will guide you through the setup process and provide ongoing support to ensure effective utilization.",
            open: false
          },
          {
            question: "What types of businesses can benefit from Progressor.cx?",
            answer: "Answer 3: Progressor.cx caters to businesses of all sizes and industries. Whether you're a startup, a mid-sized company, or an enterprise, our cybersecurity solutions can be tailored to suit your unique requirements.",
            open: false
          },
          {
            question: "How long does it take to see improvements in cybersecurity?",
            answer: "Answer 4: The timeline for improvements can vary based on your current security posture and the specific services you're using. However, our proactive approach ensures that you'll start seeing enhanced security measures shortly after implementation.",
            open: false
          },
          {
            question: "Is Progressor.cx compliant with industry standards?",
            answer: "Answer 5: Absolutely. Progressor.cx adheres to industry best practices and compliance standards to ensure your cybersecurity measures are in line with the latest regulations and guidelines.",
            open: false
          },
          {
            question: "How can I get started with Progressor.cx?",
            answer: "Answer 6: To start securing your digital assets with Progressor.cx, follow these steps [provide step-by-step guidance or direct users to a specific page where they can find the information they need to start]. If you have further inquiries, our team is here to assist.",
            open: false
          },
          {
            question: "Can I customize the cybersecurity services based on my needs?",
            answer: "Answer 7: Certainly! Progressor.cx provides customizable cybersecurity solutions to align with your specific needs and challenges. Our team will collaborate with you to create a tailored plan that addresses your unique security requirements.",
            open: false
          },
          {
            question: "Is my company's sensitive information safe with Progressor.cx?",
            answer: "Answer 8: Absolutely. Protecting your company's sensitive information is our top priority. We employ advanced encryption, access controls, and data protection protocols to ensure the confidentiality and integrity of your data.",
            open: false
          },
          {
            question: "What ongoing support does Progressor.cx provide?",
            answer: "Answer 9: Progressor.cx offers continuous monitoring, regular updates, incident response services, and ongoing consultation to ensure your cybersecurity remains robust. Our team is always available to assist you with any questions or concerns.",
            open: false
          },
          {
            question: "How can I address specific cybersecurity concerns unique to my industry?",
            answer: "Answer 10: Progressor.cx takes a personalized approach to cybersecurity. If you have industry-specific concerns, our experts will work with you to tailor our solutions and strategies to address the challenges unique to your sector.",
            open: false
          }
        ]
      };
    },
    methods: {
      toggleFAQ(index) {
        this.faqs[index].open = !this.faqs[index].open;
      }
    }
  };
  </script>
  