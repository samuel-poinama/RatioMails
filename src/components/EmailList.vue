<template>
    <div class="email-list">
        <h1> Mon inbox </h1>
      <div v-for="(email, index) in emails" :key="index" @click="selectEmail(index)" class="email-item">
        <h3>{{ email.subject }}</h3>
        <p><strong>De :</strong> {{ email.sender }}</p>
        <p><strong>Date :</strong> {{ email.date }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EmailList',
    props: {
      emails: {
        type: Array,
        required: true
      }
    },
    methods: {
      selectEmail(index) {
        this.$emit('email-selected', index);
      }
    }
  }
  </script>
  
  <style scoped>
  .email-list {
    overflow-y: auto; /* Ajoute un défilement vertical si nécessaire */
  }
  
  .email-item {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }
  
  .email-item:hover {
    background-color: #f2f2f2; /* Couleur de fond au survol */
  }
  
  .email-item h3 {
    margin: 0;
    color: #333;
  }
  
  .email-item p {
    margin: 5px 0;
    color: #666;
  }
  </style>
  