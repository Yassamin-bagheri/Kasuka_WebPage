import { useState } from "react";
import SectionTitle from "./SectionTitle";

const categories = ["All", "App", "Product", "Branding", "Web"];

const projects = [
  {
    id: 1,
    title: "Modern Workspace",
    category: "Web",
    image: "./images/portfolio-1.jpg",
  },

  {
    id: 2,
    title: "Creative Product",
    category: "Product",
    image: "./images/portfolio-2.jpg",
  },
  {
    id: 3,
    title: "Mobile Application",
    category: "App",
    image: "./images/portfolio-3.jpg",
  },
  {
    id: 4,
    title: "Brand Identity",
    category: "Branding",
    image: "./images/portfolio-4.jpg",
  },
  {
    id: 5,
    title: "Digital Platform",
    category: "Web",
    image: "./images/portfolio-5.jpg",
  },

  {
    id: 6,
    title: "Smart Technology",
    category: "Product",
    image: "./images/portfolio-6.jpg",
  },

  {
    id: 7,
    title: "Smart Technology",
    category: "Product",
    image: "./images/portfolio-7.jpg",
  },

  {
    id: 8,
    title: "Smart Technology",
    category: "Product",
    image: "./images/portfolio-8.jpg",
  },
];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Portfolio"
          title="Check Our Portfolio"
          description="Take a look at some of the projects and digital experiences we have created."
          center={true}
        />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-md px-5 py-2.5 text-sm font-semibold transition duration-300 ${
                activeCategory === category
                  ? "bg-amber-400 text-gray-900 shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {" "}
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="translate-y-6 transition duration-500 group-hover:translate-y-0">
                  <p className="text-sm font-medium text-amber-400">
                    {project.category}
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
