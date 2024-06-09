<template>
    <appbar></appbar>
    <search></search>
    <Table_cat></Table_cat>
    <v-parallax
    src="https://img.freepik.com/foto-gratis/resumen-superficie-texturas-muro-piedra-hormigon-blanco_74190-8184.jpg?size=626&ext=jpg&ga=GA1.1.933601817.1717545600&semt=ais_user"
  >
    <div class="d-flex flex-column fill-height fill-width justify-center align-center text-white">
        <v-main class="fill-width">
        <br><br><center><h1 style="font-family:Verdana, Geneva, Tahoma, sans-serif; font-weight: normal; color: black;" >Comparte tu experiencia</h1></center>
        <br><search></search>
        <br><br><br><h3 style="margin-left: 190px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: normal; color: black">Explorar categorías</h3>
        <br><Table_cat></Table_cat>
    </v-main>
    </div>
  </v-parallax>
</template>

<script setup>
import appbar from './components/appbar.vue';
import search from './components/search.vue';
import Table_cat from './components/table_cat.vue';
</script>

<style scoped>
.fill-width {
    width: 100%;
}
</style>