<template>
  <v-carousel style="height: 800px;">
    <v-carousel-item
    v-for="item in items" :key="item.key" 
    :src="item.image"
    cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script setup>
const items = ref([
{
  image: "https://wallpaperswide.com/download/paisaje-wallpaper-1920x1080.jpg"
},
{
  image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
},
{
  image: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
},
])
</script>
