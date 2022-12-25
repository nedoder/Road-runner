<script setup>
import { ref, onMounted } from "vue";
const target = ref();
const animate = ref(false);
const observer = new IntersectionObserver(
  ([entry]) => {
    animate.value = entry.isIntersecting;
  },
  {
    threshold: 0.2,
  }
);
onMounted(() => {
  observer.observe(target.value);
});
</script>
<template>
  <div class="about">
    <img src="../assets/about.webp" alt="About image" width="50%" height="auto" />
    <div class="about-info" ref="target">
      <h2>
        <span class="about-title">about company</span>
        Unique freight
        <transition name="fade" mode="out-in">
          <span class="highlight" v-show="animate">brokerage </span>
        </transition>
        company
      </h2>
      <p>
        <strong>
          Road runner connects customers with shipping needs with carriers that have the available capacity and service offerings.
        </strong>
        Road runner specializes in FTL, LTL, drayage, intermodal,
        hazmat, expedited, temperature controlled, and volume partials. Road runner works with customers in all types of industries such as food and beverage, paper, and plastics.
      </p>
      <router-link to="/about" exact aria-label="about-us" class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icons arrow"></span>
        </span>
        <span class="button-text">About us</span>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
.about {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  padding: 4rem 0;
}

.about img {
  width: 50%;
  object-fit: contain;
  height: auto;
}
.about-info {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem 0;
  align-items: flex-start;
  column-gap: 1rem;
  background-image: url("../assets/usa.webp");
  background-position: center;
  background-size: contain;
  -webkit-background-size: contain;
  background-repeat: no-repeat;
}

.about-title {
  position: absolute;
  top: -3rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--color-3);
  font-weight: 600;
}

.about-info h2 {
  font-size: 3rem;
}

.about-info strong {
  font-weight: 600;
  display: block;
  padding: 1rem 0;
}

.about-info a {
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
.about-info a.learn-more {
  width: 12rem;
  height: auto;
  margin-top: 0.5rem;
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
.about-info a:hover > .circle {
  width: 100%;
}
.about-info a:hover > .circle > .arrow {
  background: var(--white);
  transform: translate(1rem, 0);
}
.about-info a:hover > .button-text {
  color: var(--white);
}

@media (max-width: 1200px) {
  .about img {
    display: none;
  }

  .about-info {
    align-items: start;
  }
}
</style>
