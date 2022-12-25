<script setup>
import FooterComponent from "../components/FooterComponent.vue";
import { ref, onMounted } from "vue";
const target = ref();
const animate = ref(false);
const observer = new IntersectionObserver(
  ([entry]) => {
    animate.value = entry.isIntersecting;
  },
  {
    threshold: 0.5,
  }
);

const target2 = ref();
const animate2 = ref(false);
const observer2 = new IntersectionObserver(
  ([entry]) => {
    animate2.value = entry.isIntersecting;
  },
  {
    threshold: 0.2,
  }
);
onMounted(() => {
  observer.observe(target.value);
  observer2.observe(target2.value);
});
</script>

<template>
  <main>
    <div class="services-wrapper" ref="target">
      <div class="image-overlay"></div>
      <div class="services-title">
        <h1>
          Our
          <transition name="fade" mode="out-in">
            <span class="highlight" v-if="animate">services </span>
          </transition>
        </h1>
      </div>
    </div>
    <div class="services">
      <div class="services-info" ref="target2">
        <h2>
          <span class="services-span">What we offer</span>
          Reliable partner in 
          <transition name="fade" mode="out-in">
            <span class="highlight" v-if="animate2">transport </span>
          </transition>
          &
          <transition name="fade" mode="out-in">
            <span class="highlight" v-if="animate2">logistics </span>
          </transition>
        </h2>
        <p>
          <strong>Working with a reputable freight broker offers an additional level of reliability to your business.</strong>
          We understand the importance of keeping your truck loaded, no matter the equipment type. Here is the list of what we offer to our carriers.
        </p>
      </div>
    </div>
    <div class="service-list">
      <span class="services-span">Services we provide</span>
      <router-link to="/full-truckload" exact class="service-item" aria-label="Full truckload" >
        <div class="service-image">
          <img src="../assets/truck.webp" alt="Full truckload" width="inherit" height="inherit" />
        </div>
        <div class="service-title">
          <p>Full Truck Load</p>
        </div>
      </router-link>
      <router-link to="/drayage-service" exact class="service-item" aria-label="Drayage">
        <div class="service-image">
          <img src="../assets/drayage.webp" alt="Drayage" width="inherit" height="inherit" />
        </div>
        <div class="service-title">
          <p>Drayage</p>
        </div>
      </router-link>
      <router-link to="/hazmat-trucking" exact class="service-item" aria-label="Hazmat">
        <div class="service-image">
          <img src="../assets/hazmat.webp" alt="Hazmat" width="inherit" height="inherit" />
        </div>
        <div class="service-title">
          <p>Hazmat</p>
        </div>
      </router-link>
      <router-link to="/expedited-shipping" exact class="service-item" aria-label="Expedited shipping" >
        <div class="service-image">
          <img src="../assets/expedited.webp" alt="Expedited shipping" width="inherit" height="inherit" />
        </div>
        <div class="service-title">
          <p>Expedited</p>
        </div>
      </router-link>
      <router-link to="/ltl-shipping" exact class="service-item" aria-label="Ltl shipping" >
        <div class="service-image">
          <img src="../assets/ltl.webp" alt="Expedited shipping" width="inherit" height="inherit" />
        </div>
        <div class="service-title">
          <p>LTL</p>
        </div>
      </router-link>
    </div>
    <FooterComponent />
  </main>
</template>

<style scoped>
.services-wrapper {
  height: 70vh;
  background: url("../assets/services.webp");
  background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.services {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 1rem;
  padding: 7rem 0;
}

.services-title {
  position: absolute;
  width: 80%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 10%);
  padding: 7rem 0;
}

.services-title h1 {
  font-size: 3rem;
  color: var(--white);
}

.services-info {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  justify-content: flex-start;
  align-items: center;
}
.services-info h2 {
  font-size: 3rem;
  width: 50%;
}

.services-info p {
  padding: 1rem 0;
  width: 50%;
  font-size: 1.4rem;
}

.services-info strong {
  font-weight: 600;
  display: block;
  padding: 1rem 0;
}
.services-span {
  position: absolute;
  top: -3rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--color-3);
  font-weight: 600;
}

.service-list .services-span {
  top: -2rem;
  width: 100%;
}

.service-list {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2rem;
  padding: 4rem 0;
}

.service-item {
  width: 17rem;
  height: 17rem;
  border-radius: 3rem;
  box-shadow: 0px 15px 35px -5px rgba(50, 88, 130, 0.32);
  cursor: pointer;
  transition: 0.4s;
}

.service-item .service-image {
  width: inherit;
  height: inherit;
  border-radius: 3rem;
}

.service-item .service-image img {
  width: inherit;
  height: inherit;
  border-radius: 3rem;
  object-fit: cover;
}

.service-title {
  text-align: center;
  border-radius: 0px 0px 3rem 3rem;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 2rem;
  margin-top: -6rem;
  height: 3rem;
  color: var(--white);
}

.service-title p {
  font-weight: 600;
}
.service-item:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 0px 15px 35px -5px rgba(50, 88, 130, 0.32);
}

@media (max-width: 992px) {
  .services-info {
    flex-direction: column;
    align-items: flex-start;
  }

  .services-info h2,
  .services-info p {
    width: 100%;
  }
}

@media (max-width: 350px) {
  .service-item {
    width: 15rem;
    height: 15rem;
  }
}
</style>
