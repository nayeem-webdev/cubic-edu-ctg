const SectionTitle = ({ title, titleColor, subtitle, color }) => {
  return (
    <div className="max-w-3xl px-4 mb-10 mx-auto">
      <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-center">
        {title} <span className={`text-${color}`}>{titleColor}</span>
      </h2>
      {/* Accent line */}
      <p className="text-lg text-slate-600 leading-relaxed text-center">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
