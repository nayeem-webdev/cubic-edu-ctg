import React from "react";
import SectionTitle from "../../ui/SectionTitle";

const AboutSec = () => {
  return (
    <div className="py-28 px-4 max-w-7xl mx-auto">
      <SectionTitle
        title="About"
        titleColor="Cubic Education"
        subtitle="Chittagong's most established and trusted student consultancy since 2012"
        color="primary"
      />
      <div className="flex flex-col lg:flex-row gap-8">
        <p className="w-full lg:w-1/2 leading-relaxed">
          <strong>Cubic Education</strong> is one of Chittagong's most
          established and trusted student consultancy and IELTS, PTE, TOEFL &
          Cambridge English preparation centers, proudly serving students since
          2012. With over a decade of experience, we have built a strong
          reputation for delivering ethical guidance, expert training, and
          successful study-abroad outcomes.
          <br /> Founded and led by <strong>CEO Mohammad Sarfaraj Khan</strong>,
          Cubic Education combines local insight with international expertise.
          Our leadership ensures that students receive up-to-date, globally
          aligned counseling that meets the evolving standards of international
          education and visa requirements.
        </p>
        <p className="w-full lg:w-1/2 leading-relaxed">
          We are a <strong className="text-[#23085a]">British Council</strong>{" "}
          partner, reflecting our commitment to quality, professionalism, and
          globally recognized standards in IELTS preparation. Our IELTS faculty
          includes highly qualified instructors, with two of our senior teachers
          being graduates from Norway and the United Kingdom, bringing
          international teaching methodologies and real-world academic insight
          into every classroom. As a result, our students consistently achieve
          high IELTS scores, enabling them to meet the entry requirements of top
          global institutions.
        </p>
      </div>
      <div className="max-w-4xl mx-auto p-6 border-2 border-primary rounded-2xl bg-primary/20 mt-8 hover:scale-105 transition-all duration-400">
        <h1 className="text-medium text-4xl font-bold text-center mb-2">
          Our Mission
        </h1>
        <p className="text-slate-700">
          To empower students with{" "}
          <span className="font-medium text-primary">honest guidance</span>,{" "}
          <span className="font-medium text-primary">
            world-class preparation
          </span>
          , and{" "}
          <span className="font-medium text-primary">end-to-end support</span>,
          enabling them to access global education opportunities with
          confidence. We are committed to maintaining transparency, academic
          integrity, and student-first counseling while delivering measurable
          results in IELTS performance and visa success.
        </p>
      </div>
    </div>
  );
};

export default AboutSec;
