<template>
  <div class="app-bar">
    <div class="logo">Logo</div>
    <nav class="nav-links">
      <a href="#">Start</a>
      <a href="#">About</a>
      <a href="#">Products</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppBar'
};
</script>

<style scoped>
.app-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-links a {
  margin-right: 10px;
  color: white;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}

body {
  margin-top: 60px; /* Ajusta este valor para dar espacio al contenido debajo de la barra de navegación */
}
</style>
