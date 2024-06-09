<template>
  <v-app-bar app :elevation="24" style="background-color: rgb(32, 56, 84); color: rgb(236, 236, 236)">
    <v-app-bar-title text @click="goTo('/')" style="font-style: italic; font-size: 35px; margin-left: 70px;">
      <span role="button" tabindex="0">
        RevBO
        <div style="font-size: 12px;">Reviewing Bolivia</div>
      </span>
    </v-app-bar-title>
    <v-btn text @click="goTo('/empresas?search=')">Empresas</v-btn>
    <v-btn text  @click="goTo('/empresas')">Favoritos</v-btn>
    <v-btn text @click="goTo('/about')">About</v-btn>
    <v-btn text @click="showSearchDialog = true" prepend-icon="mdi-magnify">Buscar</v-btn>
    <v-btn rounded="xl" size="large" @click="goTo('/sign-in')" style="background-color: rgb(45, 214, 251); color: rgb(34, 34, 34); font-size: 13px; font-weight: bolder;">Acceder</v-btn>

    <v-dialog v-model="showSearchDialog" max-width="600px">
      <v-card>
        <v-card-title class="text-h5">Buscar</v-card-title>
        <v-card-text>
          <v-container>
            <v-row justify="center">
              <v-col cols="12">
                <v-autocomplete
                  clearable
                  v-model="search"
                  :items="items"
                  class="mx-auto"
                  density="comfortable"
                  menu-icon=""
                  placeholder="Busca una empresa o categoría"
                  style="max-width: 400px"
                  theme="light"
                  variant="solo"
                  auto-select-first
                  item-props
                  rounded
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" class="text-center">
                <v-btn
                  rounded=""
                  style="background-color: rgba(45, 214, 251, 0.5)"
                  prepend-icon="mdi-magnify"
                  @click="buscar"
                >Buscar</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="showSearchDialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      showSearchDialog: false,
      search: "",
      items: [
        { prependIcon: "mdi-clock-outline", title: "Restaurante" },
        { prependIcon: "mdi-clock-outline", title: "Gimnacios" },
        { prependIcon: "mdi-clock-outline", title: "Tiendas de ropa" },
        { prependIcon: "mdi-clock-outline", title: "Supermercado" },
        { prependIcon: "mdi-clock-outline", title: "Hotel" }
      ]
    };
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
    buscar() {
      this.$router.push({ path: `/empresas`, query: { search: this.search } });
      this.showSearchDialog = false; // Cierra el diálogo después de buscar
    }
  }
};
</script>
