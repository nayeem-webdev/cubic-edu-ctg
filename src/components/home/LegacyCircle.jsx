const LegacyCircle = () => {
  return (
    <div className="relative py-32 bg-white overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white"></div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Since 2012
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            A Decade of{" "}
            <span className="text-blue-600">Language Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming aspirations into achievements across 42 countries
          </p>
        </div>

        {/* Main Circle */}
        <div className="relative w-96 h-96 mx-auto">
          {/* Central Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border-4 border-blue-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl font-bold text-blue-600">2012</div>
                <div className="text-lg text-gray-600 mt-2">Our Beginning</div>
              </div>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <div className="text-4xl font-bold text-gray-900">12,000+</div>
            <div className="text-gray-600">Students Trained</div>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <div className="text-4xl font-bold text-green-600">9.2</div>
            <div className="text-gray-600">Avg IELTS Score</div>
          </div>

          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <div className="text-4xl font-bold text-purple-600">115</div>
            <div className="text-gray-600">Avg TOEFL Score</div>
          </div>

          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <div className="text-4xl font-bold text-amber-600">89</div>
            <div className="text-gray-600">Avg PTE Score</div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32">
          {[
            { label: "Countries Reached", value: "42+" },
            { label: "Success Rate", value: "98%" },
            { label: "Expert Trainers", value: "50+" },
            { label: "Years Experience", value: "12" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LegacyCircle;
