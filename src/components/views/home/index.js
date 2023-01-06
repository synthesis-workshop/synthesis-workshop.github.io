import React from "react";

import Hero from "../hero";
import About from "../about";
import Counts from "../counts";
import Videos from "../videos";
import EpisodeList from "../episode-list";
import Downloads from "../downloads";
import Contact from "../contact";
import Footer from "../footer";
import TwSymposium from "../tw-symposium";

export default () => {
  return (
    <>
      <Hero />

      <main id="main">
        <About />
        <Counts />
        <TwSymposium />
        <Videos />
        <EpisodeList />
        <Downloads />
        <Contact />
      </main>

      <Footer />
    </>
  );
};
