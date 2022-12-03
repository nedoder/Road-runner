<script setup></script>
<template>
  <main>
    <div class="service-page">
      <div class="service-page-title">
        <h1>LTL <span class="highlight">shipping</span></h1>
      </div>
    </div>
    <div class="service-flex">
      <div class="service-sections">
        <div class="service-section">
          <img src="../assets/3.jpg" />
          <h2>Dry Van, Reefer, Flatbed</h2>
          <p>
            Less than truckload freight shipping (LTL) is used for the
            transportation of small freight or when freight doesn't require the use
            of an entire trailer. This shipping method can be used when freight
            weighs between 150 and 15,000 pounds. Super Ego Logistics has
            consolidation centers in major metropolitan cities to combine the
            freight, save on cost and be able to get nationwide converge.
          </p>
        </div>
        <div class="service-section">
          <h3>LTL FREIGHT SHIPPING OFFER</h3>
          <ul>
            <li>Trusted Carriers</li>
            <li>Competitive Rates</li>
            <li>Real-time tracking</li>
            <li>Dedicated support</li>
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
<style scoped></style>
