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
      <img src="../assets/logo.svg" alt="Logo" class="logo" />
      <div class="hero-text">
        <h1>
          <transition name="show" appear>
            <span>We are</span>
          </transition>
          <swiper
            :direction="'vertical'"
            :effect="'fade'"
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

.logo {
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: 10%;
  top: 5%;
}

h1 span {
  font-size: 20rem;
  color: var(--color-2);
  text-transform: uppercase;
  text-align: center;
  font-family: "Anton", sans-serif;
  text-align: center;
  width: 100%;
  display: block;
}

.swiper {
  height: 15vh;
  width: 100%;
  position: absolute;
  bottom: -8rem;
}

.swiper-slide {
  overflow: hidden;
}
span:last-child {
  position: absolute;
  top: 60%;
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
  background: rgba(0, 0, 0, 0.5);
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
    font-size: 15rem;
  }
}
@media (max-width: 1400px) {
  h1 span {
    font-size: 14rem;
  }
  span:last-child {
    font-size: 4.5rem;
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
  }

  .swiper {
    bottom: -1.5rem;
  }
}
</style>
