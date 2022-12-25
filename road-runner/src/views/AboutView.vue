<script setup>
import PartnerList from "../components/PartnerList.vue";
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

const target3 = ref();
const animate3 = ref(false);
const observer3 = new IntersectionObserver(
  ([entry]) => {
    animate3.value = entry.isIntersecting;
  },
  {
    threshold: 0.5,
  }
);
onMounted(() => {
  observer.observe(target.value);
  observer2.observe(target2.value);
  observer3.observe(target3.value);
});
</script>

<template>
  <main>
    <div class="about-wrapper" ref="target">
      <div class="image-overlay"></div>
      <div class="aboutview-title">
        <h1>
          About
          <transition name="fade" mode="out-in">
            <span class="highlight" v-if="animate">Road runner </span>
          </transition>
        </h1>
      </div>
    </div>
    <div class="about-intro">
      <img src="../assets/about-care.webp" alt="About" max-width="50%"/>
      <div class="about-info" ref="target2">
        <h2>
          <span class="about-span">Our story</span>
          Unique freight brokerage
          <transition name="fade" mode="out-in">
            <span class="highlight" v-if="animate2">service</span>
          </transition>
        </h2>
        <p>
          Our company began in 2019. with one vision in mind- to provide the
          best service to our customers. From coast to coast, Road runner connects
          businesses with carriers who transport goods effectively and
          efficiently. Road runner is a unique freight brokerage that
          focuses on over-the-road transport. 
          <strong>
            Through a go-to-market strategy
          model, Road runner is changing the environment of how traditional
          freight brokerages work by delivering operational excellence and 24/7
          service to scale.
          </strong>
          We specializes in FTL, LTL, drayage, intermodal,
          hazmat, expedited, temperature controlled, and volume partials. Road runner
           works with customers in all types of industries such as
          food and beverage, paper, and plastics.
        </p>
      </div>
    </div>
    <div class="about-mission">
      <div class="mission-info" ref="target3">
        <h2>
          <span class="about-span">OUR MISSION</span>
          We
          <transition name="fade" mode="out-in">
            <span class="highlight" v-if="animate3">provide</span>
          </transition>
          more
        </h2>
        <p>
          We will provide transportation solutions that align with your supply
          chain goals and needs, whether a spot shipment, next day,
          project-based, or contracted freight.
        </p>
        <strong>WHAT YOU SHOULD KNOW ABOUT ROAD RUNNER:</strong>
        <ul>
          <li>Dedicated National Fleets</li>
          <li>Real-time 24/7 tracking</li>
          <li>Certified and Compliant Drivers</li>
          <li>TSA/ TWIC drivers</li>
          <li>97% On-Time Pickup and Delivery</li>
          <li>Dedicated Operations Support</li>
        </ul>
        <router-link to="/carrier" exact aria-label="join-us" class="learn-more">
          <span class="circle" aria-hidden="true">
            <span class="icons arrow"></span>
          </span>
          <span class="button-text">Join us!</span>
        </router-link>
      </div>
      <img src="../assets/about-mission.webp" alt="Our mission" max-width="50%"/>
    </div>
    <div class="partner-list">
      <PartnerList />
    </div>
    <FooterComponent />
  </main>
</template>

<style>
.about-wrapper {
  height: 70vh;
  background: url("../assets/about-us.webp");
  background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.about {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
  padding: 2rem 0;
}

.aboutview-title {
  position: absolute;
  width: 80%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 10%);
  padding: 7rem 0;
}

.aboutview-title h1 {
  font-size: 3rem;
  color: var(--white);
}

.about-info,
.about-mission {
  font-size: 1.1rem;
}

.about-info h2,
.about-mission h2 {
  font-size: 3rem;
  padding-bottom: 1rem;
}

.about-span {
  position: absolute;
  top: -3rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--color-3);
  font-weight: 600;
}

.about-info strong,
.about-mission strong {
  display: block;
  font-weight: 600;
  padding: 1rem 0;
}
.about-intro,
.about-mission {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
  padding: 5rem 0;
}

.about-intro img,
.about-mission img {
  max-width: 50%;
}

.about-mission ul {
  padding: 1rem 0 2rem 0;
  list-style: none;
}

.about-mission ul li::before {
  content: "\274D";
  color: var(--color-2);
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-right: 1rem;
}

.mission-info a {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
}
.mission-info a.learn-more {
  width: 12rem;
  height: auto;
}
.circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: var(--color-2);
}
.icons {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: var(--white);
}
.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: transparent;
}
.arrow::before {
  position: absolute;
  content: "";
  top: -0.25rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid var(--white);
  border-right: 0.125rem solid var(--white);
  transform: rotate(45deg);
}
.button-text {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: #000;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
}
.mission-info a:hover > .circle {
  width: 100%;
}
.mission-info a:hover > .circle > .arrow {
  background: var(--white);
  transform: translate(1rem, 0);
}
.mission-info a:hover > .button-text {
  color: var(--white);
}

@media (max-width: 992px) {
  .about-intro img,
  .about-mission img {
    display: none;
  }
}
</style>
