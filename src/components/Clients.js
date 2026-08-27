const clients = [
  "myob",
  "BELIMO",
  "LifeGroups",
  "Lilly",
  "citrus",
];

function Clients() {
  return (
    <section className="border-y border-gray-100 bg-gray-50 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center sm:grid-cols-3 lg:grid-cols-5">
        {clients.map((client) => (
          <div
            key={client}
            className="flex items-center justify-center py-4"
          >
            <span className="text-xl font-bold tracking-wide text-gray-400 transition duration-300 hover:text-amber-500">
              {client}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;