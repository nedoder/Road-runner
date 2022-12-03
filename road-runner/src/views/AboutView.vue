<script setup>
import PartnerList from '../components/PartnerList.vue';
</script>

<template>
  <main>
    <div class="about-wrapper">
      <div class="about-title">
        <h1>About <span class="highlight">Road runner</span></h1>
      </div>
    </div>
    <div class="about-intro">
      <img src="../assets/about-care.jpg" />
      <div class="about-info">
        <h2>
          <span class="about-span">We care more</span>
          Unique freight brokerage <span class="highlight">service</span>
        </h2>
        <p>
          Our company began in 2019. with one vision in mind- to provide the
          best service to our customers. From coast to coast, Super Ego connects
          businesses with carriers who transport goods effectively and
          efficiently. Super Ego Logistics is a unique freight brokerage that
          focuses on over-the-road transport. 
          <strong>
            Through a go-to-market strategy
          model, Super Ego is changing the environment of how traditional
          freight brokerages work by delivering operational excellence and 24/7
          service to scale.
          </strong>
          We specializes in FTL, LTL, drayage, intermodal,
          hazmat, expedited, temperature controlled, and volume partials. Super
          Ego Logistics works with customers in all types of industries such as
          food and beverage, paper, and plastics.
        </p>
      </div>
    </div>
    <div class="about-mission">
      <div class="mission-info">
        <h2>
          <span class="about-span">
            OUR MISSION IS TO GIVE YOU GOOD SERVICES
          </span>
          Our <span class="highlight">promises</span> to you
        </h2>
        <p>
          We will provide transportation solutions that align with your supply
          chain goals and needs, whether a spot shipment, next day,
          project-based, or contracted freight.
        </p>
        <strong>WHAT YOU SHOULD KNOW ABOUT ROAD RUNNER:</strong>
        <ul>
          <li>Dedicated National Fleets</li>
          <li>Real-time 24/7 tracking</li>
          <li>Certified and Compliant Drivers</li>
          <li>TSA/ TWIC drivers</li>
          <li>97% On-Time Pickup and Delivery</li>
          <li>Dedicated Operations Support</li>
        </ul>
        <router-link to="/carrier" class="join-link" exact>
          Join us today!
        </router-link>
      </div>
      <img src="../assets/about-mission.jpg" />
    </div>
    <div class="partner-list">
      <PartnerList />
    </div>
  </main>
</template>

<style>
.about-wrapper {
  height: 70vh;
  background: url("../assets/about-us.jpg");
  background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.about {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
  padding: 2rem 0;
}

.about-title {
  position: absolute;
  width: 80%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 10%);
  padding: 7rem 0;
}

.about-title h1 {
  font-size: 3rem;
  color: var(--white);
}

.about-info,
.about-mission {
  font-size: 1.1rem;
}

.about-info h2,
.about-mission h2 {
  font-size: 3rem;
}

.about-span {
  position: absolute;
  top: -3rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--color-1);
  font-weight: 600;
}

.about-info strong,
.about-mission strong {
  display: block;
  font-weight: 600;
  padding: 1rem 0;
}
.about-intro,
.about-mission {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
  padding: 5rem 0;
}

.about-intro img,
.about-mission img {
  max-width: 50%;
}

.about-mission ul {
  padding: 1rem 0 2rem 0;
  list-style: none;
}

.about-mission ul li::before {
  content: "\274D";
  color: var(--color-2);
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-right: 1rem;
}

.join-link {
  padding: 1rem;
  border: 1px solid var(--color-2);
  color: var(--color-2);
}

.join-link:hover {
  cursor: pointer;
}
</style>
