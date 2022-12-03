<script setup></script>
<template>
  <div class="about">
    <img src="../assets/about.jpg" />
    <div class="about-info">
      <h2><span class="about-title">about company</span>Unique freight<span class="highlight"> brokerage </span>company</h2>
      <p>
        <strong>
          Super Ego connects customers with shipping needs with carriers that have the available capacity and service offerings.
        </strong> 
        Super Ego Logistics specializes in FTL, LTL, drayage, intermodal,
        hazmat, expedited, temperature controlled, and volume partials. Super Ego Logistics works with customers in all types of industries such as food and beverage, paper, and plastics.
      </p>
      <router-link to="/about" exact>More about us</router-link>
    </div>
  </div>
</template>
<style scoped>

.about {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  padding: 4rem 0;
}

.about img {
  width: 50%;
  object-fit: contain;
  height: auto;
}
.about-info {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem 0;
  align-items: center;
  column-gap: 1rem;
  background-image: url("../assets/usa.webp");
  background-position: center;
  background-size: contain;
  -webkit-background-size: contain;
  background-repeat: no-repeat;
}


.about-title {
  position: absolute;
  top: -3rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--color-1);
  font-weight: 600;
}

.about-info h2 {
  font-size: 3rem;
}

.about-info strong {
  font-weight: 600;
  display: block;
  padding: 1rem 0;
}
</style>
