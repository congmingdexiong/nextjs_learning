import React from "react";
import Hero from "../components/hero";
import performanceSrc from "/public/1.jpg";
export default function Performance() {
  return (
    <Hero
      imageUrl={performanceSrc}
      altTxt="Performance"
      content="Welcome to our Performance"
    ></Hero>
  );
}
