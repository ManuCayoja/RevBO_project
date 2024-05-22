<template>
    <body>

<div class="hero-image">
  <div class="hero-text">
    <h1 style="font-size:50px">I am Brunato08</h1>
    <p>And I'm a good boy</p>
    <v-btn variant="text">
  Button
</v-btn>
  </div>
</div>

<p>Page Content..</p>

</body>
</template>
<style>
body, html {
  height: 100%;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://i.pinimg.com/originals/12/75/a3/1275a3667887d51bcd7e8d82c667fe8f.jpg");
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.hero-text v-btn {
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
  background-color: none;
  color: white;
}
</style>