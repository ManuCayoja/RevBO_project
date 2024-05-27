<template>
    <appBar></appBar>
    <v-main>
      <br><div class="d-flex d-wrap">
        <card1 v-for="item in items" :item="item"></card1>
    </div>
    </v-main>
  </template>
  <script setup>
  import card1 from "./components/card1.vue";
  import appBar from "../index/components/appBar.vue"
  
  const items = ref([
    {
      titulo: "Burger King",
      image: "https://okrp.com/app/uploads/2023/05/BK-Poster-Manifesto.jpg"
    },
    {
      titulo: "Hipermaxi",
      image: "https://i.ytimg.com/vi/_uIKQ175kv8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGDggSCh_MA8=&rs=AOn4CLARZpgfLVRgfQ9k9DNYty29UE0gWw"
    },
    {
      titulo: "Pollos Copacabana",
      image: "https://debolivia.site/wp-content/uploads/classified-listing/2021/06/pollos-copacabana-jun-2-logo-.jpg.webp"
    },
    {
      titulo: "Pollos Copacabana",
      image: "https://debolivia.site/wp-content/uploads/classified-listing/2021/06/pollos-copacabana-jun-2-logo-.jpg.webp"
    }    
  ])
  
  </script>