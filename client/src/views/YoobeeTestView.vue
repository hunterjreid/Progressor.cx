<template>
    <div class="container">
      <div class="chat">
        <div class="chat-message bot">
          <img class="profile-picture" src="../assets/bot.png" alt="Bot" />
          <p>Welcome! This is a test for the WIP for Yoobee made by Hunter.</p>
        </div>
        <!-- Add more chat messages as needed -->
      </div>
      <iframe src='https://webchat.botframework.com/embed/Progressobot?s=HTNwiepQjKA.GufCNOhqhGtkcaxgdsg6FOPPHrI1bSiC_HTv_E3ea3I'  style='    width: 100%;
    height: 50vh;'></iframe>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "YoobeeTestView",
    data() {
      return {
        userMessage: "",
      };
    },
    methods: {
      async sendMessage() {
        if (this.userMessage.trim() !== "") {
          // Add user message to the chat
          this.addUserMessage(this.userMessage);
  
          // Create the JSON message to send
          const message = {
            text: this.userMessage,
          };
  
          // Call the API with Axios
          try {
            const response = await axios.post("https://progressor-bot-f459.azurewebsites.net/api/messages", message, {
              headers: {
                "Content-Type": "application/json",
              },
            });
  
            // Display the API response in a popup
            this.showResponsePopup(response.data);
  
            // Clear the input field
            this.userMessage = "";
          } catch (error) {
            console.error("API Error:", error);
          }
        }
      },
      addUserMessage(message) {
        const chat = document.querySelector(".chat");
        const userMessage = document.createElement("div");
        userMessage.classList.add("chat-message", "user");
        userMessage.innerHTML = `<p>${message}</p>`;
        chat.appendChild(userMessage);
        chat.scrollTop = chat.scrollHeight;
      },
      showResponsePopup(responseData) {
        // Display the response in a popup (you can customize this part)
        alert("API Response:\n" + JSON.stringify(responseData, null, 2));
  
        // Log the response in the console
        console.log("API Response:", responseData);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Global Styles */
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }
  
  /* Container Styles */
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  /* Chat Header Styles */
  .chat-header {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .profile-picture {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  
  /* Chat Styles */
  .chat {
    margin-top: 20px;
    max-height: 400px;
    overflow-y: auto;
  }
  
  .chat-message {
    display: flex;
    gap: 10px;
    padding: 10px;
    border-radius: 8px;
    margin: 10px 0;
  }
  
  .chat-message p {
    margin: 0;
  }
  
  .bot {
    justify-content: flex-start;
    align-items: flex-start;
  }
  
  .user {
    justify-content: flex-end;
    align-items: flex-end;
  }
  
  /* User Input Styles */
  .user-input {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .user-input input {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    outline: none;
  }
  
  .user-input button {
    background-color: #007bff;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  /* Responsive Styles */
  @media (max-width: 600px) {
    .container {
      padding: 10px;
    }
  }
  </style>
  