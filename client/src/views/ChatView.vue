<template>
    <div style="    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;"> 
    <div style="max-width: 800px; margin: 0 auto; padding: 20px; position: absolute; bottom: 0;">
      <div class="chat-container"><div class="chat-historyr" style="display: flex;" v-if="showHistory">
          <div class="rrr" style="cursor: pointer;" v-for="message in dummyChatHistory" :key="message.id" :class="message.type">
            <div class="message-contentr">{{ message.content }}</div>
          </div>
        </div>
        <div class="chat-history">
          <div v-for="message in messages" :key="message.id" :class="message.type">
            <div class="message-content">
              {{ message.content }}
            </div>
          </div>
        </div>
       
        <div class="chat-controls">
            <button @click="toggleHistory">{{ showHistory ? 'Close History' : 'Open History' }}</button>
          <button @click="clearChat">New Chat</button>
        </div>
        <div class="chat-input">
          <input v-model="inputMessage" @keyup.enter="sendMessage" placeholder="Type your message..." />
          <button @click="sendMessage">Send</button>
        </div>
      </div>
    </div></div>
  </template>
  
  <script>

import axios from 'axios';

  export default {
    name: 'ChatView',
  
    data() {
      return {
        inputMessage: '',
        showHistory: false,
        dummyChatHistory: [
        { content: 'Chat 1 Hello there!',id: 0 },
        { content: 'Old Hi! How can I help you?',id: 1 },
        { content: 'This another chat I have a question about your services.', id: 2 },
        { content: 'Sure, feel free to ask.', id: 3 },
        // Add more dummy messages here
      ],
        messages: [
        { content: 'Welcome to Progressor CX! 🚀,Hello! How can we assist you today?', type: 'received', id: 0 },
          // Add more default messages here
        ],
      };
    },
    methods: {
        async sendMessage() {
  if (this.inputMessage.trim() === '') {
    return;
  }

  try {

    this.messages.push({ content: this.inputMessage, type: 'sent', id: this.messages.length });

    this.inputMessage = '';


    const secret = 'aY73OLUQzbM.7aLSse5ezotXeAhdEywnqcpK1D4vhe60m0wukUzd-nQ';
    const directLineUrl = 'https://directline.botframework.com/v3/directline/conversations';

    // Open a new conversation
    const conversationResponse = await axios.post(directLineUrl, {}, {
      headers: {
        Authorization: `Bearer ${secret}`,
      },
    });

    // const conversationId = conversationResponse.data.conversationId;

    const knowledgeBaseUrl = 'https://progressor.cognitiveservices.azure.com/language/:query-knowledgebases';
    const projectName = 'ProgressorAI';
    const apiVersion = '2021-10-01';
    const deploymentName = 'production';

    const apiUrl = `${knowledgeBaseUrl}?projectName=${projectName}&api-version=${apiVersion}&deploymentName=${deploymentName}`;

    // Make the API request using Axios
    const response = await axios.get(apiUrl, {
      headers: {
        'Ocp-Apim-Subscription-Key': '5cb722b3df204efc93f741cc4a6aefad',
        'Authorization': `Bearer ${conversationResponse.data.token}`,
      },
    });

    // Append the API response as a message to the messages array
    this.messages.push({ content: response.data, type: 'received', id: this.messages.length });
  } catch (error) {
    console.error('Error sending API request:', error);
  }
}

}
  };
  </script>
  <style>
  .chat-container {
    margin-top: 20px;

    border-radius: 5px;
    padding: 10px;
  }
  .message-content {
    padding: 20px;
  }
  
  .chat-history {
    max-height: calc(100vh - 200px);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    align-content: stretch;

  }
  
  .message {
    padding: 5px 10px;
    margin: 5px;
    border-radius: 5px;
    max-width: 80%;
  }
  
  .received {
    background-color: #f0f0f0;
    align-self: flex-start;
  }
  
  .sent {
    color: #e2f3ff;
    font-size: 24px;
    align-self: flex-end;
    font-variant-caps: all-petite-caps;
  }
  
  .chat-input {
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
  
  .chat-input input {
    flex-grow: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
.rrr {
    font-size: 10px!important;
    font-family: Gilroy;
    color: #fff;
    text-shadow: 0 0 10px #000;
    overflow: hidden;
    white-space: nowrap;
    inline-size: 60px;
    overflow-wrap: break-word;
    background: #7b7b7b;
    padding: 2px;
    border-radius: 5px;
    border: 1px dashed black;
    margin-right: 10px;
}

  .chat-input button {
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  }
  </style>
  