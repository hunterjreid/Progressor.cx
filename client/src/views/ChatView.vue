<template>
    <div style="    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;">
    <div style="max-width: 800px; margin: 0 auto; padding: 20px; position: absolute; bottom: 0;">
      <div class="chat-container">
        <div class="chat-history">
          <div v-for="message in messages" :key="message.id" :class="message.type">
            <div class="message-content">
              {{ message.content }}
            </div>
          </div>
        </div>
        <div class="chat-input">
          <input v-model="inputMessage" @keyup.enter="sendMessage" placeholder="Type your message..." />
          <button @click="sendMessage">Send</button>
        </div>
      </div>
    </div></div>
  </template>
  
  <script>
  export default {
    name: 'ChatView',
  
    data() {
      return {
        inputMessage: '',
        messages: [
        { content: 'Welcome to Progressor CX! 🚀,Hello! How can we assist you today?', type: 'received', id: 0 },
          // Add more default messages here
        ],
      };
    },
    methods: {
      sendMessage() {
        if (this.inputMessage.trim() === '') {
          return;
        }
        // Add sent message to the messages array
        this.messages.push({ content: this.inputMessage, type: 'sent', id: this.messages.length });
        
        // Clear the input field after sending
        this.inputMessage = '';
      },
    },
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
  