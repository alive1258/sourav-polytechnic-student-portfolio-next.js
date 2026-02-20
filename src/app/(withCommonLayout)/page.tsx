import AboutMe from "@/src/components/UI/AboutMe/AboutMe";
import Contact from "@/src/components/UI/Contact/Contact";
import HeroSection from "@/src/components/UI/HeroSection/HeroSection";
import MySkills from "@/src/components/UI/MySkills/MySkills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <Contact />
    </>
  );
}
