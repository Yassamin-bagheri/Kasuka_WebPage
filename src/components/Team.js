import SectionTitle from "./SectionTitle";

const team = [
  {
    id: 1,
    name: "Walter White",
    role: "Chief Executive Officer",
    image:
      "./images/team-1.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    image:
      "./images/team-2.jpg",
  },
  {
    id: 3,
    name: "William Anderson",
    role: "CTO",
    image:
      "./images/team-3.jpg",
  },
  {
    id: 4,
    name: "Amanda Jepson",
    role: "Accountant",
    image:
      "./images/team-4.jpg",
  },
];

function Team() {
  return (
    <section
      id="team"
      className="section-padding bg-gray-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Team"
          title="Meet Our Team"
          description="A group of passionate professionals ready to build great digital experiences."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.id}
              className="group overflow-hidden border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-gray-900">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;