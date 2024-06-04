<template>
<v-app-bar app :elevation="24" style="background-color: rgb(32, 56, 84); color: rgb(236, 236, 236)">
  <v-app-bar-title text @click="goTo('/')" style="font-style: italic; font-size: 35px; margin-left: 70px;"><span role="button" tabindex="0">RevBO<div style="font-size: 12px;">Reviewing Bolivia</div></span></v-app-bar-title> 
  <v-btn text @click="goTo('/empresas?search=')">Empresas</v-btn>
  <v-btn text @click="goTo('/')">Favoritos</v-btn>
  <v-btn text @click="goTo('/about')">About</v-btn>
  <v-btn text @click="goTo('/')" prepend-icon="mdi-magnify">Buscar</v-btn>
  <v-btn rounded="xl" size="large" @click="goTo('/')" style="background-color: rgb(45, 214, 251); color: rgb(34, 34, 34); font-size: 13px; font-weight: bolder;">Log In</v-btn>
</v-app-bar>
</template>

<script>
export default {
  methods: {
    goTo(route){
      this.$router.push(route)
    }
  }
}
</script>