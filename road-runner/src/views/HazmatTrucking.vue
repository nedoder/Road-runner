<script setup></script>
<template>
  <main>
    <div class="service-page">
      <div class="service-page-title">
        <h1>Hazmat <span class="highlight">trucking</span></h1>
      </div>
    </div>
    <div class="service-flex">
      <div class="service-sections">
        <div class="service-section">
          <img src="../assets/hazmat-img.webp" />
          <h2>Expert hazmat trucking transport</h2>
          <p>
            Hazmat trucking is the transport of hazardous materials, which could be
            anything from hazardous gasses or poisons to waste or radioactive
            materials. The cargo could cause harm either on its own or when it comes
            into contact with air, flame, water, or other chemicals. Safe driving is
            always a priority, and it's critically important in hazmat trucking.
            Drivers hauling a hazmat load have the added stress of ensuring they are
            following the additional regulations for this type of cargo. Plus, they
            may need to avoid certain routes to detour around hazmat-restricted
            areas. Super Ego Logistics has hazmat-certified drivers and trucks in
            our network ready to move your hazardous materials to their destination
            and fleet managers trained in the most optimized routing that can make
            it easier for drivers.
          </p>
        </div>
        <div class="service-section">
          <h3>HAZMAT TRUCKING OFFER</h3>
          <ul>
            <li>24/7 Tracking</li>
            <li>Certified and Compliant Drivers</li>
            <li>TSA/ TWIC drivers</li>
            <li>Van/Reefer/Flatbed equipment</li>
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
  background: url("../assets/hazmatcover.webp");
  background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
}
</style>
