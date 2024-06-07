<template>
    <appBar></appBar>

    <v-main>
      <br><div class="d-flex justify-center flex-wrap">
        <card1  v-for="item in filtrado" :item="item" class="ma-1 pa-1"></card1>
    </div>
    </v-main>
  </template>
  <script setup>
  import card1 from "./components/card1.vue";
  import appBar from "../index/components/appBar.vue"
  
  const route = useRoute()

  const search = computed(() => route.query.search);

  const filtrado = computed(() => {

    console.log(items.value)

    const busqueda = items.value.filter(item => {
      console.log(item)
      return item.categoria.toLowerCase().includes(search.value.toLowerCase())
    })

    return busqueda

  })

  const items = ref([
    {
      titulo: "Burger King",
      image: "https://okrp.com/app/uploads/2023/05/BK-Poster-Manifesto.jpg",
      path: "/empresas/elements/burger-king",
      categoria: "restaurantes"
    },
    {
      titulo: "Hipermaxi",
      image: "https://i.ytimg.com/vi/_uIKQ175kv8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGDggSCh_MA8=&rs=AOn4CLARZpgfLVRgfQ9k9DNYty29UE0gWw",
      path: "/empresas/elements/hipermaxi",
      categoria: "supermercados"
    },
    {
      titulo: "Pollos Copacabana",
      image: "https://negociolatin.com/wp-content/uploads/pollos-copacabana-7.jpg",
      path: "/empresas/elements/pollos-copacabana",
      categoria: "restaurantes"
    },
    {
      titulo: "Camino Real",
      image: "https://image-tc.galaxy.tf/wisvg-9m6oqajm9hoe3paqiaufbfqo8/camino-real-logo.svg?width=500",
      path: "/empresas/elements/camino-real",
      categoria: "hoteles"
    },
    {
      titulo: "UFC Gym",
      image: "https://scontent.flpb2-2.fna.fbcdn.net/v/t39.30808-6/414916865_387423693808199_2130526662853184669_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=frxyniga77kQ7kNvgGsAlMI&_nc_ht=scontent.flpb2-2.fna&oh=00_AYDV3RsP2nJJSjShNvrIXAnV--oPAFq0RfbI-ldg8jYtSA&oe=66656B69",
      path: "/empresas/elements/ufc-gym",
      categoria: "gimnacios"
    },
    {
      titulo: "Fair Play",
      image: "https://datos-bo.com/wp-content/uploads/2021/04/fair_play_logo.jpg",
      path: "/empresas/elements/fair-play",
      categoria: "tiendas de ropa"
    },
    {
      titulo: "Boa",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Logotipo_de_BoA.svg/2560px-Logotipo_de_BoA.svg.png",
      path: "/empresas/elements/boa",
      categoria: "transporte"
    }    
  ])
  
  </script>