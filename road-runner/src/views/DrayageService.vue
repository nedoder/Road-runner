<script setup></script>
<template>
  <main>
    <div class="service-page">
      <div class="service-page-title">
        <h1>Drayage <span class="highlight">service</span></h1>
      </div>
    </div>
    <div class="service-flex">
      <div class="service-sections">
        <div class="service-section">
          <img src="../assets/3.jpg" />
          <h2>
            Whether your import or export shipment needs to move to or from a port
            or warehouse, we will find the right solution.
          </h2>
          <p>
            Super Ego Logistics Drayage department assists its customers with
            managing complicated drayage solutions. Our teams provide arrivals,
            quoting, transloading, scheduling, and track and trace by managing from
            port to warehouse.
          </p>
        </div>
        <div class="service-section">
          <h3>DRAYAGE SERVICE OFFER</h3>
          <ul>
            <li>24/7 Tracking</li>
            <li>Warehouse Solutions</li>
            <li>Same Day Service</li>
            <li>Contracts with Railroads</li>
            <li>Dedicated Capacity</li>
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
