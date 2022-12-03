<script setup></script>
<template>
  <div class="partner-list">
    <div class="partner-main">
      <span class="join">JOIN THE LIST</span>
      <h2>Partners that <span class="highlight">trust</span> us</h2>
      <div class="partners">
        <img src="../assets/logo.svg" />
        <img src="../assets/logo.svg" />
        <img src="../assets/logo.svg" />
        <img src="../assets/logo.svg" />
        <img src="../assets/logo.svg" />
        <img src="../assets/logo.svg" />
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
  color: var(--color-1);
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
