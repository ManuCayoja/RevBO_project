<template>
    <appBar></appBar>
    <v-main>
        <br><br><center><h1 style="font-family:Verdana, Geneva, Tahoma, sans-serif; font-weight: normal" >Comparte tu experiencia</h1></center>
        <br><search></search>
        <br><br><br><h3 style="margin-left: 160px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: normal">Explorar categorías</h3>
        <br><Table_cat></Table_cat>
    </v-main>
</template>

<script setup>
import appBar from './components/appBar.vue';
import footer from './components/footer.vue';
import search from './components/search.vue';
import Table_cat from './components/table_cat.vue';
</script>