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
          Hazmat
          <transition name="fade" mode="out-in">
            <span class="highlight" v-if="animate">trucking </span>
          </transition>
        </h1>
      </div>
    </div>
    <div class="service-flex">
      <div class="service-sections" ref="target2">
        <div class="service-section">
          <img src="../assets/hazmat-img.webp" alt="Hazmat" width="100%" />
          <h2>
            Expert
            <transition name="fade" mode="out-in">
              <span class="highlight" v-if="animate2">hazmat </span>
            </transition>
            trucking transport
          </h2>
          <p>
            Hazmat trucking is the transport of hazardous materials, which could be
            anything from hazardous gasses or poisons to waste or radioactive
            materials. The cargo could cause harm either on its own or when it comes
            into contact with air, flame, water, or other chemicals. Safe driving is
            always a priority, and it's critically important in hazmat trucking.
            Drivers hauling a hazmat load have the added stress of ensuring they are
            following the additional regulations for this type of cargo. Plus, they
            may need to avoid certain routes to detour around hazmat-restricted
            areas. Road runner has hazmat-certified drivers and trucks in
            our network ready to move your hazardous materials to their destination
            and fleet managers trained in the most optimized routing that can make
            it easier for drivers.
          </p>
        </div>
        <div class="service-section">
          <h3>HAZMAT TRUCKING OFFER</h3>
          <ul>
            <li>24/7 Tracking</li>
            <li>Certified and Compliant Drivers</li>
            <li>TSA/ TWIC drivers</li>
            <li>Van/Reefer/Flatbed equipment</li>
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
  background: url("../assets/hazmatcover.webp");
  background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
}
</style>
