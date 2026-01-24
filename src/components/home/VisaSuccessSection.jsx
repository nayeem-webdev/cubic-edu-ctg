import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { TrendingUp, CircleCheckBig } from "lucide-react";

const VisaSuccessSection = () => {
  // Trigger animation every time it comes into view (or set triggerOnce: true)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const successData = [
    { country: "Canada", count: 250, color: "text-red-500" },
    { country: "Australia", count: 150, color: "text-secondary" }, // Green
    { country: "Europe", count: 120, color: "text-primary" }, // Blue
    { country: "UK", count: 100, color: "text-purple-500" },
    { country: "USA", count: 50, color: "text-amber-500" },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-slate-50 to-secondary/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp size={16} />
            <span>Our Success Story</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Proven <span className="text-secondary">Visa Success</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Over the years, we've helped 670+ students achieve their dreams with
            successful visa approvals
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {successData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 group"
            >
              <div className="mb-4">
                <CircleCheckBig className="w-12 h-12 mx-auto text-secondary group-hover:scale-110 transition-transform" />
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
            <strong className="text-secondary font-bold ml-1">
              ethical guidance
            </strong>
            , we continue to be the trusted choice for students in Chittagong
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisaSuccessSection;
