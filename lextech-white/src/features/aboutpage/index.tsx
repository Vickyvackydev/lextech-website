import React from "react";
import Layout from "../../Layout";
import AboutHero from "../../ui/about-hero";
import Justice from "../../ui/justice";
import Solutions from "../../ui/solutions";
import Leaders from "../../ui/leaders";
import JoinUs from "../../ui/join-us";

function AboutPage() {
  return (
    <Layout>
      <div className="mt-16">
        <AboutHero />
        <Justice />
        <Solutions />
        <Leaders />
        <JoinUs />
      </div>
    </Layout>
  );
}

export default AboutPage;
