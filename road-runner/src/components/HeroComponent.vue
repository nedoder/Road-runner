<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
// import required modules
SwiperCore.use([Autoplay]);
</script>
<template>
  <main>
    <div class="hero-overlay">
      <div class="hero-logo">
        <img src="../assets/logo.png" alt="Logo" class="logo" width="48" height="48" />
      </div>
      <div class="hero-text">
        <h1>
          <transition name="show" appear>
            <span class="headline">We are</span>
          </transition>
          <swiper
            :direction="'vertical'"
            :effect="'fade'"
            :loop="false"
            :centeredSlides="true"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
              stopOnLastSlide: true,
            }"
            class="swiper"
          >
            <swiper-slide>
              <span>your future partner</span>
            </swiper-slide>
            <swiper-slide>
              <span>leading the way</span>
            </swiper-slide>
            <swiper-slide>
              <span>breaking limits</span>
            </swiper-slide>
            <swiper-slide>
              <span>road runners</span>
            </swiper-slide>
          </swiper>
        </h1>
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  height: 100vh;
  background: url("../assets/hero.webp");
  background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
}

.hero-logo {
  width: 80%;
  margin: 0 auto;
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
}

.hero-logo img {
  width: 10rem;
  height: auto;
}

h1 {
  text-align: center;
}
/* 
h1 span {
  text-transform: uppercase;
  text-align: center;
  font-family: "Anton", sans-serif;
  text-align: center !important;
} */
h1 span {
  font-size: 20rem;
  color: var(--color-2);
  text-transform: uppercase;
  text-align: center;
  font-family: "Anton", sans-serif;
  text-align: center;
  width: 100%;
  display: block;
 

  /* background-color: #f3ec78;
  background:  linear-gradient(to bottom, #c0c0c0 0%, #b1b1b1 100% );
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent; */
}

.swiper {
  height: 50vh;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.swiper-slide {
  overflow: hidden;
}

.swiper-container {
  position: relative !important;
}
.swiper-slide-duplicate:first-child {
  position: absolute !important;
  width: 100% !important; /* seems like you can remove this line but I didn't test without it */
  left: 0 !important;
}

.swiper-wrapper::before {
  content: "" !important;
  min-width: 100% !important;
}

span:last-child {
  position: absolute;
  top: 70%;
  color: var(--white);
  font-size: 5rem;
}
span:nth-child(3),
span:nth-child(2) {
  position: absolute;
  top: 60%;
  color: var(--white);
  font-size: 5rem;
}
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
}
.hero-text {
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1.5s ease;
  transition-delay: 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.fade1-enter-active,
.fade1-leave-active {
  transition: all 1.5s ease;
  transition-delay: 2.5s;
}
.fade1-enter-from,
.fade1-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.fade2-enter-active,
.fade2-leave-active {
  transition: all 1.5s ease;
  transition-delay: 5s;
}
.fade2-enter-from,
.fade2-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
.show-enter-active,
.show-leave-active {
  transition: all 1.5s ease;
}
.show-enter-from,
.show-leave-to {
  opacity: 0;
}
@media (max-width: 1400px) {
  h1 span {
    font-size: 14rem;
  }
  span:last-child {
    font-size: 4.5rem;
    top: 65%;
  }
}

@media (max-width: 992px) {
  h1 span {
    font-size: 11rem;
  }
  span:last-child {
    font-size: 4rem;
  }

  .swiper {
    bottom: -6rem;
  }
}
@media (max-width: 768px) {
  .hero-text {
    width: 100%;
  }
  h1 span {
    font-size: 10rem;
  }
  span:last-child {
    font-size: 3.5rem;
    top: 60%;
  }

  .swiper {
    bottom: -4rem;
  }
}
@media (max-width: 768px) {
  h1 span {
    font-size: 8rem;
  }
  span:last-child {
    font-size: 3rem;
  }
}
@media (max-width: 450px) {
  h1 span {
    font-size: 7rem;
  }
  span:last-child {
    font-size: 2.5rem;
    top: 58%;
  }

  .swiper {
    bottom: -3rem;
  }
}
@media (max-width: 400px) {
  h1 span {
    font-size: 6rem;
  }
  span:last-child {
    font-size: 2rem;
    top: 56%;
  }

  .swiper {
    bottom: -2.5rem;
  }
}
@media (max-width: 350px) {
  h1 span {
    font-size: 4.5rem;
  }
  span:last-child {
    font-size: 1rem;
    top: 55%;
  }

  .swiper {
    bottom: -1.5rem;
  }
}
</style>
