import React from "react";
import HeroSearch from "../Components/Home/HeroSearch";
import FeaturedVehicles from "../Components/Home/FeaturedVehicles";
import CTASection from "../Components/Home/CTASection";
import Testimonials from "../Components/Home/Testimonials";
import Newsletter from "../Components/Home/Newsletter";

const Home = () => {
  return (
    <>
      <HeroSearch />
      <FeaturedVehicles />
      <CTASection />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Home;
