import CountryCard from "../../ui/CountryCard";
import SectionTitle from "../../ui/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const CountriesSec = () => {
  return (
    <div className="py-28 px-4 max-w-7xl mx-auto">
      <SectionTitle
        title="Gain acceptance to a"
        titleColor="top-tier global university."
        subtitle="Cubic Education partners with top-ranked universities and colleges across 10+ countries, helping students make confident, well-informed study abroad decisions."
        color="secondary"
      />

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
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
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 80,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 100,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CountryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CountryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CountryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CountryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CountryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CountryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CountryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CountryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CountryCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CountriesSec;
