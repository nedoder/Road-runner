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
onMounted(() => {
  observer.observe(target.value);
});
const name = "";
const message = "";
</script>

<template>
  <main>
    <div class="contact-wrapper" ref="target">
      <div class="image-overlay"></div>
      <div class="contact-title">
        <h1>
          Let's get in
          <transition name="fade" mode="out-in">
            <span class="highlight" v-if="animate">touch </span>
          </transition>
        </h1>
      </div>
    </div>
    <div class="contact">
      <div class="contact-info">
        <h2>
          <span class="contact-span">Ask us a question</span>
          Contact info
        </h2>
        <p>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="m12 20.9 4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="#ff5e14" class="fill-000000"></path></svg>
          <span>677 N. Larch Ave Elmhurst IL 60126</span>
        </p>
        <p>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995A15.51 15.51 0 0 1 18.5 21C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657 1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" fill="#ff5e14" class="fill-000000"></path></svg>
          (312) 796-6668
        </p>
        <p>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M2.243 6.854 11.49 1.31a1 1 0 0 1 1.029 0l9.238 5.545a.5.5 0 0 1 .243.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429zM4 8.133V19h16V8.132l-7.996-4.8L4 8.132zm8.06 5.565 5.296-4.463 1.288 1.53-6.57 5.537-6.71-5.53 1.272-1.544 5.424 4.47z" fill="#ff5e14" class="fill-000000"></path></svg>
          roadrunner@gmail.com
        </p>
      </div>
      <div class="contact-form">
        <span>How can we help?</span>
        <input
          required
          name="name"
          v-model="name"
          placeholder="First name"
          type="text"
          autocomplete="off"
          class="contact-name"
        />
        <input
          required
          name="name"
          v-model="name"
          placeholder="Last name"
          type="text"
          autocomplete="off"
          class="contact-name"
        />
        <input
          required
          name="name"
          v-model="name"
          placeholder="Email"
          type="text"
          autocomplete="off"
          class="contact-name"
        />
        <input
          required
          name="name"
          v-model="name"
          placeholder="Phone"
          type="text"
          autocomplete="off"
          class="contact-name"
        />
        <textarea
          name="message"
          v-model="message"
          rows="8"
          placeholder="How can we help you?"
          class="contact-message"
        ></textarea>
        <button class="contact-button" @click="onSubmit"><span>Send message</span></button>
      </div>
    </div>
    <FooterComponent />
  </main>
</template>

<style scoped>
.contact-wrapper {
  height: 70vh;
  background: url("../assets/contact-us.webp");
  background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.contact {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
  padding: 2rem 0;
}

.contact-title {
  position: absolute;
  width: 80%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 10%);
  padding: 7rem 0;
}

.contact-title h1 {
  font-size: 3rem;
  color: var(--white);
}

.contact-info svg {
  width: 4rem;
  height: 4rem;
  padding: 1rem;
  border: 1px solid var(--color-2);
  border-radius: 50%;
}

.contact-info h2 {
  font-size: 3rem;
  padding-bottom: 2rem;
}

.contact-info p {
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  column-gap: 1rem;
}
.contact-span {
  position: absolute;
  top: -3rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--color-3);
  font-weight: 600;
}

.contact-info,
.contact-form {
  width: 49%;
}

.contact-form {
  padding: 2rem;
}

.contact-form span {
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--color-3);
  font-weight: 600;
}
.contact-form input,
.contact-form textarea {
  border-radius: 0.5rem;
  border: 0;
  outline: 0;
  padding: 1rem;
  resize: none;
  margin: 1rem 0;
  width: 100%;
  /* background: var(--color-1); */
  border: 1px solid var(--color-1);
}
.contact-form button {
  width: 100%;
  border-radius: 0.5rem;
  outline: none;
  border: 1px solid var(--color-4);
  padding: 1rem 0;
  color: var(--color-4);
  font-weight: 600;
  overflow: hidden;
  transition: all 0.5s ease;
}

.contact-form button span {
  color: var(--color-4);
  text-transform: none;
  transition: all 0.5s ease-out;
}
.contact-form button::before {
  content: "";
  border-radius: 0.5;
  display: block;
  position: absolute;
  width: 0;
  height: 100%;
  left: -100%;
  top: 0;
  text-align: center;
  transition: all 0.5s ease-out;
}
.contact-form button:hover {
  cursor: pointer;
  color: #fff;
  border: 1px solid transparent;
}

.contact-form button:hover > span {
  color: #fff;
}
.contact-form button:hover::before {
  width: 100%;
  left: 0;
  box-shadow: inset 0 0 10rem var(--color-2);
}

@media (max-width: 992px) {
  .contact {
    padding: 5rem 0;
  }
  .contact-info,
  .contact-form {
    width: 100% !important;
  }

  .contact-form {
    padding: 2rem 0;
  }
}
@media (max-width: 450px) {
  .contact-info p {
    flex-direction: column;
    row-gap: 1rem;
    /* align-items: baseline; */
  }
}
@media (max-width: 350px) {
  .contact-info h2 {
    padding: 3rem 0;
  }

  .contact-info p {
    font-size: 0.7rem;
  }
}
</style>
