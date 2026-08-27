import {
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Globe2,
  MonitorSmartphone,
  Shield,
} from "lucide-react";

import SectionTitle from "./SectionTitle";

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Business Strategy",
    description:
      "Strategic digital solutions designed for sustainable business growth.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Transform complex information into valuable business insights.",
  },
  {
    icon: Globe2,
    title: "Digital Marketing",
    description:
      "Reach the right audience through effective digital strategies.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web Design",
    description:
      "Beautiful and responsive interfaces designed for every screen.",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Protect your business and important digital assets.",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Fast, scalable and maintainable applications for modern businesses.",
  },
];

function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Services"
          title="Explore Our Services"
          description="We provide a complete range of modern digital solutions for businesses of different sizes."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center bg-amber-400 text-gray-900 transition duration-300 group-hover:rotate-3 group-hover:scale-110">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
