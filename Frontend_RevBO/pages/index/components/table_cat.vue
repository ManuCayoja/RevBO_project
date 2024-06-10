<template>
  <v-container style="background-color: rgba(103, 228, 255, 0.2); border-radius: 30px;">
    <v-row style="margin-left: 50px;">
      <v-col>
        <v-btn text @click="goTo('Restaurante')" class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
          Restaurantes
        </v-btn>
      </v-col>
      <v-col>
        <v-btn text @click="goTo('Electrónicos')" class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
          Electrónicos
        </v-btn>
      </v-col>
      <v-col>
        <v-btn text @click="goTo('Farmacias')" class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
          Farmacias
        </v-btn>
      </v-col>
      <v-col>
        <v-btn text @click="goTo('jugueteria')" class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
          Jugueterías
        </v-btn>
      </v-col>
    </v-row>
    <v-row style="margin-left: 50px;">
      <v-col>
        <v-btn text @click="goTo('Gimnacios')" class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
          Gimnacios
        </v-btn>
      </v-col>
      <v-col>
        <v-btn text @click="goTo('Transporte')" class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
          Transporte
        </v-btn>
      </v-col>
      <v-col>
        <v-btn text @click="goTo('Entretenimiento')" class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
          Entretenimiento
        </v-btn>
      </v-col>
      <v-col>
        <v-btn text @click="goTo('Bancos')" class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
          Bancos
        </v-btn>
      </v-col>
    </v-row>
    <v-row style="margin-left: 50px;">
      <v-col>
        <v-btn text @click="goTo('Tiendas de ropa')" class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
          Tiendas de ropa
        </v-btn>
      </v-col>
      <v-col>
        <v-btn text @click="goTo('Hoteles')" class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
          Hoteles
        </v-btn>
      </v-col>
      <v-col>
        <v-btn text @click="goTo('Supermercados')" class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
          Supermercados
        </v-btn>
      </v-col>
      <v-col>
        <v-btn text @click="goTo('viajes')" class="pa-2 ma-2" style="width: 170px; background-color: rgba(45, 214, 251, 0.40);">
          Agencias de viaje
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    goTo(category) {
      this.$router.push({ path: `/empresas`, query: { search: category } });
    }
  }
}
</script>
