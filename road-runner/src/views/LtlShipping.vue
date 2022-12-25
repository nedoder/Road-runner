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
          LTL
          <transition name="fade" mode="out-in">
            <span class="highlight" v-if="animate">shipping </span>
          </transition>
        </h1>
      </div>
    </div>
    <div class="service-flex">
      <div class="service-sections" ref="target2">
        <div class="service-section">
          <img src="../assets/ltl-img.webp" alt="Ltl shipping" width="100%" />
          <h2>
            Dry Van,
            <transition name="fade" mode="out-in">
              <span class="highlight" v-if="animate2">Reefer </span>
            </transition>
            , Flatbed
          </h2>
          <p>
            Less than truckload freight shipping (LTL) is used for the
            transportation of small freight or when freight doesn't require the use
            of an entire trailer. This shipping method can be used when freight
            weighs between 150 and 15,000 pounds. Road runner has
            consolidation centers in major metropolitan cities to combine the
            freight, save on cost and be able to get nationwide converge.
          </p>
        </div>
        <div class="service-section">
          <h3>LTL FREIGHT SHIPPING OFFER</h3>
          <ul>
            <li>Trusted Carriers</li>
            <li>Competitive Rates</li>
            <li>Real-time tracking</li>
            <li>Dedicated support</li>
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
  background: url("../assets/ltlcover.webp");
  background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
}
</style>
