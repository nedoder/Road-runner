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
  <div class="services-section">
    <div class="service-info" ref="target">
      <h2>
        <span class="service-title">services</span>
        <transition name="fade" mode="out-in">
          <span class="highlight" v-if="animate">Freight </span>
        </transition>
        expertise, technology, and experience
      </h2>
      <p>
        <strong>
          Road runner is a unique freight brokerage that focuses on
          over-the-road transport. Whether it is scheduling a full truckload
          (FTL) or managing your total freight operation, we can help.
        </strong>
        Through a go-to-market strategy model, Road runner is changing the
        environment of how traditional freight brokerages work by delivering
        operational excellence and 24/7 service to scale.
      </p>
    </div>
    <div class="services-items">
      <div class="service-item">
        <span>01</span>
        <p class="truckload">Full Truckload</p>
        <div class="service-content">
          <p>
            We provide service for dry vans and temperature-controlled capacity.
          </p>
          <router-link to="/full-truckload" exact aria-label="Full truckload">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                />
              </g>
            </svg>
          </router-link>
        </div>
      </div>
      <div class="service-item">
        <span>02</span>
        <p>Drayage</p>
        <div class="service-content">
          <p>
            Drayage department assists its customers with managing complicated
            drayage solutions.
          </p>
          <router-link to="/drayage-service" exact aria-label="Drayage service">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                />
              </g>
            </svg>
          </router-link>
        </div>
      </div>
      <div class="service-item">
        <span>03</span>
        <p>Hazmat</p>
        <div class="service-content">
          <p>
            Hazmat-certified drivers and trucks in our network ready to move
            hazard materials.
          </p>
          <router-link to="/hazmat-trucking" exact aria-label="Hazmat trucking">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                />
              </g>
            </svg>
          </router-link>
        </div>
      </div>
      <div class="service-item">
        <span>04</span>
        <p>Expedited</p>
        <div class="service-content">
          <p>
            Our networks consist of all types of equipment with teams, box
            trucks, cargo vans, etc.
          </p>
          <router-link to="expedited-shipping" exact aria-label="Expedited shipping">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" 
                />
              </g>
            </svg>
          </router-link>
        </div>
      </div>
      <div class="service-item">
        <span>05</span>
        <p>Ltl</p>
        <div class="service-content">
          <p>
            We have consolidation centers in major metropolitan cities to
            combine the freight.
          </p>
          <router-link to="ltl-shipping" exact aria-label="Ltl shipping">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                />
              </g>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.services-section {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 7rem 0 3rem 0;
}

.service-info,
.services-items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 3rem 0;
  align-items: baseline;
  column-gap: 1rem;
  row-gap: 2rem;
}

.service-title {
  position: absolute;
  top: -3rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--color-3);
  font-weight: 600;
}

.service-info h2 {
  font-size: 3rem;
  width: 40%;
}

.service-info p {
  width: 60%;
}

.service-info strong {
  font-weight: 600;
  display: block;
  padding: 1rem 0;
}

.service-item {
  width: calc(20% - 1rem);
  align-self: stretch;
  /* align-self: stretch;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch; */
}

.service-item p {
  z-index: 2;
  font-weight: 600;
  font-size: 2rem;
}

.service-item span {
  position: absolute;
  top: -2rem;
  font-size: 3rem;
  text-transform: uppercase;
  color: var(--color-1);
  font-weight: 600;
  z-index: 1;
}
.service-content p {
  font-weight: 400;
  font-size: 1rem;
  white-space: normal;
  height: 100px;
  overflow: hidden;
  /* display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden; */
}

.truckload {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.service-content svg {
  width: 3rem;
  border-radius: 50%;
}
.service-content a::before {
  content: "";
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  top: -30px;
  right: 1.1rem;
  background: var(--color-2);
  opacity: 0.1;
  transform-origin: center;
}
.service-content a:hover > svg {
  /* fill: #fff;
  background: #000; */
  transform: translate3d(100%, 0, 0);
  transition: all 0.3s ease;
}

@media (max-width: 1200px) {
  .service-info h2,
  .service-info p {
    width: 100%;
  }

  .service-item {
    width: 31%;
  }
}

@media (max-width: 768px) {
  .service-item {
    width: 48%;
  }
}

@media (max-width: 500px) {
  .service-item {
    width: 100%;
  }
}
</style>
