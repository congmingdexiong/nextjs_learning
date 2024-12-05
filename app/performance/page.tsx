import React from "react";
import Hero from "../components/hero";
import performanceSrc from "/public/1.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance",
};

export default function Performance() {
  return (
    <Hero
      imageUrl={performanceSrc}
      altTxt="Performance"
      content="Welcome to our Performance"
    ></Hero>
  );
}
