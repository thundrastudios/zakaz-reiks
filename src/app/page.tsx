import ArtcilesBottom from "@/components/ArtcilesBottom";
import Articles from "@/components/Articles";
import Forms from "@/components/Forms";
import Hero from "@/components/Hero";
import HeroAbout from "@/components/HeroAbout";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroAbout />
      <Articles />
      <ArtcilesBottom />
      <Forms />
    </>
  );
}
