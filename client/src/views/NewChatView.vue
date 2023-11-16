<template>
  <div class="mainer">
    <div v-if="outOfTokens" class="out-of-tokens-message">
    You are out of tokens. Please consider upgrading your plan!
  </div>
  <div class="button-scroller">
    Ask me about :
      <button v-for="(button, index) in cybersecurityButtons" :key="index" @click="handleButtonClick(button)">
        {{ button }}
      </button>
    </div>
    <div class="dm-box" ref="dmBox">
   
        <a v-for="message in conversationHistory" :key="message.id">
          <div class="message-bubble" :class="{ 'sent': message.type === 'sent', 'received': message.type === 'received' }">

            <span style="white-space: pre-line;" v-html="formatMessage(message.content)"></span>
          </div>
        </a>
        <div v-if="progressorThinking" class="message-bubble received thinking-bubble">
          Progressor is thinking...
        </div>
  
    </div>
    
    <div class="chat-bar">
      <span v-if="messageCost !== undefined">COST: ({{ messageCost }} tokens)</span>
  
      <input type="text" v-model="inputMessage" placeholder="Enter your message here..." />
      <button @click="sendMessage">Send</button>
      <button style="background-color:grey;" @click="clearChat">Clear Chat</button> <!-- Add Clear Chat button -->
    </div>

  </div>
</template>

<script>
import axios from 'axios';
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
        { content: 'Welcome to Progressor CX! 🚀 Hello! How can we assist you today?', type: 'received', id: 0 },
      ],
      inputMessage: '',
      progressorThinking: false,
    };
  },

  mounted() {
    const chatBox = this.$refs.dmBox;
    chatBox.scrollTop = chatBox.scrollHeight;
  },

  watch: {
    inputMessage() {
    
      // Calculate the message cost based on the length of the new input message
      this.messageCost = this.inputMessage.length * 2;
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
      var chatBoxe = this.$refs.dmBox;
      chatBoxe.scrollTop = chatBoxe.scrollHeight;
      this.conversationHistory.push({ content: this.inputMessage, type: 'sent', id: this.conversationHistory.length });

 
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
   


      this.all_msgs.push(this.inputMessage);

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
        this.conversationHistory.push({ content:  this.formatMessage(candidates[0].content), type: 'received', id: this.conversationHistory.length });
console.log(this.formatMessage(candidates[0].content))
       
        this.progressorThinking = false;
  
      } catch (error) {
        console.error('Error sending API request:', error);
        this.progressorThinking = false;
      }
      const chatBox = this.$refs.dmBox;
      chatBox.scrollTop = chatBox.scrollHeight;

    },
  },
};
</script>


<style scoped>
.mainer {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin: 20px;

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
  width: 700px;
  height: 600px; /* Adjust the height as needed */
  border: 1px solid black;
  padding: 10px;
  overflow-y: scroll;
  margin-bottom: 10px; /* Add margin to separate chat box and chat bar */
}

.chat-bar {
  display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 10px;
    width: 800px;

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
  background-color: lightblue;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.mainer {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin: 20px;
}
.dm-box {
    width: 60%;
    max-width: 800px;
    border: 1px solid black;
    padding: 10px;
    overflow-y: scroll;
}

@media (max-width: 600px) {
.dm-box {
  height: 90vw;
  width: 90%;

}
}
.message-bubble {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

.sent {
  background-color: lightblue;
  float: right;
}

.received {
  background-color: lightgray;
  float: left;
}

.thinking-bubble {
  background-color: #f0f0f0;
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