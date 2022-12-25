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
          Drayage
          <transition name="fade" mode="out-in">
            <span class="highlight" v-if="animate">service </span>
          </transition>
        </h1>
      </div>
    </div>
    <div class="service-flex">
      <div class="service-sections" ref="target2">
        <div class="service-section">
          <img src="../assets/services.webp" alt="Drayage" width="100%" />
          <h2>
            Whether your import or export shipment needs to move to or from a port or
            <transition name="fade" mode="out-in">
              <span class="highlight" v-if="animate2">warehouse </span>
            </transition>
            , we will find the right solution.
          </h2>
          <p>
            Road runner assists its customers with
            managing complicated drayage solutions. Our teams provide arrivals,
            quoting, transloading, scheduling, and track and trace by managing from
            port to warehouse.
          </p>
        </div>
        <div class="service-section">
          <h3>DRAYAGE SERVICE OFFER</h3>
          <ul>
            <li>24/7 Tracking</li>
            <li>Warehouse Solutions</li>
            <li>Same Day Service</li>
            <li>Contracts with Railroads</li>
            <li>Dedicated Capacity</li>
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
  background: url("../assets/drayagecover.webp");
  background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
}
</style>
