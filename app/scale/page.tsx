import React from "react";
import scaleSrc from "/public/4.jpg";
import Hero from "../components/hero";
export default function Scale() {
  return (
    <Hero
      imageUrl={scaleSrc}
      altTxt="Scale"
      content="Welcome to our Scale"
    ></Hero>
  );
}
