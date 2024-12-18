import AboutUs from "@/components/About/AboutUs";
import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import OurWork from "@/components/Portfolio/OurWork";
import OurServices from "@/components/Services/OurServices";
import Navbar from "@/components/shared/Nav/Navbar";
import TheTeam from "@/components/Team/TheTeam";

export default function Home() {
  return (
    <main>
      <Banner />
      <Navbar />
      <AboutUs />
      <OurServices />
      <OurWork />
      <TheTeam />
      <Contact />
    </main>
  );
}
