<template>
    <div>
      <v-img
        class="mx-auto my-6"
        max-width="228"
        src="../../../imgs/logoRevbo.png"
      ></v-img>
  
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
        <div class="text-subtitle-1 text-medium-emphasis">Crear cuenta</div>
  
        <v-text-field
          density="compact"
          placeholder="Nombre"
          prepend-inner-icon="mdi-account-outline"
          variant="outlined"
        ></v-text-field>
  
        <v-text-field
          density="compact"
          placeholder="Correo electrónico"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>
  
        <v-text-field
          :append-inner-icon="visiblePassword ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visiblePassword ? 'text' : 'password'"
          density="compact"
          placeholder="Crear contraseña"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visiblePassword = !visiblePassword"
        ></v-text-field>
  
        <v-text-field
          :append-inner-icon="visibleConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visibleConfirmPassword ? 'text' : 'password'"
          density="compact"
          placeholder="Confirmar contraseña"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visibleConfirmPassword = !visibleConfirmPassword"
        ></v-text-field>
  
        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
        >
        </v-card>
  
        <v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
        >
          Registrarse
        </v-btn>
  
        <v-card-text class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="sign-in/sign-up"
            rel="noopener noreferrer"
            target="_blank"
          >
            ¿Ya tienes una cuenta? Iniciar sesión <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      visiblePassword: false,
      visibleConfirmPassword: false,
    }),
  }
  </script>
  