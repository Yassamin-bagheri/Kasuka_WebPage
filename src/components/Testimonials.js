import SectionTitle from "./SectionTitle";

const testimonials = [
  {
    id: 1,
    name: "Saul Goodman",
    role: "CEO",
    text: "The team delivered an excellent result. The project was professional, fast and exceeded our expectations.",
    image: "./images/testimonials-1.jpg",
  },
  {
    id: 2,
    name: "Sara Wilsson",
    role: "Designer",
    text: "A great experience from start to finish. Communication and attention to detail were excellent.",
    image: "./images/testimonials-2.jpg",
  },
  {
    id: 3,
    name: "Jena Karlis",
    role: "Store Owner",
    text: "Our new digital platform has made a real difference to our business and customer experience.",
    image: "./images/testimonials-5.jpg",
  },
];

function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Feedback from people and businesses we have worked with."
          center={true}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-amber-600">{testimonial.role}</p>
                </div>
              </div>

              <p className="mt-6 leading-8 text-gray-600">
                "{testimonial.text}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
