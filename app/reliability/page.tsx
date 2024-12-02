import React from "react";
import Hero from "../components/hero";
import reliabilitySrc from "/public/2.jpg";

export default function Reliability() {
  return (
    <Hero
      imageUrl={reliabilitySrc}
      altTxt="Reliability"
      content="Welcome to our Reliability"
    ></Hero>
  );
}
