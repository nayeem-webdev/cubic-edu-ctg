import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { TrendingUp, CircleCheckBig } from "lucide-react";
import SectionTitle from "../../ui/SectionTitle";

const VisaSuccessSection = () => {
  // Trigger animation every time it comes into view (or set triggerOnce: true)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const successData = [
    { country: "Canada", count: 250, color: "text-[#D80621]" },
    { country: "Australia", count: 150, color: "text-[#012169]" },
    { country: "Europe", count: 120, color: "text-[#FFCC00]" },
    { country: "UK", count: 100, color: "text-[#012169]" },
    { country: "USA", count: 50, color: "text-[#B31942]" },
  ];

  return (
    <div ref={ref} className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto py-28 px-4">
        <SectionTitle
          topTitle={"Our Success Story"}
          icon={TrendingUp}
          title="Proven"
          titleColor=" Visa Success"
          subtitle="Over the years, we've helped 670+ students achieve their dreams with
            successful visa approvals."
          color="primary"
        />
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {successData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 group"
            >
              <div className="mb-4">
                <CircleCheckBig className="w-12 h-12 mx-auto text-primary group-hover:scale-110 transition-transform" />
              </div>

              <div className={`text-4xl font-bold mb-2 ${item.color}`}>
                {inView ? (
                  <CountUp end={item.count} duration={2.5} suffix="+" />
                ) : (
                  "0+"
                )}
              </div>

              <div className="text-slate-700 font-semibold text-lg">
                {item.country}
              </div>
              <div className="text-slate-500 text-sm mt-1">Visas Approved</div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 text-lg">
            With a{" "}
            <strong className="text-primary font-bold">
              strong track record
            </strong>{" "}
            and
            <strong className="text-primary font-bold ml-1">
              ethical guidance
            </strong>
            , we continue to be the trusted choice for students in Chittagong
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisaSuccessSection;
