function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <img
        src="./images/cta-bg.jpg"
        alt="Modern office building"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
          Let's Work Together
        </p>

        <h2 className="mt-5 text-3xl font-bold text-white sm:text-5xl">
          Ready To Start Your Next Project?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-300">
          Tell us about your ideas and let our team help you build something
          powerful and meaningful.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-block rounded-md border border-amber-400 px-7 py-3 font-semibold text-amber-400 transition duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:text-black"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
export default CTA;
