<script setup>
</script>
<template>
  <menu class="menu">
    <router-link class="menu__item" to="/" exact aria-label="Home">
      <div class="menu__icon" >
        <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="home-anm">
            <path stroke-width="0" d="M0 0h24v24H0z" fill="none"/>
            <path stroke-width="0" fill="currentColor" d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z"/>
          </g>
        </svg>
      </div>
      <strong class="menu__text" :class="{ 'active': $route.path == '/' }">home</strong>
    </router-link>
    <router-link class="menu__item" to="/about" exact aria-label="About">
      <div class="menu__icon" >
        <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="strategy-anm">
            <path d="M0 0h24v24H0z" stroke-width="0" fill="none"/>
            <path stroke-width="0" fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 8H4v8h16v-8zm0-2V5H4v4h16zm-5-3h4v2h-4V6z"/>
          </g>
        </svg>
      </div>
      <strong class="menu__text" :class="{ 'active': $route.path == '/about' }">about</strong>
    </router-link>
    <router-link to="/services" class="menu__item" exact aria-label="Services">
      <div class="menu__icon" >
        <svg class="icon"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="period-anm">
            <path d="M0 0h24v24H0z" stroke-width="0" fill="none"/>
            <path stroke-width="0" fill="currentColor"  d="M22 17.002a6.002 6.002 0 0 1-4.713 5.86l-.638-1.914A4.003 4.003 0 0 0 19.465 19H17a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.938a8.001 8.001 0 0 0-15.876 0H7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10V17.002zM20 17v-4h-3v4h3zM4 13v4h3v-4H4z"/>
        </g>
      </svg>
      </div>
      <strong class="menu__text" :class="{ 'active': $route.path == '/services' }">services</strong>
    </router-link>
    <router-link to="/carrier" class="menu__item" exact aria-label="Carrier">
      <div class="menu__icon" >
        <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="security-cir">
            <path d="M0 0h24v24H0z" stroke-width="0" fill="none"/>
            <path stroke-width="0" fill="currentColor"   d="M16.757 3l-2 2H5v14h14V9.243l2-2V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12.757zm3.728-.9L21.9 3.516l-9.192 9.192-1.412.003-.002-1.417L20.485 2.1z"/>
          </g>
        </svg>
      
      </div>
      <strong class="menu__text"  :class="{ 'active': $route.path == '/carrier' }">carriers</strong>
    </router-link>
    <router-link to="/contact" class="menu__item" exact aria-label="Contact">
      <div class="menu__icon" >
        <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="settings-anm" >
            <path d="M0 0h24v24H0z"  stroke-width="0" fill="none"/>
            <path fill="currentColor" stroke-width="0" d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"/>
          </g>
        </svg>
      </div>
      <strong class="menu__text"  :class="{ 'active': $route.path == '/contact' }">contact</strong>
    </router-link>
  </menu>
</template>

<style scoped>
.menu {
  position: fixed !important;
  bottom: 0;
  left: 0;
  z-index: 10;
  margin: 0;
  width: 100%;
  display: flex;
  height: 6em;
  user-select: none;
  position: relative;
  align-items: center;
  padding: 0 1.9em 1.5em;
  justify-content: center;
  background-color: var(--white);
  border-radius: 1em 1em 0 0;
  -webkit-tap-highlight-color: transparent;
}

@media (max-width: 600px) {
  .menu {
    font-size: 0.7rem;
  }
}

.menu::after {
  height: 5%;
  width: 35%;
  bottom: 10%;
  content: " ";
  position: absolute;
  border-radius: 1em;
  background-color: #f2f3f4;
}

.menu__item {
  all: unset;
  flex-grow: 1;
  display: flex;
  cursor: pointer;
  /* overflow: hidden; */
  padding-top: 0.5rem;
  position: relative;
  align-items: center;
  color: var(--color-1);
  justify-content: center;
  transition: flex-grow var(--duration) var(--cubic);
}

.menu__icon {
  font-size: 0.8rem;
  /* stroke: currentColor; */
  transition: transform var(--duration) var(--cubic);
  position: absolute;
  left: 32%;
}

.menu__item::before {
  top: 9%;
  left: 18.4%;
  width: 1.5em;
  height: 1.5em;
  content: " ";
  position: absolute;
  border-radius: 50%;
  border-radius: 50%;
  transform: scale(0);
  transform-origin: center;
  background-color: #fdecef;
  transition: transform var(--duration) var(--cubic);
}

