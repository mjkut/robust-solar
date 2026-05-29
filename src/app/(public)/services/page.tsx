import type { Metadata } from "next";
import Link from "next/link";
import {
  Sun,
  Droplets,
  Battery,
  Wrench,
  Flame,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Phone,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Solar system installation, UPS, solar pumps, geysers, maintenance and energy consultancy across Southern Africa.",
};

const services = [
  {
    id: "solar-installation",
    icon: Sun,
    title: "Solar Systems Design & Installation",
    description:
      "We handle everything from initial assessment and custom system design through to professional installation and commissioning. Our solar systems are built to last and perform.",
    features: [
      "Site assessment and shading analysis",
      "Custom system design (kW sizing for your needs)",
      "Rooftop and ground-mounted installations",
      "Grid-tied, off-grid, and hybrid systems",
      "Residential, commercial, and agricultural",
      "Post-installation commissioning and testing",
    ],
    color: "bg-amber-50",
    iconBg: "bg-[#e8821a]",
  },
  {
    id: "solar-pumps",
    icon: Droplets,
    title: "Solar Pump Design & Installations",
    description:
      "Solar water pumps are a reliable, cost-effective solution for farms, rural homesteads, and commercial properties needing off-grid water supply.",
    features: [
      "Submersible and surface pump systems",
      "Borehole pump solutions",
      "Agricultural irrigation systems",
      "Water tank storage integration",
      "Remote monitoring capabilities",
      "Works without grid connection",
    ],
    color: "bg-blue-50",
    iconBg: "bg-blue-600",
  },
  {
    id: "ups",
    icon: Battery,
    title: "UPS Design & Installation",
    description:
      "Uninterrupted Power Systems keep your home or business running during load shedding and outages. We use quality lithium and gel battery technology.",
    features: [
      "Single-phase and three-phase UPS",
      "Lithium-ion and gel battery options",
      "Load shedding protection",
      "Automatic switchover",
      "Scalable battery banks",
      "Commercial and residential UPS",
    ],
    color: "bg-purple-50",
    iconBg: "bg-purple-600",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance of Solar Systems & UPSs",
    description:
      "We offer scheduled and reactive maintenance for all solar and UPS systems. Clients who install with us receive free ongoing support.",
    features: [
      "Scheduled preventive maintenance",
      "Panel cleaning and inspection",
      "Inverter and battery health checks",
      "Performance monitoring review",
      "Fault diagnosis and repair",
      "Free support for our installations",
    ],
    color: "bg-green-50",
    iconBg: "bg-green-600",
  },
  {
    id: "solar-geyser",
    icon: Flame,
    title: "Solar Geyser Installation",
    description:
      "Replace your old electric geyser with an energy-efficient solar water heating system. Immediate savings on your electricity bill.",
    features: [
      "Flat-plate and evacuated tube collectors",
      "Direct and indirect circulation systems",
      "Retrofits on existing geyser infrastructure",
      "SANS 10400-XA compliant installations",
      "Backup electric element option",
      "5-year system warranty",
    ],
    color: "bg-red-50",
    iconBg: "bg-red-500",
  },
  {
    id: "consultancy",
    icon: BarChart3,
    title: "Energy Management Consultancy",
    description:
      "Not sure where to start? Our energy experts will audit your consumption, identify savings opportunities, and recommend the best solutions for your budget.",
    features: [
      "Energy audit and consumption analysis",
      "Tailored recommendations per budget",
      "ROI projections and payback periods",
      "Grid infrastructure assessment",
      "Carbon footprint reduction planning",
      "Independent advice (no hard sell)",
    ],
    color: "bg-teal-50",
    iconBg: "bg-teal-600",
  },
];

const process = [
  { step: "01", title: "Contact Us", description: "Reach out via phone, email, or WhatsApp to discuss your needs." },
  { step: "02", title: "Site Assessment", description: "Our team visits your site to assess requirements and take measurements." },
  { step: "03", title: "Custom Quote", description: "We design a system tailored to your energy needs and budget." },
  { step: "04", title: "Installation", description: "Professional installation by our certified team with minimal disruption." },
  { step: "05", title: "Commissioning", description: "Full testing, handover, and training on your new system." },
  { step: "06", title: "Ongoing Support", description: "Free support and maintenance for systems we install." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Top-of-the-range energy solutions meeting the needs of a broad spectrum of clients."
        breadcrumb="What We Offer"
        image="/images/projects/hero-bg.jpg"
      />

      {/* Services list */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                id={service.id}
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  isEven ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Content */}
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0d2137] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#e8821a] hover:bg-[#c46a0e] text-white font-semibold rounded-xl transition-colors text-sm"
                  >
                    Get a Quote <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Features card */}
                <div className={`${service.color} rounded-2xl p-8`}>
                  <h3 className="font-bold text-[#0d2137] mb-5 text-sm uppercase tracking-wider">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle size={16} className="text-[#e8821a] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#e8821a] bg-orange-50 rounded-full mb-4">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d2137]">
              Our Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map(({ step, title, description }) => (
              <div key={step} className="bg-white rounded-2xl p-7 border border-gray-100 relative">
                <div className="text-5xl font-black text-gray-100 absolute top-5 right-6">
                  {step}
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#0d2137] text-white flex items-center justify-center text-sm font-bold mb-4">
                  {step}
                </div>
                <h3 className="font-bold text-[#0d2137] text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Supply note */}
      <section className="py-16 bg-[#0d2137]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Solar & UPS Equipment Supply
          </h2>
          <p className="text-white/60 mb-6 text-lg">
            We also supply solar panels, inverters, lithium batteries, solar lights, charge
            controllers, and accessories. Whether you need a full system or just components,
            we can source the right equipment for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#e8821a] hover:bg-[#c46a0e] text-white font-semibold rounded-xl transition-colors"
            >
              Browse Products <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+27635259005"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors"
            >
              <Phone size={16} />
              Call for Availability
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
