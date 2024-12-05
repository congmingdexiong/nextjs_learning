import React from "react";
import scaleSrc from "/public/4.jpg";
import Hero from "../components/hero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scale",
};
export default function Scale() {
  return (
    <Hero
      imageUrl={scaleSrc}
      altTxt="Scale"
      content="Welcome to our Scale"
    ></Hero>
  );
}
