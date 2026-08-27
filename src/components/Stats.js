import { BriefcaseBusiness, Clock3, Headphones, Users } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "232",
    label: "Happy Clients",
  },
  {
    icon: BriefcaseBusiness,
    number: "521",
    label: "Projects",
  },
  {
    icon: Headphones,
    number: "1463",
    label: "Hours Of Support",
  },
  {
    icon: Clock3,
    number: "24",
    label: "Hours Availability",
  },
];

function Stats() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="flex items-center gap-5 border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon size={38} className="shrink-0 text-amber-500" />

              <div>
                <p className="text-3xl font-bold text-gray-900">
                  {stat.number}
                </p>

                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Stats;
