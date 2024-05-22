<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      height="200px"
      :src="item.image"
      cover
    ></v-img>

    <v-card-title>
      {{ item.titulo }}
    </v-card-title>

    <v-card-subtitle>
      {{ item.subtitulo }}
    </v-card-subtitle>

    <v-card-text>
      {{ item.text }}
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        text="Explore"
      ></v-btn>

      <v-spacer></v-spacer>

      
    </v-card-actions>
  </v-card>
</template>
<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>