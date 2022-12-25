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
          Full truckload
          <transition name="fade" mode="out-in">
            <span class="highlight" v-if="animate">service </span>
          </transition>
        </h1>
      </div>
    </div>
    <div class="service-flex">
      <div class="service-sections" ref="target2">
        <div class="service-section">
          <img src="../assets/fulltruck.webp" alt="Full truckload" width="100%"/>
          <h2>
            <transition name="fade" mode="out-in">
              <span class="highlight" v-if="animate2">Dry Van </span>
            </transition>
            , Reefer, Flatbed
          </h2>
          <p>
            Full truckload service, commonly referred to as FTL, is a type of
            shipping mode whereby a truck carries one dedicated shipment. In other
            words, the journey is reserved for one shipment only. FTL trucking has
            several advantages over the alternative trucking shipment mode, LTL, or
            less than a full truckload shipment. Road runner provides
            transportation solutions that align with your supply chain goals and
            needs, whether it is a spot shipment, next day, project-based or
            contracted freight. Our specialists can provide service for dry vans and
            temperature-controlled capacity by understanding your business needs.
            Road runner uses every resource such as network and technology
            to be sure all freight is delivered on time. We understand how open deck
            equipment can be difficult for many shipping companies. Road runner
            understands your needs and provides customized solutions to
            provide consistent capacity. Whether you need to replace or add to your
            existing fleet, we can deliver cost savings, convenience and on-time
            deliveries while enabling your company to make better use of its capital
            and resources.
          </p>
        </div>
        <div class="service-section">
          <h3>FULL TRUCKLOAD SERVICE OFFER</h3>
          <ul>
            <li>24/7 Tracking</li>
            <li>Dedicated National Fleets</li>
            <li>Digital tracking</li>
            <li>Dedicated Operations Support</li>
            <li>97% On-Time Pickup and Delivery</li>
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
<style scoped></style>
