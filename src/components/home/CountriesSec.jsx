import CountryCard from "../../ui/CountryCard";
import SectionTitle from "../../ui/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import countryData from "../../assets/data/countryData";
import { ArrowRightIcon, Earth, Globe } from "lucide-react";
import Button from "../../ui/Button";

const CountriesSec = () => {
  return (
    <div className="bg-gray-50">
      <div className="py-28 px-4 max-w-7xl mx-auto">
        <SectionTitle
          topTitle={"Study Destinations"}
          icon={Earth}
          title="Gain acceptance to a"
          titleColor="top-tier global university."
          subtitle="Cubic Education partners with top-ranked universities and colleges across 10+ countries, helping students make confident, well-informed study abroad decisions."
          color="primary"
        />

        <div className="relative">
          <div className="overflow-hidden px-2">
            <Swiper
              slidesPerView="auto"
              spaceBetween={10}
              centeredSlides={false}
              grabCursor={true}
              autoplay={{
                delay: 800,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay]}
              className="countries-swiper"
            >
              {countryData.map((item) => (
                <SwiperSlide key={item.id} className="w-auto!">
                  {" "}
                  {/* Important: !w-auto */}
                  <div className="px-2">
                    {" "}
                    {/* Padding around each card */}
                    <CountryCard data={item} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="mt-8 flex mx-auto justify-center">
          <Button
            to="/services"
            variant="primary"
            icon={<Globe />}
            iconPosition="left"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CountriesSec;
