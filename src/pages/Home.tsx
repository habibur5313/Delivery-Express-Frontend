import HeroSection from "@/components/modules/Home/HeroSection";
import { About } from "./About";
import { Contact } from "./Contact";
import LocationMap from "@/components/modules/Home/LocationMap";

export const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <About></About>
      <LocationMap></LocationMap>
      <Contact></Contact>
    </div>
  );
};
