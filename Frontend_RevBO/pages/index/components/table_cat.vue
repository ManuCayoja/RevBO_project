<template>
    <v-container style="background-color: rgba(103, 228, 255, 0.2); border-radius: 30px;">
      <v-row style="margin-left: 50px;">
        <v-col>
          <v-btn text @click="goTo('/empresas?search=Restaurante')" class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
            Restaurantes
          </v-btn>
        </v-col>
        <v-col>
          <v-btn class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
            Electrónicos
          </v-btn>
        </v-col>
        <v-col>
          <v-btn class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
            Farmacias
          </v-btn>
        </v-col>
        <v-col>
          <v-btn class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
            Jugueterías
          </v-btn>
        </v-col>
      </v-row>
      <v-row  style="margin-left: 50px;">
        <v-col>
          <v-btn class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
            Gimnacios
          </v-btn>
        </v-col>
        <v-col>
          <v-btn class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
            Transpote
          </v-btn>
        </v-col>
        <v-col>
          <v-btn class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
            Entretenimiento
          </v-btn>
        </v-col>
        <v-col>
          <v-btn class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
            Bancos
          </v-btn>
        </v-col>
      </v-row>
      <v-row style="margin-left: 50px;">
        <v-col>
          <v-btn class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
            Tiendas de ropa
          </v-btn>
        </v-col>
        <v-col>
          <v-btn class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
            Hoteles
          </v-btn>
        </v-col>
        <v-col>
          <v-btn class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
            Supermecados
          </v-btn>
        </v-col>
        <v-col>
          <v-btn class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
            Educación
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>


<script>
export default {
  methods: {
    buscar() {
      console.log("dfasdfsadfsdfasdf")
      this.$router.push({ path: `/empresas`, query: { search: this.search } })
    }
  }
}
</script>
