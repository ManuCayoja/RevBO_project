<template>
    <appBar></appBar>
    <div class="principal-container">
      <div class="content-container">
        <div class="logo-container">
          <div class="logo">
            <img src="https://scontent.flpb2-2.fna.fbcdn.net/v/t39.30808-6/360086522_314685647556118_1181850316933620546_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LrM7fVd64AgQ7kNvgEIHy1w&_nc_ht=scontent.flpb2-2.fna&oh=00_AYCMp9x8b-u9syJDCsbetsDcgJCSwhGkbo3dFNzc_wUcVQ&oe=666D57F6">
          </div>
          <div class="empresa">
            <h2>Viajes Travelero</h2>
            <p>
              <span class="reviews">3,620 reviews</span>
              <span class="porcentaje">4.6/5</span>
            </p>
            <p class="stars">
              <div class="text-center">
                <v-rating
                  v-model="ratingOfi"
                  half-increments
                  readonly
                ></v-rating>
              </div>
            </p>
          </div>
        </div>
        <div class="calificaciones">
          <h3>Reseñas - 4.6 <span class="star">★</span></h3>
          <p class="total-reviews">3,620 total</p>
          <div
            v-for="(percentage, index) in ratingsDistribution"
            :key="index"
            class="distribution-bar"
          >
            <span>{{ 5 - index }}/5</span>
            <div class="bar">
              <div class="fill" :style="{ width: percentage + '%' }"></div>
            </div>
            <span>{{ percentage }}%</span>
          </div>
        </div>
      </div>
      <div class="nuevas_reseñas-container">
        <div class="escribir_reseña">
          <h3>Escribe una reseña</h3>
          <input type="text" v-model="reviewerName" placeholder="Usuario">
          <div class="text-left">
            <v-rating
              v-model="formStars"
              hover
              style="color: #ffc107;"
            ></v-rating>
          </div>
          <textarea v-model="newReview" placeholder="Escribe aquí"></textarea>
          <button @click="submitReview">Enviar</button>
        </div>
        <div class="ultima_reseña">
          <h3 style="margin-left: 20px; margin-bottom: 10px; margin-top: 40px;">Últimas reseñas</h3>
          <div class="UR_reseña" v-for="(review, index) in reviews" :key="index">
            <div class="header">
              <p class="nombre">{{ review.name }}</p>
              <div class="reactions">
                <span class="like" @click="likeReview(index)">👍{{ review.likes }}</span>
                <span class="dislike" @click="dislikeReview(index)">👎{{ review.dislikes }}</span>
              </div>
            </div>
            <p style="margin-top: -20px; color: #ffc107;">
              <div class="text-left">
                <v-rating
                  v-model="review.stars"
                  readonly
                ></v-rating>
              </div>
            </p>
            <p class="comment">{{ review.comment }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import appBar from "../../index/components/appBar.vue";
  import { ref } from 'vue';
  
  export default {
    components: {
      appBar
    },
    setup() {
      const formStars = ref(0);
      const newReview = ref('');
      const reviews = ref([
        { name: 'Paola Medrano', stars: 5, comment: 'Muy buen servicio!', likes: 16, dislikes: 3 }
      ]);
      const ratingsDistribution = ref([87, 6, 3, 2, 2]);
      const reviewerName = ref('');
  
      const submitReview = () => {
        if (newReview.value.trim() !== '') {
          reviews.value.unshift({
            name: reviewerName.value || 'Anónimo',
            stars: formStars.value,
            comment: newReview.value,
            likes: 0,
            dislikes: 0
          });
          newReview.value = '';
          formStars.value = 0;
          reviewerName.value = '';
        }
      };
  
      const likeReview = (index) => {
        reviews.value[index].likes++;
      };
  
      const dislikeReview = (index) => {
        reviews.value[index].dislikes++;
      };
  
      return {
        formStars,
        newReview,
        reviews,
        ratingsDistribution,
        reviewerName,
        submitReview,
        likeReview,
        dislikeReview
      };
    },
    data() {
      return {
        rating: 0,
        ratingOfi: 4.6,
      };
    }
  }
  </script>
  
  <style scoped>
  .principal-container {
    display: flex;
    padding: 20px;
    margin-top: 60px;
    background-color: #ffffff;
    height: 100%;
  }
  
  .nuevas_reseñas-container {
    flex: 2;
    margin-left: 20px;
  }
  
  .logo-container {
    display: flex;
    align-items: center;
    margin-top: 20 px;
    margin-left: 5px;
    margin-right: 5px;
    padding: 30px;
    background-color: #ffffff;
    border-radius: 10px;
    width: 750px;
  }
  
  .logo {
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    width: 200px;
    height: 200px;
  }
  
  .logo img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 5px;
    margin-left: 10px
  }
  
  .empresa h2 {
    margin:20px;
    font-size: 2rem;
    color: #000;
  }
  
  .empresa .reviews {
    font-size: 1.5rem;
    color: #747474;
    margin: 20px;
  }
  
  .empresa .porcentaje {
    font-size: 1.2rem;
    color: #555;
    margin-left: 5px;
  }
  
  .empresa .stars, .review-form .stars {
    margin: 5px 0 0;
    font-size: 1.5rem;
    color: #ffc107;
    margin-right: 2px;
    margin: 20px;
  }
  
  .calificaciones {
    background-color: #a7a7a7;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: #e0dfdf;
  }
  
  .calificaciones h3 {
    margin-bottom: 10px;  
  }
  
  .calificaciones .total-reviews {
    margin-bottom: 20px;
  }
  
  .distribution-bar {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .distribution-bar span {
    margin: 0 10px;
  }
  
  .distribution-bar .bar {
    flex: 1;
    height: 10px;
    background-color: #ffffff;
    border-radius: 5px;
  }
  
  .distribution-bar .fill {
    height: 100%;
    background-color: #525151;
    border-radius: 5px; 
  }
  
  .escribir_reseña {
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: #e0dfdf;
  }
  
  .escribir_reseña h3 {
    margin-bottom: 10px;
  }
  
  .escribir_reseña textarea {
    width: 100%;
    height: 94px;
    margin-bottom: 10px;
    border: 1px solid #000000;
    border-radius: 5px;
    padding: 10px;
    background-color: #ffffff;
  }
  
  .escribir_reseña button {
    background-color: #95eefa;
    padding: 10px 20px;
    color: #000000;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .ultima_reseña {
    margin-top: 20px;
  }
  
  .UR_reseña {
    background-color: #ffffff;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
    border: 1px solid #000000;
  }
  .UR_reseña .stars {
    font-size: 1rem;  
    margin-bottom: 5px;
  }
  .nombre {
    font-weight: bold;
  }
  
  .UR_reseña .stars {
    font-size: 1rem;  
    margin-bottom: 5px;
  }
  
  .UR_reseña .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .UR_reseña .reactions {
    font-size: 1.2rem;
  }
  
  .UR_reseña .stars {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #ffc107;
  }
  
  .UR_reseña .comment {
    margin-bottom: 0;
  }
  
  .UR_reseña .star {
    cursor: default;
  }
  .star {
    cursor: pointer;
  }
  
  .star.rated {
    color: #ffc107;
  }
  .like{
    cursor: pointer;
  }
  .dislike {
    cursor: pointer;
  }
  .escribir_reseña input {
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  </style>
  