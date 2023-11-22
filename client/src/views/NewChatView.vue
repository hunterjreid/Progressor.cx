<template>
  <div class="mainer">
    <div v-if="outOfTokens" class="out-of-tokens-message">
    You are out of tokens. Please consider upgrading your plan!
  </div>
  <div class="button-scroller">
   <a style="color:aqua"> Ask me about :</a>
      <button style="background-color:rgba(240, 248, 255, 0.048);font-size: 20px; color: rgb(184, 184, 184);" v-for="(button, index) in cybersecurityButtons" :key="index" @click="handleButtonClick(button)">
        {{ button }}
      </button>
    </div>
    <div class="dm-box" ref="dmBox">
      <div v-if="progressorThinking" class="message-bubble received thinking-bubble">
          Progressor is thinking...
        </div>
        <a v-for="message in conversationHistory" :key="message.id">
          <div class="message-bubble" :class="{ 'sent': message.type === 'sent', 'received': message.type === 'received' }">

            <span style="white-space: pre-line;" v-html="formatMessage(message.content)"></span>
          </div>
        </a>
 
  
    </div>
    
    <div class="chat-bar" >
      <textarea name="Text1" cols="10" rows="5" style="    background: #02002e;
  background: rgb(65 65 65 / 16%);
    color: white;
    font-size: 20px;
    width: 100%;
    max-width: 100%;
    padding: 2px;
    padding-left: 20px;
    min-width: 100%;
    resize: none;
    outline: none !important;
    height: 40px;
    border: none;
    border-radius: 8px;
    margin-bottom: 10px;"   placeholder="Enter your message here..."  v-model="inputMessage"></textarea>
      <div style="    display: flex;
    flex-grow: 1;
    width: 100%;">


   
      <button class="bot_btn" style="background-color:#777b7e52;" @click="sendMessage">Send</button>
      <button class="bot_btn" style="background-color:#0090ff52;" @click="clearChat">Clear Chat</button> <!-- Add Clear Chat button -->        <button class="bot_btn" @click="generateReport">Generate Report</button>
    </div>
        <span  style="color:white;" v-if="messageCost !== undefined">COST: {{ messageCost }} tokens</span>

    </div>



  </div>
</template>

<script>
import axios from 'axios';
const html2pdf = require('html2pdf.js');
import { getFirestore, doc, getDoc, setDoc, addDoc, collection } from 'firebase/firestore';


