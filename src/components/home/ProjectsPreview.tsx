import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

const featuredProjects = [
  {
    id: "1",
    title: "Ground-Mount Solar Farm",
    location: "Zimbabwe",
    category: "Agricultural",
    image: "/images/projects/project-1.jpg",
    description: "Large-scale ground-mounted solar array for agricultural water pumping.",
  },
  {
    id: "2",
    title: "Residential Rooftop Installation",
    location: "Zimbabwe",
    category: "Residential",
    image: "/images/projects/project-2.jpg",
    description: "Complete residential solar solution with lithium battery backup.",
  },
  {
    id: "3",
    title: "Off-Grid Solar System",
    location: "South Africa",
    category: "Off-Grid",
    image: "/images/projects/project-3.jpg",
    description: "Off-grid solar power system for a remote commercial property.",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#e8821a] bg-orange-50 rounded-full mb-4">
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d2137]">
              Recent Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[#e8821a] font-semibold hover:gap-3 transition-all text-sm sm:text-base whitespace-nowrap"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects`}
              className="group relative bg-[#0d2137] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2137] via-[#0d2137]/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#e8821a] text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-white/50 text-xs mb-2">
                  <MapPin size={11} />
                  {project.location}
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#e8821a] transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Countries served */}
        <div className="mt-16 p-8 bg-[#0d2137] rounded-2xl text-center">
          <p className="text-white/60 text-sm uppercase tracking-wider mb-4">
            Projects Completed Across
          </p>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {["Zimbabwe", "South Africa", "Lesotho", "Swaziland"].map((country) => (
              <div key={country} className="flex items-center gap-2 text-white font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#e8821a]" />
                {country}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
