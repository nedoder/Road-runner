<script setup></script>

<template>
  <main>
    <div class="carrier-wrapper">
      <div class="carrier-title">
        <h1>Start <span class="highlight">working</span> with us</h1>
      </div>
    </div>
    <div class="carrier">
      <div class="carrier-info">
        <h2>
          <span class="carrier-span">Ready to start ?</span>
          We thrive for <span class="highlight">greatness</span>
        </h2>
        <p>
          <strong>Working with a reputable freight broker offers an additional level of reliability to your business.</strong>
          We understand the importance of keeping your truck loaded, no matter the equipment type. Here is the list of what we offer to our carriers.
        </p>
      </div>
      <div class="carrier-benefits">
        <p>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M22 17.002a6.002 6.002 0 0 1-4.713 5.86l-.638-1.914A4.003 4.003 0 0 0 19.465 19H17a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.938a8.001 8.001 0 0 0-15.876 0H7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10v5.002zM20 17v-4h-3v4h3zM4 13v4h3v-4H4z" fill="#ff5e14" class="fill-000000"></path></svg>
          24/7 support
        </p>
        <p>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 7a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 1.5 1.323 2.68 2.957.43-2.14 2.085.505 2.946L12 17.25l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L12 10.5zM18 2v3l-1.363 1.138A9.935 9.935 0 0 0 13 5.049V2h5zm-7-.001v3.05a9.935 9.935 0 0 0-3.636 1.088L6 5V2l5-.001z" fill="#ff5e14" class="fill-000000"></path></svg>
          reputable employer
        </p>
        <p>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.5-6H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z" fill="#ff5e14" class="fill-000000"></path></svg>
          Secure payment
        </p>
        <p>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3.783 2.826 12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05 5 4.604zM12 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-4.473 5a4.5 4.5 0 0 1 8.946 0H7.527z" fill="#ff5e14" class="fill-000000"></path></svg>
          24/7 dispatch
        </p>
      </div>
      <div class="carrier-form-wrapper">
        <div class="carrier-form">
          <span>Apply today</span>
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
          <input
            required
            name="name"
            v-model="name"
            placeholder="Location"
            type="text"
            autocomplete="off"
            class="contact-name"
          />
          <input
            required
            name="name"
            v-model="name"
            placeholder="Carrier MC# or DOT#"
            type="text"
            autocomplete="off"
            class="contact-name"
          />
          <textarea
            name="message"
            v-model="message"
            rows="8"
            placeholder="Additional info (optional)"
            class="contact-message"
          ></textarea>
          <button class="contact-button" @click="onSubmit">Send message</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.carrier-wrapper {
  height: 70vh;
  background: url("../assets/carrier.jpg");
  background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.carrier {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 1rem;
  padding: 7rem 0;
}

.carrier-title {
  position: absolute;
  width: 80%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 10%);
  padding: 7rem 0;
}

.carrier-title h1 {
  font-size: 3rem;
  color: var(--white);
}

.carrier-info {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  justify-content: flex-start;
  align-items: center;
}
.carrier-info h2 {
  font-size: 3rem;
  width: 50%;
}

.carrier-info p {
  padding: 1rem 0;
  width: 50%;
  font-size: 1.4rem;
}

.carrier-info strong {
  font-weight: 600;
  display: block;
  padding: 1rem 0;
}
.carrier-span {
  position: absolute;
  top: -3rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--color-1);
  font-weight: 600;
}

.carrier-info,
.carrier-form-wrapper,
.carrier-benefits {
  width: 100%;
}

.carrier-benefits {
  padding: 3rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
}

.carrier-benefits p {
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  column-gap: 1rem;
  width: 100%;
  color: var(--color-1);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.4rem;
}

.carrier-benefits svg {
  width: 5rem;
  height: 5rem;
}

.carrier-form {
  width: 50%;
  padding: 2rem;
  text-align: center;
  margin: 0 auto;
}

.carrier-form span {
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--color-1);
  font-weight: 600;
}
.carrier-form input,
.carrier-form textarea {
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
.carrier-form button {
  width: 100%;
  border-radius: 0.5rem;
  outline: none;
  border: 1px solid var(--color-2);
  padding: 1rem 0;
  color: var(--color-2);
  font-weight: 600;
  transition: all 0.5s ease;
}
.carrier-form button:hover {
  cursor: pointer;
}
</style>
