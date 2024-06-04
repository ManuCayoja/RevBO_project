<template>
    <v-container fluid>
      <v-row class="d-flex justify-center">
        <v-col v-for="(card, index) in cards" :key="index" cols="12" md="4" sm="12" xs="12" class="text-center">
          <v-card class="mx-auto my-4">
            <v-img :src="card.image" class="white--text align-end" height="200px"></v-img>
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-text>{{ card.text }}</v-card-text>
            <v-card-actions>
              <v-btn>Click me</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Simulated card data
  const cards = ref([
    { title: 'Card title 1', text: 'Content for card 1', image: 'https://via.placeholder.com/400x200' },
    { title: 'Card title 2', text: 'Content for card 2', image: 'https://via.placeholder.com/400x200' },
    { title: 'Card title 3', text: 'Content for card 3', image: 'https://via.placeholder.com/400x200' },
    { title: 'Card title 4', text: 'Content for card 4', image: 'https://via.placeholder.com/400x200' },
    { title: 'Card title 5', text: 'Content for card 5', image: 'https://via.placeholder.com/400x200' },
    { title: 'Card title 6', text: 'Content for card 6', image: 'https://via.placeholder.com/400x200' },
    { title: 'Card title 7', text: 'Content for card 7', image: 'https://via.placeholder.com/400x200' },
    { title: 'Card title 8', text: 'Content for card 8', image: 'https://via.placeholder.com/400x200' },
    { title: 'Card title 9', text: 'Content for card 9', image: 'https://via.placeholder.com/400x200' }
  ]);
  </script>
  
  <style scoped>
  .v-card {
    max-width: 400px;
  }
  </style>