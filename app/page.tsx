import homeScr from "/public/5.jpg";
import Hero from "./components/hero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};
export default function Page() {
  return (
    <Hero
      imageUrl={homeScr}
      altTxt="Home"
      content="Welcome to our website"
    ></Hero>
  );
}
