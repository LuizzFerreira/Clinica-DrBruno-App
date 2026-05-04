import Hero from "../components/Hero";
import Showcase from "../components/Showcase";
import ShowcaseSecond from "../components/ShowcaseSecond";
import Team from "../components/Team";
import Depoimentos from "../components/Depoimentos";
import Visit from "../components/Visit";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <Team />
      <Depoimentos />
      <ShowcaseSecond />
      <Visit />
    </>
  );
}