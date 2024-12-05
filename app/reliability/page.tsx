import React from "react";
import Hero from "../components/hero";
import reliabilitySrc from "/public/2.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliability",
};
export default function Reliability() {
  return (
    <Hero
      imageUrl={reliabilitySrc}
      altTxt="Reliability"
      content="Welcome to our Reliability"
    ></Hero>
  );
}
