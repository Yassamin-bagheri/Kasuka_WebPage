import { CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";

const points = [
  "Professional and experienced team",
  "Modern and scalable technologies",
  "Focus on performance and user experience",
];

function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionTitle
            subtitle="About Us"
            title="We Create Better Digital Experiences"
            description="Our team helps businesses transform their ideas into modern and reliable digital products."
          />

          <p className="leading-8 text-gray-600">
            We combine creativity, technology and strategy to create
            solutions that are beautiful, fast and easy to use.
          </p>

          <div className="mt-8 space-y-4">
            {points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={22}
                  className="mt-1 shrink-0 text-amber-500"
                />

                <p className="leading-7 text-gray-700">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="group overflow-hidden rounded-lg">
          <img
            src="/images/about.jpg"
            alt="Modern office workspace"
            className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-105 lg:h-[520px]"
          />
        </div>
      </div>
    </section>
  );
}

export default About;