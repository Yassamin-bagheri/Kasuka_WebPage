import { BriefcaseBusiness, Database, Gauge, ShieldCheck } from "lucide-react";

const heroFeatures = [
  {
    icon: BriefcaseBusiness,
    title: "Professional",
  },
  {
    icon: Database,
    title: "Data Driven",
  },
  {
    icon: Gauge,
    title: "High Performance",
  },
  {
    icon: ShieldCheck,
    title: "Secure Solutions",
  },
];
// hero

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black pt-20"
    >
      <img
        src="./images/hero-bg.jpg"
        alt="Modern architecture"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />

      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            Welcome To Kasuka
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
            Powerful Digital Solutions
            <br />
            For Your
            <span className="text-amber-400"> Business.</span>
          </h1>

          <p className="mt-6 flex flex-col leading-8 text-gray-300 sm:text-lg">
            We build modern, scalable and high-performance digital experiences<br/>
            that help businesses grow and succeed.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#services"
              className="rounded-md bg-amber-400 px-7 py-3 text-center font-semibold text-gray-900 transition duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-lg"
            >
              Explore Services
            </a>

            <a
              href="#portfolio"
              className="rounded-md border border-white/40 px-7 py-3 text-center font-semibold text-white transition duration-300 hover:border-amber-400 hover:text-amber-400"
            >
              View Portfolio
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {heroFeatures.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group border border-white/15 bg-black/20 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-amber-400 hover:bg-white/10"
              >
                <Icon
                  size={30}
                  className="mb-5 text-amber-400 transition duration-300 group-hover:scale-110"
                />

                <h3 className="font-semibold text-white">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
