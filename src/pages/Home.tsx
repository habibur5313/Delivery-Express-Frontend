import HeroSection from "@/components/modules/Home/HeroSection";
import { About } from "./About";
import { Contact } from "./Contact";

export const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <About></About>
      <Contact></Contact>
    </div>
  );
};
