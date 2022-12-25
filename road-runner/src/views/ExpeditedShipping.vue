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
    threshold: 0.5,
  }
);
onMounted(() => {
  observer.observe(target.value);
  observer2.observe(target2.value);
});
</script>
<template>
  <main>
    <div class="service-page" ref="target">
      <div class="image-overlay"></div>
      <div class="service-page-title">
        <h1>
          Expedited
          <transition name="fade" mode="out-in">
            <span class="highlight" v-if="animate">shipping </span>
          </transition>
        </h1>
      </div>
    </div>
    <div class="service-flex">
      <div class="service-sections" ref="target2">
        <div class="service-section">
          <img src="../assets/expedited-img.webp" alt="Expedited shipping" width="100%" />
          <h2>
            Faster than 
            <transition name="fade" mode="out-in">
              <span class="highlight" v-if="animate2">standard </span>
            </transition>
          </h2>
          <p>
            Expedited shipping service is a type of shipping that involves using
            faster methods to transport goods. This can include using a faster mode
            of transportation, such as shipping the goods directly to the customer
            instead of going through a retailer first. Road runner has
            developed a network for drivers to pick up and deliver expedited
            shipments as quickly as possible. Our networks consist of all types of
            equipment with teams, box trucks, cargo vans, etc.
          </p>
        </div>
        <div class="service-section">
          <h3>EXPEDITED SHIPPING OFFER</h3>
          <ul>
            <li>Door to door</li>
            <li>Final Mile</li>
            <li>Digital tracking</li>
            <li>24/7 Tracking</li>
            <li>Proactive Communication</li>
          </ul>
        </div>
      </div>
      <div class="service-links">
        <div class="service-link">
          <h4>Services</h4>
          <router-link to="full-truckload" exact arrow="Full truckload">Full Truck Load</router-link>
          <router-link to="drayage-service" exact aria-label="Drayage">Drayage</router-link>
          <router-link to="hazmat-trucking" exact aria-label="Hazmat">Hazmat</router-link>
          <router-link to="expedited-shipping" exact aria-label="Expedited">Expedited</router-link>
          <router-link to="ltl-shipping" exact aria-label="Ltl">Ltl</router-link>
        </div>
        <div class="service-contact">
          <h4>Need more information?</h4>
          <p>Feel free to drop us a message.</p>
          <router-link to="contact" aria-label="Contact">Contact us</router-link>
        </div>
      </div>
    </div>
    <FooterComponent />
  </main>
</template>
<style scoped>
.service-page {
  background: url("../assets/expeditedcover.webp");
  background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
}
</style>
