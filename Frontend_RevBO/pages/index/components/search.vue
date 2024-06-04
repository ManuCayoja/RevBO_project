<template>
    <center>
        <v-autocomplete
        clearable
        v-model="search"
              :items="items"
              class="mx-auto"
              density="comfortable"
              menu-icon=""
              placeholder="Busca una empresa o categoría"
              style="max-width: 400px;"
              theme="light"
              variant="solo"
              auto-select-first
              item-props
              rounded
            ></v-autocomplete>
            <v-btn rounded="" style="background-color: rgba(45, 214, 251, 0.5);" prepend-icon="mdi-magnify" @click="buscar">Buscar</v-btn>
    </center>
</template>

  <script>
    export default {
      data: () => ({
        search:"",
        dialog: false,
        items: [
          {
            prependIcon: 'mdi-clock-outline',
            title: 'Restaurante',
          },
          {
            prependIcon: 'mdi-clock-outline',
            title: 'Gimnacios',
          },
          {
            prependIcon: 'mdi-clock-outline',
            title: 'Tiendas de ropa',
          },
          {
            prependIcon: 'mdi-clock-outline',
            title: 'Supermercado',
          },
          {
            prependIcon: 'mdi-clock-outline',
            title: 'Hotel',
          },
        ],
      }),
      methods: {
        buscar() {
          console.log("dfasdfsadfsdfasdf")
          this.$router.push({ path: `/empresas`, query: { search: this.search } })
        }
      }
    }
  </script>