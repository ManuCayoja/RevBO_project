<template>
    <appBar></appBar>
    <div class="d-flex flex-column fill-height fill-width justify-center align-center text-white">
        <v-main class="fill-width">
        <br><br><center><h1 style="font-family:Verdana, Geneva, Tahoma, sans-serif; font-weight: normal; color: black;" >Comparte tu experiencia</h1></center>
        <br><search></search>
        <br><br><h3 style="margin-left: 190px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: normal; color: black">Explorar categorías</h3>
        <Table_cat></Table_cat><br><br><br>
        <Opiniones></Opiniones>
    </v-main>
    <Footer1></Footer1>
    </div>
</template>

<script setup>
import appBar from './components/appBar.vue';
import Footer1 from './components/footer1.vue';
import Opiniones from './components/opiniones.vue';
import search from './components/search.vue';
import Table_cat from './components/table_cat.vue';
</script>

<style scoped>
.fill-width {
    width: 100%;
}
</style>