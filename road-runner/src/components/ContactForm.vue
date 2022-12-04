<script setup>
const name = "";
const message = "";
</script>
<template>
  <div class="contact-overlay">
    <div class="contact-wrapper">
      <div class="contact">
        <div class="contact-info">
          <h2>
            <span class="contact-title">CONNECT WITH YOUR AGENT</span>
            <span class="highlight">Shipping </span>questions?
          </h2>
          <p>
            Tell us more about your freight. Select the mode you would like to
            receive a quote on.
            <strong>Or reach by phone: (312) 796-6668</strong>
          </p>
        </div>
        <div class="contact-form">
          <span>How can we help you today?</span>
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
          <button class="contact-button" @click="onSubmit">Send message</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.contact-overlay {
  min-height: 100vh;
  background: url("../assets/contact.webp");
  background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
}

.contact-wrapper {
  /* position: absolute; */
  /* top: 0;
  left: 0; */
  /* bottom: 0; */
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.contact {
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
}
.contact-info {
  display: flex;
  flex-direction: column;
  padding: 7rem 0 3rem 0;
  align-items: baseline;
  column-gap: 1rem;
  row-gap: 1rem;
  color: #fff;
  width: 48%;
}

.contact-title {
  position: absolute;
  top: -3rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--color-1);
  font-weight: 600;
}

.contact-info h2 {
  font-size: 3rem;
}

.contact-info strong {
  font-weight: 600;
  display: block;
  padding: 1rem 0;
}
.contact-form {
  width: 48%;
  padding: 2rem;
  background-color: var(--color-1);
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
  background: var(--color-1);
  border: 1px solid rgb(121, 117, 117);
}
.contact-form button {
  width: 100%;
  border-radius: 0.5rem;
  outline: none;
  border: 1px solid var(--color-2);
  padding: 1rem 0;
  color: var(--color-2);
  font-weight: 600;
  transition: all 0.5s ease;
}
.contact-form button:hover {
  cursor: pointer;
}

@media (max-width: 1200px) {
  .contact-info,
  .contact-form {
    width: 100%;
  }

  .contact-form {
    margin-bottom: 1rem;
  }
}

@media (max-width: 500px) {
  .contact-info h2 {
    padding: 3rem 0;
  }
}
</style>
