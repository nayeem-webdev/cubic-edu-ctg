import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { GraduationCap, Award } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full bg-primary/10">
      <div className="pt-36 pb-28 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Section: Content */}
        <div className=" lg:max-w-lg w-full flex flex-col gap-6">
          <p className="flex gap-2 px-4 py-2 self-start font-medium text-secondary bg-secondary/10 rounded-full items-center">
            <SlBadge />
            Proudly Serving Students Since 2012
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Your Gateway to
            <span className="text-secondary block mt-2">Global Education</span>
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed">
            Chittagong's most trusted education consultancy. We've helped over
            <strong className="text-secondary"> 670+ students </strong>
            achieve their dreams of studying abroad with expert guidance.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="group inline-flex h-14 items-center justify-center gap-2 rounded-md bg-secondary px-8 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-secondary/90 hover:shadow-xl">
              Get Free Consultation
              <FaArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="inline-flex h-14 items-center justify-center rounded-md border-2 border-secondary px-8 text-lg font-semibold text-secondary transition-all duration-300 hover:bg-secondary/5">
              View Courses
            </button>
          </div>
        </div>

        {/* Right Section: Visuals */}
        <div className=" relative p-22 lg:block">
          <div className="relative">
            {/* Central Student Image Layer */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="absolute -z-10 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" />
              <img
                src="https://i.ibb.co.com/Fbc1hkdC/Hero-image.png"
                alt="Successful Graduate"
                className="h-auto w-full max-w-md animate-float drop-shadow-2xl transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* 2. COUNTRY CARDS */}
            {/* CANADA CARD */}
            <div className="absolute -left-15 top-10 animate-bounce z-20 group hidden sm:block">
              <div className="relative flex items-center gap-4 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-xl border-l-4 border-[#d52b1e] overflow-hidden min-w-36">
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500"
                  style={{
                    backgroundImage:
                      "url('https://i.ibb.co.com/8gL99WKj/005-canada.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#d52b1e] text-white shadow-md">
                    <GraduationCap size={20} />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">
                      Study in
                    </span>
                    <span className="text-md font-black text-slate-900 tracking-tighter">
                      CANADA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* AUSTRALIA CARD */}
            <div className="absolute -right-20 top-30 animate-bounce z-20 group hidden sm:block [animation-delay:.5s]">
              <div className="relative flex items-center gap-4 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-xl border-l-4 border-[#00008b] overflow-hidden min-w-36">
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500"
                  style={{
                    backgroundImage:
                      "url('https://i.ibb.co.com/Kx9t58TP/002-flag.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#00008b] text-white shadow-md">
                    <GraduationCap size={20} />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">
                      Study in
                    </span>
                    <span className="text-md font-black text-slate-900 tracking-tighter">
                      AUSTRALIA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* UK CARD */}
            <div className="absolute -left-12 bottom-20 animate-bounce z-20 group hidden sm:block [animation-delay:0.7]">
              <div className="relative flex items-center gap-4 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-xl border-l-4 border-[#00247d] overflow-hidden min-w-36">
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500"
                  style={{
                    backgroundImage:
                      "url('https://i.ibb.co.com/mCrmkVmx/003-united-kingdom.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#00247d] text-white shadow-md">
                    <GraduationCap size={20} />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">
                      Study in
                    </span>
                    <span className="text-md font-black text-slate-900 tracking-tighter">
                      UK
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* MALAYSIA CARD */}
            <div className="absolute -right-12 bottom-15 animate-bounce z-20 group hidden sm:block [animation-delay:0.7]">
              <div className="relative flex items-center gap-4 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-xl border-l-4 border-[#cc0000] overflow-hidden min-w-36">
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500"
                  style={{
                    backgroundImage:
                      "url('https://i.ibb.co.com/JWk6pDCg/004-flag-1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#cc0000] text-white shadow-md">
                    <GraduationCap size={20} />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">
                      Study in
                    </span>
                    <span className="text-md font-black text-slate-900 tracking-tighter">
                      MALAYSIA
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Success Stories Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-linear-to-r from-emerald-600 to-emerald-500 px-8 py-3 text-white shadow-2xl z-20">
              <div className="flex items-center space-x-2 font-bold text-lg">
                <Award className="h-5 w-5" />
                <span>670+ Success Stories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
