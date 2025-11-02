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
import Head from "next/head";
import SecondLastSection from "@/components/ui/secondlast";

const Body = () => {
  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>life tech nepal</title>
        <meta
          name="description"
          content="Life Tech Nepal provides professional web development, software solutions, and IT services in Nepal. We build fast, secure, and scalable digital solutions for your business."
        />
        <meta
          name="keywords"
          content="life tech, life tech pvt ltd, Life Tech Nepal, Web Development Nepal, IT Services Nepal, Software Development, Digital Solutions, Tech Company Nepal"
        />
        <meta name="author" content="Life Tech Nepal" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.lifetech.com.np" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="life tech nepal" />
        <meta
          property="og:description"
          content="Professional web development and IT services in Nepal. Build fast, secure, and scalable digital solutions with Life Tech Nepal."
        />
        <meta property="og:url" content="https://www.lifetech.com.np" />
        <meta property="og:site_name" content="Life Tech Nepal" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Life Tech Nepal | Web & IT Solutions"
        />
        <meta
          name="twitter:description"
          content="Professional IT services and web development company in Nepal."
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:creator" content="@lifetechnepal" />

        {/* Icons */}
        <link rel="icon" href="/logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <div>
        <HeroSection />
        <SecondLastSection />
        <AboutLifeTech />
        <TrainingPrograms />
        <UpcomingEvents />
        <ServicesSection />
        <LifeTechPage />
        <LetsConnect />
        <OurPartners />
        <StatsSection />
      </div>
    </>
  );
};

export default Body;