export default {
  name: 'ChatView',

  data() {
    return {
      all_msgs: [],
      cybersecurityButtons: ['Firewall', 'Encryption', 'Phishing', 'Antivirus', 'Two-Factor Auth', 'Incident Response', 'Network Security', 'Endpoint Security', 'Security Policies', 'Social Engineering'],
      outOfTokens: false, // Initialize the outOfTokens property
      messageCost: 0, // Initialize messageCost as a data property
      conversationHistory: [
        { content: 'Welcome to Progressor CX! 🚀 Hello! How can I assist you today?', type: 'received', id: 0 },
      ],
      inputMessage: '',
      progressorThinking: false,
    };
  },



  watch: {
    inputMessage() {
    
      // Calculate the message cost based on the length of the new input message
      this.messageCost = this.inputMessage.length * 2;
    },
    conversationHistory() {
      this.$nextTick(this.scrollToBottom);
    },
  },


  methods: {
    formatMessage(content) {
    // Add spacing
    content = content.replace(/\*\*/g, '&nbsp;&nbsp;');

    // Make bold if there are two asterisks
    content = content.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

    return content;
  },
  generateReport() {
    const pdfContent = this.$refs.dmBox.innerHTML; // Use ref to get the content of the dm-box

    const pdfOptions = {
      margin: 10,
      filename: 'conversation_report.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    // Generate PDF
    html2pdf().from(pdfContent).set(pdfOptions).save();

    // You can customize the options as needed, such as adding a header or footer.

    console.log('Generating report...');
  },
    clearChat() {
      this.conversationHistory = [];
      this.inputMessage = '';
    },
    handleButtonClick(button) {
      // Handle the button click, you can use the button value in your logic
      this.inputMessage = 'What is something I should know about ' + button;
      console.log('Button Clicked:', button);
    },
    async sendMessage() {
      if (this.inputMessage.trim() === '' || this.progressorThinking === true) {
        return;
      }

      if (this.messageCost > this.$root.userTokens) {
    // User doesn't have enough tokens
    this.outOfTokens = true;
    return;
  }

      this.conversationHistory.unshift({ content: this.inputMessage, type: 'sent', id: this.conversationHistory.length });

 
      const db = getFirestore();
      const userDocRef = doc(db, 'users', this.$root.user.uid);

      // Retrieve the user's current token count
      const userDoc = await getDoc(userDocRef);
      const currentTokens = userDoc.data().tokens;

      // Calculate the new token count after subtracting the message cost
      const newTokens = currentTokens - this.messageCost;

      const tokensData = { tokens: newTokens };

      // Update the user's token count in Firestore

        setDoc(userDocRef, tokensData)
          .then(() => {
            // Show the token added popup

          })
          .catch((error) => {
            console.error('Error setting tokens:', error);
          });

      // Update the userTokens in the root component
      this.$root.userTokens = newTokens;

      setDoc(userDocRef, tokensData)
    .then(() => {
      // Upload usage information to Firebase
      const usageRef = collection(db, 'usage');
      const usageData = {
        userId: this.$root.user.uid,
        tokensUsed: this.messageCost,
        timestamp: new Date().toISOString(),
      };
      console.log(usageData)

      addDoc(usageRef, usageData)
        .then((docRef) => {
          console.log('Usage information uploaded to Firebase with ID:', docRef.id);
          this.inputMessage = '';
        })
        .catch((error) => {
          console.error('Error adding usage information:', error);
        });

      // Show the token added popup
    })
    .catch((error) => {
      console.error('Error setting tokens:', error);
    });
    
      // Reset the messageCost
   

      // Show the token subtracted popup (if needed)
      // this.showTokenSubtractedPopup = true;
   


      this.all_msgs.unshift(this.inputMessage);

      this.progressorThinking = true;

      try {
       
        const apiKey = 'AIzaSyBnPIudljsNoAx5XP8Gh_K8lFEsdWZXX0c'; // Replace with your API key
        const bisonUrl = 'https://generativelanguage.googleapis.com/v1beta3/models/chat-bison-001:generateMessage';

        const requestData = {
    prompt: {
      context: "I'm Progressor.cx, a cybersecurity chatbot called Progressor.cx. Originally created for incident response, but I can do a lot of cyber stuff and read code. Created by Hunter Reid from Yoobee Colleges in Auckland, NZ",
    
      messages: [{ content: this.inputMessage }],
    },
    temperature: 0.25,
    top_k: 40,
    top_p: 0.95,
    candidate_count: 1,
  };

        const response = await axios.post(bisonUrl + `?key=${apiKey}`, requestData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log(response.data)

        const candidates = response.data.candidates;
        if (candidates != undefined) {
          this.conversationHistory.unshift({ content:  this.formatMessage(candidates[0].content), type: 'received', id: this.conversationHistory.length });
        } else {
          this.conversationHistory.unshift({ content:  "I'm Progressor.cx. Feel free to ask me anything about cybersecurity, and I'll provide you with an answer!", type: 'received', id: this.conversationHistory.length });
        }
   
console.log(this.formatMessage(candidates[0].content))
       
        this.progressorThinking = false;
  
      } catch (error) {
        console.error('Error sending API request:', error);
        this.progressorThinking = false;
      }


    },
  },
};
</script>


<style scoped>

* {
  font-family: 'M PLUS 1 Code', monospace !important;
}
.button-scroller {
  max-width: 800px;
}
.mainer {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin: 0px !important;
  bottom: 0;
  position: fixed;
  right: 0;
  left: 0;
  top: 100px;
  background-color: black;
  background-image: url('@/assets/bggb.png'); /* Replace 'your-image-url.jpg' with the actual URL or path of your image */
  background-size: cover; /* Adjust this property based on how you want the image to be displayed */
}

.out-of-tokens-message {
  background-color: #FF0000; /* Red background color */
  color: #FFFFFF; /* White text color */
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px; /* Add margin to separate it from the chat box */
  text-align: center;
}

.dm-box {
  width: 60%;
    max-width: 800px;

    padding: 10px;
    overflow-y: scroll;

    display: flex;
    flex-direction: column-reverse;
    font-family: 'M PLUS 1 Code', monospace;
    height: 70vh;
}

.chat-bar {
  display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #00000061;
    padding: 10px;
    border-radius: 10px;
    width: 800px;
    width: 60%;
    max-width: 800px;
    padding: 10px;
    overflow-y: scroll;    display: flex;
    flex-direction: column;

}

input[type="text"] {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 5px;
}

button {
  margin-left: 10px;
  padding: 8px 15px;
  background-color: #0090ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.bot_btn {
  margin-top: 0px;
}

.mainer {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin: 20px;
}


@media (max-width: 600px) {
  .chat-bar {
    width: 96%;
    padding: 0px;;
  }
.dm-box {
  height: 90vw;
  width: 90%;

}
.button-scroller {
  display: none;
}
}
.message-bubble {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

.sent {
  background-color: #000000;
    float: right;
    color: #000;
    color: white;
}

.received {
  background-color: rgba(211, 211, 211, 0.034);
  float: left;
  font-size: 20px;  color: #ffffff;
}

.thinking-bubble {
  background-color: #f0f0f02a;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>