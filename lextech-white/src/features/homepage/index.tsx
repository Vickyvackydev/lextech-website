import React from "react";
import Layout from "../../Layout";
import Hero from "../../ui/hero";

import Explore from "../../ui/explore";
import JoinUs from "../../ui/join-us";
import Testimonials from "../../ui/testimonials";
import Articles from "../../ui/articles";

function HomePage() {
  return (
    <Layout>
      <div className="lg:mt-16 mt-10">
        <Hero />
        <Explore />
        <JoinUs />
        <Testimonials />
        <Articles />
      </div>
    </Layout>
  );
}

export default HomePage;
