import { Database, Gauge, Headphones, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Modern Technology",
    description: "We use reliable and modern technologies for every project.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Solutions",
    description:
      "Security is considered from the beginning of the development process.",
  },
  {
    icon: Gauge,
    title: "High Performance",
    description:
      "Fast loading and optimized experiences across different devices.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our team is ready to support you throughout your digital journey.",
  },
];

function Features() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 space-y-8 lg:order-1">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="group flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-amber-100 text-amber-600 transition duration-300 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-black">
                  <Icon size={26} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="order-1 overflow-hidden rounded-lg lg:order-2">
          <img
            src="./images/features.jpg"
            alt="Creative team working"
            className="h-[350px] w-full object-cover transition duration-700 hover:scale-105 lg:h-[600px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
