const SectionTitle = ({ title, titleColor, subtitle }) => {
  return (
    <div className="max-w-2xl px-4 py-10 mx-auto">
      <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:text-4xl text-center">
        {title} <span className="text-secondary">{titleColor}</span>
      </h2>
      {/* Accent line */}
      <p className="text-lg text-slate-600 leading-relaxed text-center">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
