<template>
  <div class="mainer">
    <div class="dm-box" ref="dmBox">
      <ul>
        <li v-for="message in conversationHistory" :key="message.id">
          <div class="message-bubble" :class="{ 'sent': message.type === 'sent', 'received': message.type === 'received' }">
            {{ message.content }}
          </div>
        </li>
        <li v-if="progressorThinking" class="message-bubble received thinking-bubble">
          Progressor is thinking...
        </li>
      </ul>
    </div>
    
    <div class="chat-bar">
      <input type="text" v-model="inputMessage" placeholder="Enter your message here..." />
      <button @click="sendMessage">Send</button>
      <button @click="clearChat">Clear Chat</button> <!-- Add Clear Chat button -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ChatView',

  data() {
    return {
      all_msgs: [],
      
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




  methods: {
    clearChat() {
      this.conversationHistory = [];
      this.inputMessage = '';
    },
    async sendMessage() {
      if (this.inputMessage.trim() === '' || this.progressorThinking === true) {
        return;
      }
      var chatBoxe = this.$refs.dmBox;
      chatBoxe.scrollTop = chatBoxe.scrollHeight;
      this.conversationHistory.push({ content: this.inputMessage, type: 'sent', id: this.conversationHistory.length });

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
    width: 705px;
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
  width: 700px;
  height: 800px;
  border: 1px solid black;
  padding: 10px;
  overflow-y: scroll;
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