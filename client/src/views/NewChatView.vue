<template>
  <div class="mainer">
    <div v-if="outOfTokens" class="out-of-tokens-message">
    You are out of tokens. Please consider upgrading your plan!
  </div>
    <div class="dm-box" ref="dmBox">
   
        <a v-for="message in conversationHistory" :key="message.id">
          <div class="message-bubble" :class="{ 'sent': message.type === 'sent', 'received': message.type === 'received' }">
            {{ message.content }}
          </div>
        </a>
        <div v-if="progressorThinking" class="message-bubble received thinking-bubble">
          Progressor is thinking...
        </div>
  
    </div>
    
    <div class="chat-bar">

  
      <input type="text" v-model="inputMessage" placeholder="Enter your message here..." />
      <button @click="sendMessage">Send</button>
      <button @click="clearChat">Clear Chat</button> <!-- Add Clear Chat button -->
    </div>
    <span v-if="messageCost !== undefined">COST: ({{ messageCost }} tokens)</span>
  </div>
</template>

<script>
import axios from 'axios';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


export default {
  name: 'ChatView',

  data() {
    return {
      all_msgs: [],
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
    clearChat() {
      this.conversationHistory = [];
      this.inputMessage = '';
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

      // Reset the messageCost
      this.messageCost = 0;

      // Show the token subtracted popup (if needed)
      // this.showTokenSubtractedPopup = true;
   


      this.all_msgs.push(this.inputMessage);

      this.progressorThinking = true;

      try {
       
        const apiKey = 'AIzaSyBnPIudljsNoAx5XP8Gh_K8lFEsdWZXX0c'; // Replace with your API key
        const bisonUrl = 'https://generativelanguage.googleapis.com/v1beta3/models/chat-bison-001:generateMessage';

        const requestData = {
          prompt: {
          

            context: 'You are a Cybersecurity Chat bot called Progressor.cx Oringally created for incident responce but I can do alot of cyber stuff and read code, Created by HUnter Reid from Yoobee Colleges in Auckland NZ',
          examples: [],
          messages: [{ content: this.inputMessage }],

            // examples: [
            //   {
            //     input: {
            //       content: "Hey, I think I'm getting a cyber attack. My database is Apache2, and it's saying that Apache24 and mod_php82 won't start up at all.",
            //     },
            //     output: {
            //       content: "As Progressor, I suggest delving into your server logs to investigate any unusual activities..."
            //     },
            //   },
            // ],
        
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

        const candidates = response.data.candidates;
        this.conversationHistory.push({ content: candidates[0].content, type: 'received', id: this.conversationHistory.length });


        this.progressorThinking = false;
  
      } catch (error) {
        console.error('Error sending API request:', error);
        this.progressorThinking = false;
      }
      const chatBox = this.$refs.dmBox;
      chatBox.scrollTop = chatBox.scrollHeight;
      this.inputMessage = '';
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
    max-width: 1280px;
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