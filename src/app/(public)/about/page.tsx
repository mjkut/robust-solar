import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Globe, Target, Eye } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Robust Solar & Energy Solutions — our history, mission, vision, and values. Serving Southern Africa since 2015.",
};

const values = [
  {
    title: "People",
    description:
      "Our products and services are pivoted around satisfying the client. The business model we adopted is designed to meet the requirements of clients of different affordability. We truly believe that one happy client leads to the next.",
  },
  {
    title: "Passion",
    description:
      "Provision of robust energy solutions is in our hearts — it is not a once-off attempt and we are here to stay. As a result, this reflects in our work.",
  },
  {
    title: "Commitment",
    description:
      "We take great care to provide best solutions and provide free support services. Professional workmanship is the trail we leave behind wherever we are called to serve.",
  },
  {
    title: "Innovation & Technology",
    description:
      "To constantly remain abreast and keep providing latest technological services to our clients. This includes smart modern equipment, IoT, and cloud-based solutions.",
  },
  {
    title: "Environment",
    description:
      "We have our surroundings at the core of our services. It is our drive to significantly contribute to the reduction of greenhouse gas emissions through provision of renewable and sustainable energy generation solutions.",
  },
];

const countries = [
  { name: "Zimbabwe", flag: "🇿🇼", projects: "100+", note: "Our largest market by project volume" },
  { name: "South Africa", flag: "🇿🇦", projects: "80+", note: "Headquartered in Vanderbijlpark, Gauteng" },
  { name: "Lesotho", flag: "🇱🇸", projects: "15+", note: "Remote and off-grid solutions" },
  { name: "Swaziland", flag: "🇸🇿", projects: "10+", note: "Residential and commercial" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Robust Solar"
        subtitle="A fast-growing enterprise committed to delivering clean energy across Southern Africa since 2015."
        breadcrumb="Our Story"
        image="/images/projects/hero-bg.jpg"
      />

      {/* Background & Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#e8821a] bg-orange-50 rounded-full mb-4">
                Our Background
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0d2137] mb-6">
                Powering Southern Africa Since 2015
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Robust Solar & Energy Solutions is a fast-growing business enterprise with its roots
                  traceable as far back as 2015. Energy solutions are our passion and therefore we are
                  committed to deliver in this respect.
                </p>
                <p>
                  We possess a sound understanding of the fundamentals of energy creation and transfer
                  as well as the practical aspects involved. Over and above that, we use a smart business
                  approach meant to meet the client&apos;s needs and ensure growth in a tight modern
                  commerce environment.
                </p>
                <p>
                  Our services currently cover countries such as South Africa, Zimbabwe, Lesotho, Swaziland,
                  Lesotho, and Swaziland. For the rest of Southern Africa, arrangements can be made as well.
                </p>
              </div>
              <ul className="mt-6 space-y-2">
                {[
                  "Registered company in South Africa (2020/519615/07)",
                  "Professional installations across 6 countries",
                  "Free support for all completed installations",
                  "Honest, transparent pricing and quotations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-700 text-sm">
                    <CheckCircle size={16} className="text-[#e8821a] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#e8821a] hover:bg-[#c46a0e] text-white font-semibold rounded-xl transition-colors"
                >
                  Work With Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Image collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/projects/project-1.jpg"
                    alt="Solar installation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/projects/project-2.jpg"
                    alt="Solar installation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/projects/project-3.jpg"
                    alt="Solar installation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/projects/project-4.jpg"
                    alt="Solar installation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0d2137] rounded-2xl p-10 text-white">
              <div className="w-12 h-12 rounded-xl bg-[#e8821a] flex items-center justify-center mb-6">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">
                We are committed to providing clean energy into households and the commercial space.
                It is our intent to reduce energy waste in the aforementioned places to reduce energy bills
                and contribute to a sustainable future.
              </p>
            </div>

            <div className="bg-[#e8821a] rounded-2xl p-10 text-white">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Eye size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To be the service providers of choice in the renewable energy and energy management
                space in the foreseeable future — across Southern Africa and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#e8821a] bg-orange-50 rounded-full mb-4">
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d2137]">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="p-7 rounded-2xl border border-gray-100 hover:border-[#e8821a]/30 hover:shadow-lg transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[#e8821a] text-white flex items-center justify-center text-sm font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-[#0d2137] mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-20 bg-[#0d2137]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#e8821a] bg-[#e8821a]/10 rounded-full mb-4">
              Where We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Globe size={32} className="text-[#e8821a]" />
              Across Southern Africa
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto w-full">
            {countries.map((country) => (
              <div
                key={country.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 hover:border-[#e8821a]/30 transition-all"
              >
                <div className="text-4xl mb-3">{country.flag}</div>
                <div className="text-white font-semibold text-sm mb-1">{country.name}</div>
                <div className="text-[#e8821a] font-bold text-lg">{country.projects}</div>
                <div className="text-white/40 text-xs">projects</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
