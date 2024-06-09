<template>
  <div>
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
          class="text-right pa-2"
          cover
        >
          <v-btn
            :icon="isSelected ? 'mdi-heart' : 'mdi-heart-outline'"
            @click="toggle"
          ></v-btn>
        </v-img>

        <v-card-title>
          {{ item.titulo }}
        </v-card-title>
        
        <v-card-actions>
          <v-btn
            color="rgb(45, 214, 251)"
            text
            @click="redireccionar(item.path)"
          >Explore</v-btn>

          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-hover>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

const isSelected = ref(false);

onMounted(() => {
  const favoriteTitles = ["Burger King", "Pollos Copacabana", "UFC Gym"];
  if (favoriteTitles.includes(props.item.titulo)) {
    isSelected.value = true;
  }
});

const toggle = () => {
  isSelected.value = !isSelected.value;
};

const redireccionar = (path) => {
  console.log("clic==========");
  router.push(path);
};
</script>
