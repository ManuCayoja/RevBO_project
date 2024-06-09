<template>
  <v-parallax
    src="public/test.jpg"
  >
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4">
        Dota 2
      </h1>
      <h4 class="subheading">
        Gonzalo Saravia, gaymer desde la cuna
      </h4>
      <button @click="hireMe">Juega conmigo</button>

    </div>
    
  </v-parallax>
</template>

<script>
export default {
  name: 'App',

  methods: {
    hireMe() {
      alert('estas seguro de jugar conmigo?');
    },
    handleScroll() {
      const scrollTop = this.$refs.parallax.scrollTop;
      this.$refs.parallax.style.backgroundPositionY = -scrollTop / 2 + 'px';
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style>
body, html {
  height: 100%;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.hero-image {
  height: 50vh;
  background-image: url(./test.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.hero-text button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
}

.hero-text button:hover {
  background-color: #555;
  color: white;
}
</style>



