<script setup></script>
<template>
  <main>
    <div class="service-page">
      <div class="service-page-title">
        <h1>Expedited <span class="highlight">shipping</span></h1>
      </div>
    </div>
    <div class="service-flex">
      <div class="service-sections">
        <div class="service-section">
          <img src="../assets/expedited-img.webp" />
          <h2>Faster than standard</h2>
          <p>
            Expedited shipping service is a type of shipping that involves using
            faster methods to transport goods. This can include using a faster mode
            of transportation, such as shipping the goods directly to the customer
            instead of going through a retailer first. Super Ego Logistics has
            developed a network for drivers to pick up and deliver expedited
            shipments as quickly as possible. Our networks consist of all types of
            equipment with teams, box trucks, cargo vans, etc.
          </p>
        </div>
        <div class="service-section">
          <h3>EXPEDITED SHIPPING OFFER</h3>
          <ul>
            <li>Door to door</li>
            <li>Final Mile</li>
            <li>Digital tracking</li>
            <li>24/7 Tracking</li>
            <li>Proactive Communication</li>
          </ul>
        </div>
      </div>
      <div class="service-links">
        <div class="service-link">
          <h4>Services</h4>
          <router-link to="full-truckload" exact>Full Truck Load</router-link>
          <router-link to="drayage-service" exact>Drayage</router-link>
          <router-link to="hazmat-trucking" exact>Hazmat</router-link>
          <router-link to="expedited-shipping" exact>Expedited</router-link>
          <router-link to="ltl-shipping" exact>Ltl</router-link>
        </div>
        <div class="service-contact">
          <h4>Need more information?</h4>
          <p>Feel free to drop us a message.</p>
          <router-link to="contact">Contact us</router-link>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.service-page {
  background: url("../assets/expeditedcover.webp");
  background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
}
</style>