.menu__text::after {
  left: 0;
  bottom: 0;
  content: " ";
  height: 0.25em;
  position: absolute;
  border-radius: 2em;
  transform-origin: left center;
  background-color: currentColor;
  width: -webkit-fill-available;
  transform: scaleX(0);
  transition: transform calc(var(--duration) + 0.2s) var(--cubic);
}


.menu__text {
  left: 35%;
  font-size: 1.2em;
  position: absolute;
  text-transform: capitalize;
  letter-spacing: 0.01em;
  transform: translate3d(0, 250%, 0);
  transition: transform calc(var(--duration) / 3.7);
}

.menu__item.active {
  /* flex-grow: 2.7; */
  color: var(--color-2);
}

.menu__item.active .menu__icon {
  transform: translate3d(-95%, 0, 0);
}

.menu__item.active::before {
  transform: scale(1);
}

.menu__item.active::after {
  transform: translate3d(6.3em, 0, 0) scaleX(1);
  transition: transform var(--duration) var(--cubic);
}

.menu__text.active {
  transform: translate3d(0, 0, 0);
  transition: transform calc(var(--duration) / 1.5);
}

.menu__text.active::after {
  transform: scaleX(1) !important;
  transition: transform calc(var(--duration) + 0.2s) var(--cubic);
}

.icon {
  fill: none;
  width: 2.5em;
  height: 2.5em;
  display: block;
  stroke-width: 15;
  stroke-miterlimit: 10;
}

.active #home-anm {
  animation: home var(--duration-icon);
}

@keyframes home {
  25% {
    transform: translate3d(0, -0.8em, 0);
  }
  50% {
    transform: translate3d(0, 0.5em, 0);
  }
}

#strategy-anm {
  transform: scaleX(0.85);
  transform-origin: center;
}

.active #strategy-anm {
  animation: strategy var(--duration-icon);
}

@keyframes strategy {
  50% {
    transform: scaleX(1);
  }

  100% {
    transform: scaleX(0.85);
  }
}

.active #strategy-cir1 {
  animation: strategy-cir1 var(--duration-icon);
}

.active #strategy-cir2 {
  animation: strategy-cir2 var(--duration-icon) 0.1s;
}

.active #strategy-cir3 {
  animation: strategy-cir3 var(--duration-icon) 0.2s;
}

@keyframes strategy-cir1 {
  50% {
    transform: translate3d(-0.7em, -0.7em, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes strategy-cir2 {
  35% {
    transform: translate3d(0, -0.7em, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes strategy-cir3 {
  35% {
    transform: translate3d(0.7em, -0.7em, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

.active #period-anm {
  transform-origin: center 100%;
  animation: period var(--duration-icon);
}

.active #period-cir {
  transform-origin: center;
  animation: period-cir var(--duration-icon);
}

.active #period-line {
  stroke-dasharray: 66;
  animation: period-line calc(var(--duration-icon) / 2.5) reverse;
}

@keyframes period {
  35% {
    transform: scaleY(0.85);
  }

  60%,
  70% {
    transform: scaleY(1.2);
  }

  100% {
    transform: scaleY(1);
  }
}

@keyframes period-cir {
  0% {
    opacity: 0;
  }

  35% {
    opacity: 1;
    transform: translate3d(15%, -55%, 0);
  }

  60% {
    opacity: 0;
    transform: translate3d(-8%, -50%, 0);
  }
}

@keyframes period-line {
  100% {
    stroke-dashoffset: 66;
  }
}
.active #security-cir {
  transform-box: fill-box;
  transform-origin: center;
  animation: security-cir calc(var(--duration-icon) / 1.5);
}

@keyframes security-cir {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.active #security-strok {
  stroke-dasharray: 96;
  animation: security-strok calc(var(--duration-icon) / 1.2);
}

@keyframes security-strok {
  0% {
    stroke-dashoffset: 60;
  }
  100% {
    stroke-dashoffset: 230;
  }
}

.active #settings-anm {
  transform-box: fill-box;
  transform-origin: center;
  animation: settings-anm calc(var(--duration-icon) / 1.5);
}

@keyframes settings-anm {
  0% {
    transform: rotate(-60deg);
  }

  50% {
    transform: rotate(60deg);
  }
}

@media (max-width: 500px) {
  .icon {
    width: 2em;
    height: 2em;
  }
}

@media (max-width: 350px) {
  .icon {
    width: 1.8em;
    height: 1.8em;
  }

  .menu__text {
    font-size: 1.1em;
  }
}
</style>
