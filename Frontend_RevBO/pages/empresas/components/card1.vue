<template>
<div >
  <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="mx-auto"
            width="350"
            rounded="lg"
            v-bind="props"
            :elevation="isHovering ? 24 : 1"
          >
            <v-img
              height="200px"
              :src="item.image"
              cover
            ></v-img>

            <v-card-title>
              {{ item.titulo }}
            </v-card-title>
            
            <v-card-actions>
              <v-btn
                color="orange-lighten-2"
                text="Explore"
               @click="redireccionar(item.path)"
              ></v-btn>

              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-hover>
</div>


</template>
<script setup>
const router = useRouter()

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const redireccionar = function(path) {
  console.log("clic==========")
  router.push(path)
}
</script>