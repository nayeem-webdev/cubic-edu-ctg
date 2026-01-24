import Hero from "../components/home/Hero";
import Achievement from "../components/home/Achievement";
import AboutSec from "../components/home/AboutSec";
import ServiceSec from "../components/home/ServiceSec";
import CountriesSec from "../components/home/CountriesSec";
import ContactSection from "../components/ContactSection";
import VisaSuccessSection from "../components/home/VisaSuccessSection";
import CoursesSection from "../components/CoursesSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Achievement />
      <AboutSec />
      <ServiceSec />
      <CountriesSec />
      <CoursesSection />
      <VisaSuccessSection />
      <ContactSection />
    </>
  );
};

export default Home;
