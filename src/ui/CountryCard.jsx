import React from "react";

const CountryCard = () => {
  const imageUrl =
    "https://images.pexels.com/photos/5707652/pexels-photo-5707652.jpeg?_gl=1*w2iqj0*_ga*ODUzMTExNTE2LjE3Njg5OTcyODk.*_ga_8JE65Q40S6*czE3Njg5OTcyODgkbzEkZzEkdDE3Njg5OTc2NDEkajEkbDAkaDA.";

  return (
    <div
      className="relative w-80 h-125 overflow-hidden rounded-xl shadow-lg flex flex-col justify-end"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

      {/* Bottom 35% - Content with Backdrop Blur */}
      <div className="relative h-[40%] w-full backdrop-blur-xs bg-linear-to-t from-black/70 via-black/50 to-transparent p-5 flex flex-col justify-end text-white">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Australia</h2>

          <div className="text-sm space-y-2">
            <div className="flex justify-between items-center">
              <span className="opacity-90">Living:</span>
              <span className="font-semibold">$1,000 - $1,500/month</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="opacity-90">Tuition:</span>
              <span className="font-semibold">$10,000 - $18,000/year</span>
            </div>
          </div>

          <button className="w-full py-3 bg-white/30 backdrop-blur-xl text-white font-semibold rounded-lg hover:bg-black/30 transition-colors mt-2">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
