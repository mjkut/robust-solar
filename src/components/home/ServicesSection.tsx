import Link from "next/link";
import {
  Sun,
  Droplets,
  Battery,
  Wrench,
  Flame,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Solar Systems Design & Installation",
    description:
      "Complete solar PV system design and professional installation for residential and commercial properties. From rooftop to ground-mounted systems.",
    href: "/services#solar-installation",
  },
  {
    icon: Droplets,
    title: "Solar Pump Systems",
    description:
      "Solar-powered water pump systems for agricultural, residential, and commercial irrigation needs. Reliable water supply off-grid.",
    href: "/services#solar-pumps",
  },
  {
    icon: Battery,
    title: "UPS Design & Installation",
    description:
      "Uninterrupted Power Systems to keep your home or business running during load shedding and power outages. Backed by lithium battery technology.",
    href: "/services#ups",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Regular maintenance and free support services for all solar systems and UPS installations we've completed. Your investment, protected.",
    href: "/services#maintenance",
  },
  {
    icon: Flame,
    title: "Solar Geyser Installation",
    description:
      "Replace your electric geyser with an energy-efficient solar water heating system. Slash your electricity bill immediately.",
    href: "/services#solar-geyser",
  },
  {
    icon: BarChart3,
    title: "Energy Management Consultancy",
    description:
      "Smart energy audits and consultancy to help you reduce consumption, cut bills, and make informed decisions about your energy future.",
    href: "/services#consultancy",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#e8821a] bg-orange-50 rounded-full mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d2137] mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide top-of-the-range energy solutions of a wide variety,
            meeting the needs of a broad spectrum of clients.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#e8821a]/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0d2137] group-hover:bg-[#e8821a] transition-colors flex items-center justify-center mb-5">
                  <Icon className="text-white" size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0d2137] mb-3 group-hover:text-[#e8821a] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[#e8821a] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0d2137] hover:bg-[#1a3352] text-white font-semibold rounded-xl transition-colors"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
