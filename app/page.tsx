import homeScr from "/public/5.jpg";
import Hero from "./components/hero";
export default function Page() {
  return (
    <Hero
      imageUrl={homeScr}
      altTxt="Home"
      content="Welcome to our website"
    ></Hero>
  );
}
