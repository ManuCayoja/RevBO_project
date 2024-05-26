<template>
    <appBar></appBar>
    <div class="d-flex d-wrap">
        <card1 v-for="item in items" :item="item"></card1>
    </div>
  </template>
  <script setup>
  import card1 from "./components/card1.vue";
  import appBar from "../index/components/appBar.vue"
  
  const items = ref([
    {
      titulo: "Bigmac",
      subtitlo: "Categoria a",
      text: "Consectetur cupidatat aliqua cillum qui sunt amet do incididunt do ex. Dolore aliqua elit exercitation velit sit. Exercitation quis mollit nulla excepteur nisi fugiat culpa. Consectetur proident duis culpa elit cupidatat adipisicing fugiat aliquip sint id pariatur.",
      image: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSVCgY4Qbt9Fq6_iTqPg35PFzBhkkHkzfbrPhe0yAgJ8c6ZtQlRwlYsIxIJgLRf9Rwd"
    },
    {
      titulo: "Salchipapa",
      subtitlo: "Categoria b",
      text: "Consectetur cupidatat aliqua cillum qui sunt amet do incididunt do ex. Dolore aliqua elit exercitation velit sit. Exercitation quis mollit nulla excepteur nisi fugiat culpa. Consectetur proident duis culpa elit cupidatat adipisicing fugiat aliquip sint id pariatur.",
      image: "https://imag.bonviveur.com/emplatado-final-de-las-salchipapas.jpg"
    },
    {
      titulo: "Taquitos",
      subtitlo: "Categoria c",
      text: "Consectetur cupidatat aliqua cillum qui sunt amet do incididunt do ex. Dolore aliqua elit exercitation velit sit. Exercitation quis mollit nulla excepteur nisi fugiat culpa. Consectetur proident duis culpa elit cupidatat adipisicing fugiat aliquip sint id pariatur.",
      image: "https://www.civitatis.com/f/mexico/playa-del-carmen/tour-tacos-cancun-589x392.jpg"
    }
  ])
  
  </script>