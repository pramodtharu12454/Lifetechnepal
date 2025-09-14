import React from "react";
import HeroSection from "../components/ui/home";
import AboutLifeTech from "@/components/ui/aboutus";
import TrainingPrograms from "@/components/ui/tranning";
import LetsConnect from "@/components/ui/expert";
import OurPartners from "@/components/ui/OurPartners";
import ServicesSection from "@/components/homeservices/ourservices";
import UpcomingEvents from "@/components/event/event";
import StatsSection from "@/components/ui/projectcount";
import LifeTechPage from "@/components/ui/other";

const body = () => {
  return (
    <div>
      <HeroSection />
      <AboutLifeTech />
      <TrainingPrograms />
      <UpcomingEvents />
      <ServicesSection />
      <LifeTechPage />
      <LetsConnect />
      <OurPartners />
      <StatsSection />

      {/* Add more sections as needed */}
    </div>
  );
};

export default body;
