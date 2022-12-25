<script setup>
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
onMounted(() => {
  observer.observe(target.value);
});
</script>
<template>
  <div class="partner-list" ref="target">
    <div class="partner-main">
      <span class="join">LET'S WORK TOGETHER</span>
      <h2>
        Our
        <transition name="fade" mode="out-in">
          <span class="highlight" v-if="animate">trusted </span>
        </transition>
        partners
      </h2>
      <div class="partners">
        <img src="../assets/logo.svg"  alt="Partners logo" width="56" height="56" />
        <img src="../assets/logo.svg"  alt="Partners logo" width="56" height="56" />
        <img src="../assets/logo.svg"  alt="Partners logo" width="56" height="56" />
        <img src="../assets/logo.svg"  alt="Partners logo" width="56" height="56" />
        <img src="../assets/logo.svg"  alt="Partners logo" width="56" height="56" />
        <img src="../assets/logo.svg"  alt="Partners logo" width="56" height="56" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.partner-list {
  background-color: var(--white);
  width: 100%;
  margin: 0 auto;
}

.partner-main {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 3rem 0;
}
.join {
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--color-3);
  font-weight: 600;
}

.partner-list h2 {
  font-size: 3rem;
}

.partners {
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;
  padding: 2rem 0;
}

.partners img {
  width: 4rem;
  height: 4rem;
}
</style>
