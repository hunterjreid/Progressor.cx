<template>
  <div>
    <main class="mx-auto p-4">
      <div style="max-width: 1000px; margin: 0px auto">
        <!-- Parallax Banner -->
        <div class="parallax-banner">
          <div class="banner-content">
            <h1
              class="text-3xl font-bold"
              style="
                font-weight: 700;
                margin-bottom: 10px;
                -webkit-text-stroke: 1px black; /* Adding black outline */
                text-stroke: 1px black; /* Adding black outline */
                -webkit-text-fill-color: transparent;
                font-family: system-ui;
                background: linear-gradient(159deg, #0090ff, #e10000);
                -webkit-background-clip: text;
                background-clip: text;
                font-size: 92px;
              "
            >
              Progressor.cx: Empowering Your Cybersecurity
            </h1>

            <div style="color: black">
              <br />
            </div>
            <br />

            <p
              class="my-4"
              style="
                text-shadow: rgba(0, 0, 0, 0.2) 2px 2px 4px;
                padding: 40px;
                font-weight: bold;
                color: black;
              "
            >
              Engineered as an elite Cybersecurity Chatbot, Progressor.cx
              empowers individuals and businesses by providing real-time
              insights into the evolving cyber threat landscape. Our advanced AI
              technology equips you with the knowledge and tools needed to
              fortify your digital defenses.
            </p>

            <h1 class="text-center font-bold text-3xl mt-8">
              Progressor.cx: Your Cybersecurity Chatbot
            </h1>
            <p class="text-center italic text-gray-600 mt-2">
              Empowering Your Cyber Defense
            </p>

            <section class="my-8">
              <div class="grid grid-cols-3 gap-4">
                <!-- Benefit 1 -->
                <div class="bg-purple-700 p-4">
                  <img src="./../assets/icons/1.png" alt="Security Shield" />
                  <h2 class="font-semibold text-white">
                    Advanced Cybersecurity Insights
                  </h2>
                  <p class="text-white">
                    Elevate your digital security with Progressor.cx's
                    cutting-edge insights. Our chatbot provides real-time
                    updates and analyses of the latest cyber threats, keeping
                    you informed and prepared.
                  </p>
                </div>

                <!-- Benefit 2 -->
                <div class="bg-blue-700 p-4">
                  <img src="./../assets/icons/2.png" alt="Security Training" />
                  <h2 class="font-semibold text-white">
                    Expert Security Training
                  </h2>
                  <p class="text-white">
                    Progressor.cx offers professional guidance to enhance your
                    cybersecurity skills. Our team of experts will help you
                    develop strategies to defend against various cyber attacks
                    and vulnerabilities.
                  </p>
                </div>

                <!-- Benefit 3 -->
                <div class="bg-black p-4">
                  <img src="./../assets/icons/1.png" alt="Security Solutions" />
                  <h2 class="font-semibold text-white">
                    Comprehensive Protection
                  </h2>
                  <p class="text-white">
                    From network security to data encryption, our chatbot covers
                    a wide range of cybersecurity topics. Protect your digital
                    assets with tailored solutions that adapt to evolving
                    threats.
                  </p>
                </div>

                <!-- Benefit 4 -->
                <div class="bg-black p-4">
                  <img src="./../assets/icons/2.png" alt="Global Coverage" />
                  <h2 class="font-semibold text-white">
                    Global Threat Intelligence
                  </h2>
                  <p class="text-white">
                    Progressor.cx ensures you're aware of global cybersecurity
                    trends and incidents. Gain insights into cyber activities
                    around the world, enabling you to fortify your defenses
                    effectively.
                  </p>
                </div>
              </div>
            </section>
            <router-link class="jlinkers" to="/chat">
              <button
                style="margin-bottom: 40px"
                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
              >
                Show me how it works!
              </button>
            </router-link>

            <router-link class="jlinkers" to="/price">
              <button
                style="margin-bottom: 40px"
                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
              >
                PRICING
              </button>
            </router-link>
          </div>
        </div>
      </div>

      <main class="container3">
        <h2 class="font-semibold text-white">
          Companies just trust progressor.cx
        </h2>
        <div style="display: flex; justify-content: space-around">
          <img
            src="@/assets/Manulife_logo.svg"
            style="margin-left: 20px"
            alt="AI Cyber Security"
            class="max-w-md h-auto"
          />
          <img
            src="@/assets/Google_2015_logo.svg"
            style="margin-left: 20px"
            alt="AI Cyber Security"
            class="max-w-md h-auto"
          />
          <img
            src="@/assets/revolut-logo-black-1.svg"
            style="margin-left: 20px"
            alt="AI Cyber Security"
            class="max-w-md h-auto"
          />
          <img
            src="@/assets/Manulife_logo.svg"
            style="margin-left: 20px"
            alt="AI Cyber Security"
            class="max-w-md h-auto"
          />
          <img
            src="@/assets/Google_2015_logo.svg"
            style="margin-left: 20px"
            alt="AI Cyber Security"
            class="max-w-md h-auto"
          />
          <img
            src="@/assets/revolut-logo-black-1.svg"
            style="margin-left: 20px"
            alt="AI Cyber Security"
            class="max-w-md h-auto"
          />
          <img
            src="@/assets/Manulife_logo.svg"
            style="margin-left: 20px"
            alt="AI Cyber Security"
            class="max-w-md h-auto"
          />
          <img
            src="@/assets/Google_2015_logo.svg"
            style="margin-left: 20px"
            alt="AI Cyber Security"
            class="max-w-md h-auto"
          />
          <img
            src="@/assets/revolut-logo-black-1.svg"
            style="margin-left: 20px"
            alt="AI Cyber Security"
            class="max-w-md h-auto"
          />
        </div>
      </main>

      <main class="container3">
        <!-- Text on the right, image on the left -->

        <!-- Services section -->
        <section class="my-8">
          <!-- Benefits in 3x2 tiles -->
          <div class="grid grid-cols-3 gap-4">
            <!-- Benefit 1 -->
            <div class="bg-gray-100 p-4">
              <img
                src="./../assets/icons/22.png"
                class="img_bolco"
                alt="Benefit 1"
              />
              <h2 class="font-semibold">Advanced Threat Detection</h2>
              <p>
                Our AI Chatbot identifies and mitigates emerging cyber threats
                in real-time, safeguarding your systems from potential risks.
              </p>
            </div>

            <!-- Benefit 2 -->
            <div class="bg-gray-100 p-4">
              <img
                src="./../assets/icons/222.png"
                class="img_bolco"
                alt="Benefit 2"
              />
              <h2 class="font-semibold">Collaborative Security</h2>
              <p>
                Join a collaborative network of cybersecurity experts and
                professionals dedicated to fortifying your digital defenses.
              </p>
            </div>

            <!-- Benefit 3 -->
            <div class="bg-gray-100 p-4">
              <img
                src="./../assets/icons/2222.png"
                class="img_bolco"
                alt="Benefit 3"
              />
              <h2 class="font-semibold">Customized Protection</h2>
              <p>
                Tailor the AI Chatbot to your organization's unique security
                requirements and strengthen your cyber resilience.
              </p>
            </div>

            <!-- Benefit 4 -->
            <div class="bg-gray-100 p-4">
              <img
                src="./../assets/icons/22222.png"
                class="img_bolco"
                alt="Benefit 4"
              />
              <h2 class="font-semibold">Expanded Network</h2>
              <p>
                Connect with industry leaders, security analysts, and technology
                providers to expand your cybersecurity knowledge base.
              </p>
            </div>
          </div>
        </section>

        <!-- Social proof slider -->
        <div class="my-8" style="overflow: hidden !important">
          <h2
            class="text-2xl font-bold"
            style="
              font-weight: 700;
              margin-bottom: 10px;
              -webkit-text-stroke: 1px black; /* Adding black outline */
              text-stroke: 1px black; /* Adding black outline */
              -webkit-text-fill-color: transparent;
              font-family: system-ui;
              background-image: linear-gradient(159deg, #0090ff, #e10000);
              -webkit-background-clip: text;
              background-clip: text;
              font-size: 47px;
            "
          >
            What Others say.
          </h2>
          <div
            class="social-slider container3 horizontal-scroll-container"
            style="overflow: hidden !important"
            ref="slider"
          >
            <div
              class="social-item"
              v-for="(item, index) in socialItems"
              :key="index"
            >
              <img :src="item.image" :alt="'OnlyFans User ' + (index + 1)" />
              <p>{{ item.comment }}</p>
              <p>- {{ item.author }}</p>
            </div>
          </div>
        </div>
      </main>

      <main class="container mx-auto p-4">
        <div class="benefits-grid">
          <h2
            class="text-2xl font-bold"
            style="
              font-weight: 700;
              margin-bottom: 10px;
              -webkit-text-stroke: 1px black; /* Adding black outline */
              text-stroke: 1px black; /* Adding black outline */
              -webkit-text-fill-color: transparent;
              font-family: system-ui;
              background-image: linear-gradient(159deg, #0090ff, #e10000);
              -webkit-background-clip: text;
              background-clip: text;
              font-size: 47px;
            "
          >
            Discover the Power of Progressor.cx
          </h2>
          <div class="benefit-box bg-gray-100">
            <h3 class="benefit-title">1. Cybersecurity Expertise</h3>
            <p>
              Harness the proven expertise of Progressor.cx in safeguarding
              digital assets and fortifying cyber defenses.
            </p>
          </div>
          <div class="benefit-box bg-gray-100">
            <h3 class="benefit-title">2. Time Optimization</h3>
            <p>
              Let Progressor.cx manage threat detection, incident response, and
              system monitoring, enabling you to focus on core operations.
            </p>
          </div>
          <div class="benefit-box bg-gray-100">
            <h3 class="benefit-title">3. Revenue Protection</h3>
            <p>
              Establish robust security protocols and safeguard revenue streams
              from cyber threats, ensuring uninterrupted growth.
            </p>
          </div>
          <div class="benefit-box bg-gray-100">
            <h3 class="benefit-title">4. Rapid Defense Advancement</h3>
            <p>
              Experience rapid enhancement in your cyber defense capabilities,
              thwarting attacks and securing business continuity.
            </p>
          </div>
        </div>
      </main>

      <main class="container mx-auto p-4">
        <h2
          class="text-2xl font-bold"
          style="
            font-weight: 700;
            margin-bottom: 10px;
            -webkit-text-stroke: 1px black; /* Adding black outline */
            text-stroke: 1px black; /* Adding black outline */
            -webkit-text-fill-color: transparent;
            font-family: system-ui;
            background-image: linear-gradient(159deg, #0090ff, #e10000);
            -webkit-background-clip: text;
            background-clip: text;
            font-size: 47px;
          "
        >
          Elevate Your Cyber Security with Progressor.cx
        </h2>
        <div class="section-box bg-gray-100">
          <h2 class="section-title">Activate Your Defense</h2>
          <p>
            Let Progressor.cx set up and activate your comprehensive cyber
            security system, ensuring protection from all angles.
          </p>
        </div>
        <div class="section-box bg-gray-100">
          <h2 class="section-title">Free Your Resources</h2>
          <p>
            Allow Progressor.cx to manage threat responses, updates, and
            monitoring, freeing up your resources for strategic growth.
          </p>
        </div>
        <div class="section-box bg-gray-100">
          <h2 class="section-title">Maximize Your ROI</h2>
          <p>
            With Progressor.cx, maximize your Return on Investment by minimizing
            potential losses from cyber attacks and data breaches.
          </p>
        </div>
        <div class="section-box bg-gray-100">
          <h2 class="section-title">Expand Your Resilience</h2>
          <p>
            Progressor.cx strengthens your cyber resilience by continuously
            enhancing your defense strategies against evolving threats.
          </p>
        </div>
      </main>

      <div class="pic-left-text-right">
        <img
          src="../assets/main(2).png"
          alt="Enhance Cyber Security"
          class="max-w-md h-auto"
        />
        <div class="max-w-md">
          <h2 class="text-3xl font-bold">
            Safeguard Your Business from Cybercrime
          </h2>
          <p class="my-4">
            Partner with Progressor.cx to gain access to advanced cyber security
            tools and strategies. Strengthen your defense and protect your
            company from cyber threats.
          </p>
          <button @click="$router.push('/apply')">Ensure Your Security</button>
        </div>
      </div>

      <main class="container3">
        <!-- Call to action -->
        <div class="my-8">
          <h2 class="text-2xl font-bold">
            Defend Your Business Against Cyber Threats
          </h2>
          <p>
            Ready to fortify your company's security and resilience against
            cybercrime? Let's take action together.
          </p>
          <button @click="$router.push('/apply')">Take Action Now</button>
        </div>

        <section class="my-8">
          <h2 class="font-semibold">Experience the Progressor.cx Advantage</h2>
          <h3>Passionate Team, Tangible Results</h3>
          <p>
            Many firms simply fulfill requests without a comprehensive strategy.
            Here at Progressor.cx, our team delves deeper, offering creators a
            comprehensive journey from onboarding to account excellence.
          </p>
          <p>
            Progressor.cx is a data-driven management partner that collaborates
            with creators, delivering a comprehensive service encompassing
            refined onboarding, tools, dedicated expertise, and specialized
            oversight to achieve their objectives.
          </p>

          <div class="my-6">
            <h3 class="text-xl font-bold">How We Empower You</h3>
            <h4 class="text-lg font-semibold">Our Comprehensive Services</h4>
            <ul class="list-disc ml-8">
              <li>Dedicated cybersecurity specialists</li>
              <li>Advanced threat detection</li>
              <li>24/7 monitoring team</li>
              <li>Real-time incident response</li>
              <li>Enhanced data protection</li>
              <li>Security audits and compliance</li>
              <li>Customizable security solutions</li>
            </ul>

            <h4 class="text-lg font-semibold">Cybersecurity Assessment</h4>
            <ul class="list-disc ml-8">
              <li>Comprehensive evaluation of existing security measures</li>
              <li>Clear presentation of strengths and vulnerabilities</li>
              <li>
                Identification of potential risks and areas for improvement
              </li>
            </ul>

            <h4 class="text-lg font-semibold">
              Cybersecurity Enhancement & Defense
            </h4>
            <ul class="list-disc ml-8">
              <li>Continuous monitoring and threat mitigation</li>
              <li>Incident response planning and execution</li>
              <li>Employee cybersecurity training</li>
              <li>Secure communication solutions</li>
            </ul>
          </div>
        </section>
      </main>

      <section
        class="agency-numbers-section bg-gray-100"
        style="max-width: 900px"
      >
        <div class="agency-numbers-grid">
          <div class="agency-number-box">
            <h3 class="agency-number">95</h3>
            <p class="agency-number-description">ORGANIZATIONS ENHANCED</p>
          </div>
          <div class="agency-number-box">
            <h3 class="agency-number">245%</h3>
            <p class="agency-number-description">AVERAGE THREAT MITIGATION</p>
          </div>
          <div class="agency-number-box">
            <h3 class="agency-number">132%</h3>
            <p class="agency-number-description">CYBER RESILIENCE BOOST</p>
          </div>
        </div>

        <h4 class="col-span-6 text-xl font-bold">
          Join Our Exclusive Cyber Security Alliance
        </h4>
        <!-- Title section with Success Stories, Benefits, and Apply Button -->
        <div class="mb-8">
          <h2 class="text-2xl font-bold">
            Unveil Your Potential with Progressor.cx
          </h2>
          <!-- Add your success stories, testimonials, and related content here -->
          <div
            class="mb-4"
            style="
              display: flex;
              align-items: center;
              justify-content: space-around;
            "
          >
            <!-- Include your content like videos or testimonials here -->
          </div>
          <p class="mb-4">
            Discover how Progressor.cx can empower you to strengthen your cyber
            security defenses.
          </p>
          <ApplyComp />
          <div class="youtube-section">
            <h2 class="youtube-section-title">Client Experiences</h2>
            <p>
              The foundation of triumph is built upon the relationships one
              nurtures, invests in, and values. At Progressor.cx, this is
              precisely our approach.
            </p>
            <h2 class="col-span-6 text-2xl font-bold">
              Elevate Your Cyber Security Standards
            </h2>
            <div class="youtube-video">
              <iframe
                src="https://www.youtube.com/embed/EKdZutMkmTE"
                title="YouTube video 1"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                width="832px"
                height="468px"
              ></iframe>
            </div>
            <div class="youtube-video">
              <iframe
                src="https://www.youtube.com/embed/EKdZutMkmTE"
                title="YouTube video 1"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                width="832px"
                height="468px"
              ></iframe>
            </div>
            <div class="youtube-video">
              <iframe
                src="https://www.youtube.com/embed/EKdZutMkmTE"
                title="YouTube video 1"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                width="832px"
                height="468px"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <main class="container mx-auto p-4">
        <!-- Title section with H2 grid -->

        <!-- Our Commitment section -->
        <section class="my-8">
          <h2 class="text-2xl font-bold">Our Commitment to Your Security</h2>
          <ul class="list-disc ml-8">
            <li>
              Strategic Protection: Regardless of your current security level,
              we specialize in elevating your defenses and adapting to emerging
              threats.
            </li>
            <li>
              Loyalty Above All: Loyalty forms the foundation of our
              collaboration. We prioritize it to ensure your utmost security.
              Mutual loyalty is our foundation.
            </li>
            <li>
              Confidentiality Guaranteed: We pledge to uphold your trust and
              potential by safeguarding all data, information, and security
              measures. Your confidentiality is assured.
            </li>
            <li>
              Unmatched Expertise: With years of industry mastery, we offer
              precise insights for fortified defenses. We're dedicated to your
              digital resilience.
            </li>
          </ul>
        </section>

        <!-- FAQ section -->
        <section class="my-8">
          <FAQComp />
        </section>

        <!-- Contact form section -->
        <!-- Include your contact form or related content here -->
      </main>
    </main>

    <FooterComp />
  </div>
</template>

<script>
import axios from "axios";
import FooterComp from "@/components/FooterComp.vue"; // Adjust the path
import ApplyComp from "@/components/ApplyComp.vue"; // Adjust the path
import FAQComp from "@/components/FAQComp.vue"; // Adjust the path

export default {
  name: "HomeView",
  data() {
    return {
      socialItems: [
        {
          image: require("@/assets/reviews/1.png"),
          comment:
            "Love the cybersecurity solutions from Progressor.cx. They've boosted our defenses significantly.",
          author: "David Anderson🛡️",
        },
        {
          image: require("@/assets/reviews/2.png"),
          comment:
            "Choosing Progressor.cx was a game-changer for our security posture. Best decision ever!",
          author: "Michael Thompson🛡️",
        },
        {
          image: require("@/assets/reviews/1.png"),
          comment:
            "Progressor.cx's cybersecurity services are exceptional! They've helped us fend off threats effectively.",
          author: "John Smith🛡️",
        },
        {
          image: require("@/assets/reviews/2.png"),
          comment:
            "The cybersecurity solutions provided by Progressor.cx are unparalleled. Highly recommend!",
          author: "Robert Johnson🛡️",
        },
        {
          image: require("@/assets/reviews/1.png"),
          comment:
            "We're addicted to the security boost from Progressor.cx. They've made our systems more resilient.",
          author: "William Brown🛡️",
        },
        {
          image: require("@/assets/reviews/2.png"),
          comment:
            "Investing in Progressor.cx was a strategic move. They've fortified our defenses brilliantly.",
          author: "James Garcia🛡️",
        },
        {
          image: require("@/assets/reviews/1.png"),
          comment:
            "Progressor.cx's cybersecurity solutions are top-tier. Our digital assets are safer than ever.",
          author: "Daniel Martinez🛡️",
        },
        {
          image: require("@/assets/reviews/2.png"),
          comment:
            "We're proud clients of Progressor.cx. Their expertise has ensured a strong security foundation.",
          author: "Andrew Jessie🛡️",
        },
      ],
      currentScrollPosition: 0,
      scrollInterval: null,
    };
  },
  components: {
    FooterComp,
    ApplyComp,
    FAQComp,
  },
  mounted() {
    this.startHorizontalAutoScroll();
    window.addEventListener("load", window.scrollTo({ top: 0 }));
  },
  beforeUnmount() {
    clearInterval(this.scrollInterval);
  },
  methods: {
    startHorizontalAutoScroll() {
      this.scrollInterval = setInterval(() => {
        const container = document.querySelector(
          ".horizontal-scroll-container"
        );
        if (container) {
          this.currentScrollPosition += 1; // Adjust scroll speed if needed
          container.scrollLeft = this.currentScrollPosition;
          const maxScrollWidth = container.scrollWidth - container.clientWidth;
          if (this.currentScrollPosition >= maxScrollWidth) {
            this.currentScrollPosition = 0;
          }
        }
      }, 50); // Adjust interval as needed
    },

    scrollToItem(index) {
      const slider = this.$refs.slider;
      if (slider) {
        const item = slider.getElementsByClassName("social-item")[index];
        if (item) {
          slider.scrollLeft = item.offsetLeft;
        }
      }
    },

    onFileChange(event) {
      const file = event.target.files[0];
      this.profilePicture = URL.createObjectURL(file);

      const formData = new FormData();
      formData.append("picture", file);

      // Make an API call to upload the picture
      axios
        .post(`${this.$root.api_prefix}/api/upload_picture`, formData)
        .then((response) => {
          // Handle the response if needed
          console.log("Profile picture uploaded successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error uploading profile picture:", error);
          // Handle the error if needed
        });
    },
    toggleFAQ(faqName) {
      this[faqName] = !this[faqName];
    },
  },
};
</script>

<style scoped>
.agency-numbers-grid {
  display: flex;

  justify-content: center;
  align-items: center;
}

.agency-numbers-section {
  display: flex;
  background: #bb44b0;
  border: 2px solid #000;
  border-radius: 22px;
  justify-content: center;
  padding: 20px;
  align-items: center;
  background: linear-gradient(159deg, #0090ff, #e10000);
  text-align: center;
  flex-direction: column;
  max-width: 1080px;
  margin: 0 auto;
}

@media (max-width: 600px) {
  /* Adjust padding and margins for better spacing */
  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
  main {
    padding: 0px;
  }
  .parallax-banner {
    height: unset !important;
  }
  .p-4 {
    text-align: center;
  }
}

.contact-form {
  margin-top: 2rem;
}

.contact-form h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
}

.contact-form label {
  display: block;
  margin-bottom: 0.5rem;
}

/* Bottom section styles */
.bottom-section {
  background-color: #000;
  color: #fff;
  padding: 4rem 0;
  text-align: center;
}
.img_bolco {
  max-width: 120px;
}

.bottom-content {
  max-width: 800px;
  margin: 0 auto;
}

.bottom-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.bottom-btn {
  background-color: #3d5af1;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

.bottom-btn:hover {
  background-color: #2c4ae8;
}
.blog-title {
  font-weight: bold;
  margin-bottom: 10px;
  -webkit-text-fill-color: transparent;

  background-image: linear-gradient(to left, #0090ff 31%, #e10000);
  -webkit-background-clip: text;
  background-clip: text;
  font-size: 84px;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  font-size: 1rem;
}
.youtube-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.contact-form button[type="submit"] {
  background-color: #747474;
  color: #fff;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
}

.contact-form button[type="submit"]:hover {
  background-color: #474747;
}

.contact-form input:focus,
.contact-form textarea:focus,
.contact-form input:hover,
.contact-form textarea:hover {
  border-color: #2c2d2e;
}

/* Add your custom styles here */
.video-placeholder {
  width: 100%;
  height: 300px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #555;
}
/* Body font and background */
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

/* Main container */
.container {
  max-width: 800px;
  margin: 0 auto;
}

/* Main heading style */
h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

/* Button style */
button {
  background-color: #3d5af1;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

button:hover {
  background-color: #2c4ae8;
}

/* FAQ section */
.faq-container {
  margin-top: 2rem;
}
/* Add your custom styles here */
.banner {
  background-color: #f5f5f5;
  padding: 2rem;
  text-align: center;
}

/* Align pic left, text right */
.pic-left-text-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.custom-button {
  background-color: #3490dc;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.agency-number {
  font-size: 47px;
  color: white;
}

.agency-number-description {
  font-size: 27px;
  color: white;
}

.custom-button:hover {
  background-color: #a71a7c;
}

.custom-button.active {
  transform: scale(0.95);
}
.pic-left-text-right img {
  max-width: 26%;
  height: auto;
  padding: 20px;
  margin-right: 20px;
}

/* Social Proof Slider styles */
.social-slider {
  display: flex;
  overflow-x: auto;
  margin-top: 1rem;
}

.social-item {
  flex: 0 0 200px;
  margin-right: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  text-align: center;
}

.social-item img {
  max-width: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
}
.faq-item {
  margin-bottom: 1rem;
}

.faq-question {
  font-size: 1.25rem;
  background-color: #181818;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.faq-question:hover {
  background-color: #f0f0f0;
}

.faq-answer {
  padding: 0.5rem 1rem;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}

/* Contact form section */
.contact-form {
  margin-top: 2rem;
}

.contact-form h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
}

.contact-form label {
  display: block;
  margin-bottom: 0.5rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  font-size: 1rem;
}

h1,
h2,
h3,
h4,
h5 {
  color: #333;
  font-weight: bold;
}

/* Styling for paragraph text */
p {
  color: #555;
}

/* Styling for buttons */
button {
  background-color: #3d5af1;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

button:hover {
  background-color: #2c4ae8;
}

/* Styling for form elements */
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}

/* Styling for the parallax banner */

.banner-content {
  max-width: 800px;
  margin: 0 auto;
}

/* Styling for the "Learn More" button */
.jlinkers {
  text-decoration: none;
}

.jlinkers button {
  margin-bottom: 40px;
  background: white;

  color: black;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-family: system-ui;
  padding: 8px 16px;
  border-radius: 8px;
}
.jlinkers button:hover {
  background-image: linear-gradient(270deg, #0cc6c0 31%, #c54ea8);
}

/* Styling for the bottom section */
.bottom-section {
  background-color: #000;
}

.bottom-title {
  color: #fff;
}

.bottom-btn {
  background-color: #3d5af1;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

.bottom-btn:hover {
  background-color: #2c4ae8;
}
.parallax-banner {
  background-image: url("@/assets/imgg.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Enable parallax effect */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
}

.banner-content {
  max-width: 1280px;
  margin: 0 auto;
}
.container3 {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}
</style>
