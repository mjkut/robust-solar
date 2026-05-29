import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "View our completed solar installation projects across Zimbabwe, South Africa, Lesotho, and Swaziland.",
};

const projects = [
  {
    id: "p1",
    title: "Large-Scale Ground-Mount Solar Array",
    country: "Zimbabwe",
    category: "Agricultural",
    description: "Ground-mounted solar array supporting agricultural irrigation. Completely off-grid water pumping system with battery backup.",
    images: ["/images/projects/project-29.jpg"],
    year: "2024",
  },
  {
    id: "p2",
    title: "Residential Rooftop Solar System",
    country: "South Africa",
    category: "Residential",
    description: "Complete rooftop solar installation with lithium battery backup for a family home in the Western Cape.",
    images: ["/images/projects/project-28.jpg"],
    year: "2024",
  },
  {
    id: "p3",
    title: "Off-Grid Commercial Solar System",
    country: "South Africa",
    category: "Commercial",
    description: "Solar and battery backup system for a commercial property in Gauteng. Fully load-shedding proof.",
    images: ["/images/projects/project-21.jpg"],
    year: "2024",
  },
  {
    id: "p4",
    title: "Farm Solar Pump Installation",
    country: "Zimbabwe",
    category: "Agricultural",
    description: "Solar-powered borehole pump system for a large farm. Provides reliable water supply without grid dependency.",
    images: ["/images/projects/project-31.jpg"],
    year: "2023",
  },
  {
    id: "p5",
    title: "School Solar Power System",
    country: "Zimbabwe",
    category: "Commercial",
    description: "Solar PV and battery system providing reliable power to a school, enabling uninterrupted learning.",
    images: ["/images/projects/project-8.jpg"],
    year: "2023",
  },
  {
    id: "p6",
    title: "Residential UPS & Solar Hybrid",
    country: "South Africa",
    category: "Residential",
    description: "Hybrid solar and UPS system for a suburban home. Seamlessly handles load shedding with automatic switchover.",
    images: ["/images/projects/project-6.jpg"],
    year: "2023",
  },
  {
    id: "p7",
    title: "Industrial Solar Installation",
    country: "Zimbabwe",
    category: "Industrial",
    description: "Large commercial solar installation for an industrial facility, significantly reducing electricity costs.",
    images: ["/images/projects/project-7.jpg"],
    year: "2023",
  },
  {
    id: "p8",
    title: "Rural Off-Grid Solar System",
    country: "Lesotho",
    category: "Residential",
    description: "Off-grid solar system bringing electricity to a rural home for the first time.",
    images: ["/images/projects/project-15.jpg"],
    year: "2022",
  },
  {
    id: "p9",
    title: "Commercial Rooftop Installation",
    country: "South Africa",
    category: "Commercial",
    description: "Rooftop solar system for a commercial building in Vanderbijlpark, generating significant monthly savings.",
    images: ["/images/projects/project-24.jpg"],
    year: "2022",
  },
];

const categories = ["All", "Residential", "Commercial", "Agricultural", "Industrial"];
const countries = ["All Countries", "Zimbabwe", "South Africa", "Lesotho", "Swaziland"];

const categoryColors: Record<string, string> = {
  Residential: "bg-blue-100 text-blue-800",
  Commercial: "bg-purple-100 text-purple-800",
  Agricultural: "bg-green-100 text-green-800",
  Industrial: "bg-gray-100 text-gray-800",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="A showcase of solar installations completed across Southern Africa."
        breadcrumb="Portfolio"
        image="/images/projects/hero-bg.jpg"
      />

      {/* Gallery */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter note */}
          <div className="mb-10 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
            <strong>Tip:</strong> Use the WhatsApp or contact us buttons below to ask about specific project types in your area.
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#e8821a]/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span
                      className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                        categoryColors[project.category] ?? "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <MapPin size={11} />
                      {project.country}
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Calendar size={11} />
                      {project.year}
                    </div>
                  </div>
                  <h3 className="font-bold text-[#0d2137] text-base mb-2 group-hover:text-[#e8821a] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* More projects note */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-[#0d2137] text-white rounded-2xl p-8 max-w-2xl">
              <p className="text-white/70 mb-2 text-sm uppercase tracking-widest">And many more</p>
              <h3 className="text-2xl font-bold mb-3">200+ Projects Completed</h3>
              <p className="text-white/60 text-sm">
                These are just a sample of our work. We have completed hundreds of installations
                across Southern Africa. Contact us to discuss a solution for your specific situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
