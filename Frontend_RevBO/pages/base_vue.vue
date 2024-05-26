<template>
  <appBar></appBar>
    <div>
    <h1>Contador</h1>
    <p>Valor actual: {{ count }}</p>
    <button @click="increment">Incrementar</button>
    <button @click="decrement">Decrementar</button>
  </div>
</template>
<script setup>
    // Data
    const count = ref(0);

    // Methods
    const increment = () => {
    count.value++;
    };

    const decrement = () => {
    count.value--;
    };

    // Computed
    const isEven = computed(() => count.value % 2 === 0);
    import appBar from './index/components/appBar.vue';
</script>