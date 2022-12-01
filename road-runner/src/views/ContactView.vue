<script setup></script>

<template>
  <main>
    <div>
      <img src="../assets/logo.svg" />
      <h2>Contact Us</h2>
    </div>
    <div>
      <h3>Contact info</h3>
      <p>677 N. Larch Ave Elmhurst IL 60126</p>
      <p>(312) 796-6668</p>
      <p>info@superegologistics.com</p>
    </div>
    <div>
      <h3>TELL US WHAT YOU'RE LOOKING FOR</h3>
      <input type="text" placeholder="First name" />
      <input type="text" placeholder="Last name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />
      <textarea placeholder="Message"></textarea>
      <button>Submit</button>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
