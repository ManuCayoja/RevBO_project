<template>
<v-app-bar app :elevation="0">
  <v-app-bar-nav-icon></v-app-bar-nav-icon>
  <v-app-bar-title text @click="goTo('/')">Index</v-app-bar-title>
  <v-btn text @click="goTo('/about')">About</v-btn>
  <v-btn text @click="goTo('/products')">Products</v-btn>
  <v-btn text @click="goTo('/base_vue')">base</v-btn>
  <v-btn text @click="goTo('/tabla')">tabla</v-btn>
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