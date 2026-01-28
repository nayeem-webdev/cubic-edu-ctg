import Hero from "../components/home/Hero";
import Achievement from "../components/home/Achievement";
import AboutSec from "../components/home/AboutSec";
import ServiceSec from "../components/home/ServiceSec";
import CountriesSec from "../components/home/CountriesSec";
import ContactSection from "../components/ContactSection";
import VisaSuccessSection from "../components/home/VisaSuccessSection";
import CoursesSection from "../components/home/CoursesSection";
import LegacyCircle from "../components/home/LegacyCircle";
import GlobalScoreboard from "../components/home/GlobalScoreboard";

const Home = () => {
  return (
    <>
      <Hero />
      <Achievement />
      <AboutSec />
      <ServiceSec />
      <GlobalScoreboard />
      <CountriesSec />
      {/* <VisaSuccessSection /> */}
      <CoursesSection />
      <ContactSection />
    </>
  );
};

export default Home;
