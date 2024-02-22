<template>
    <div class="email-view">
      <div v-if="selectedEmail">
        <h2>{{ selectedEmail.subject }}</h2>
        <p><strong>De :</strong> {{ selectedEmail.sender }}</p>
        <p><strong>À :</strong> {{ selectedEmail.recipient }}</p>
        <p><strong>Date :</strong> {{ selectedEmail.date }}</p>
        <hr>
        <p>{{ selectedEmail.body }}</p>
      </div>
      <div v-else>
        <p>Sélectionnez un e-mail pour afficher le contenu.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EmailView',
    props: {
      emails: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        selectedEmailIndex: null
      };
    },
    computed: {
      selectedEmail() {
        return this.selectedEmailIndex !== null ? this.emails[this.selectedEmailIndex] : null;
      }
    }
  }
  </script>
  
  <style scoped>
  .email-view {
    padding: 20px;
  }
  
  .email-view h2 {
    margin-bottom: 10px;
    color: #1a73e8;
  }
  
  .email-view p {
    margin-bottom: 5px;
  }
  
  .email-view hr {
    margin: 10px 0;
    border: 0;
    border-top: 1px solid #ccc;
  }
  </style>
  