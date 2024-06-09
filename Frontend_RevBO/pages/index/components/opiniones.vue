<template>
    <div class="opiniones">
      <h1 style="color: rgb(45, 214, 251)">Opiniones</h1>
      <div class="opiniones-grid">
        <div v-for="opinion in opiniones" :key="opinion.id" class="opinion-box">
          <h3>{{ opinion.titulo }}</h3>
          <p>{{ opinion.contenido }}</p>
          <p><strong>Calificación:</strong> <span v-html="getStars(opinion.calificacion)" class="stars"></span></p>
          <p><strong>Cliente:</strong> {{ opinion.nombre }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        opiniones: [
          { id: 1, titulo: 'Excelente experiencia', contenido: 'El hotel superó mis expectativas. Habitaciones limpias y cómodas, personal amable y un desayuno delicioso.', calificacion: 5, nombre: 'Laura Sánchez' },
          { id: 2, titulo: 'Vacaciones inolvidables', contenido: 'Pasamos una semana increíble en este hotel. Las instalaciones son excelentes y la ubicación es perfecta.', calificacion: 4, nombre: 'Carlos Rodríguez' },
          { id: 3, titulo: 'Buen servicio', contenido: 'El personal del hotel fue muy atento y servicial. Sin duda volveré en mi próximo viaje.', calificacion: 4, nombre: 'María González' },
          { id: 4, titulo: 'Estancia agradable', contenido: 'Me encantó la decoración del hotel y la tranquilidad del lugar. Ideal para descansar.', calificacion: 5, nombre: 'Juan Pérez' },
          { id: 5, titulo: 'Buena relación calidad-precio', contenido: 'El hotel ofrece buenos servicios a un precio razonable. Lo recomendaría a otros viajeros.', calificacion: 3, nombre: 'Ana Martínez' },
          { id: 6, titulo: 'No cumplió mis expectativas', contenido: 'Esperaba más de este hotel en cuanto a comodidades y servicios. No volvería a hospedarme aquí.', calificacion: 2, nombre: 'Pedro López' }
        ]
      };
    },
    methods: {
      getStars(rating) {
        let stars = '';
        for (let i = 0; i < 5; i++) {
          if (i < rating) {
            stars += '<span class="filled-star">★</span>';
          } else {
            stars += '<span class="empty-star">☆</span>';
          }
        }
        return stars;
      }
    }
  };
  </script>
  
  <style scoped>
  .opiniones {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
    color: #333;
  }
  
  .opiniones h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .opiniones-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .opinion-box {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(9, 108, 135, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .opinion-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
  
  .opinion-box h3 {
    margin-top: 0;
    color: rgb(32, 56, 84);
  }
  
  .opinion-box p {
    margin-bottom: 10px;
  }
  
  .opinion-box p strong {
    font-weight: bold;
  }
  
  .opinion-box p:last-child {
    margin-bottom: 0;
  }
  
  .stars {
    color: rgb(45, 214, 251);
  }
  
  .filled-star,
  .empty-star {
    font-size: 20px;
    margin-right: 2px;
  }
  
  .filled-star {
    color: rgb(45, 214, 251);
  }
  
  .empty-star {
    color: #ddd;
  }
  </style>
  