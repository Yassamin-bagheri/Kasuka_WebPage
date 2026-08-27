function SectionTitle({
  subtitle,
  title,
  description,
  center = false,
}) {
  return (
    <div
      className={`mb-12 max-w-2xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
        {subtitle}
      </p>

      <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;