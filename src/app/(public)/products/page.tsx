import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Phone, ArrowRight, ShoppingBag, Wrench } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Solar panels, lithium batteries, inverters, solar lights, and more. Contact us to purchase or get a quote.",
};

const products = [
  {
    id: "solar-panels",
    name: "Solar Panels (Monocrystalline)",
    category: "Solar Panels",
    description: "High-efficiency monocrystalline solar panels. Available in various wattages from 100W to 550W.",
    priceNote: "From R1,800 per panel",
    image: "/images/products/Jinko 580W.jpg",
    specs: ["100W – 550W options", "Monocrystalline & Polycrystalline", "25-year performance warranty", "Anti-reflective coating"],
  },
  {
    id: "lithium-batteries",
    name: "Lithium Iron Phosphate (LiFePO4) Batteries",
    category: "Batteries",
    description: "Long-life lithium batteries for solar storage and UPS applications. Safer and longer-lasting than lead-acid.",
    priceNote: "Contact for pricing",
    image: "/images/products/Dyness-battery.jpg",
    specs: ["100Ah – 200Ah capacity", "4000+ charge cycles", "Built-in BMS protection", "Stackable design"],
  },
  {
    id: "gel-batteries",
    name: "Gel Batteries",
    category: "Batteries",
    description: "Sealed VRLA gel batteries for UPS and solar backup applications. Maintenance-free and spill-proof.",
    priceNote: "From R1,200",
    image: "/images/products/gel-battery.jpg",
    specs: ["100Ah – 200Ah", "Deep-cycle design", "Maintenance-free", "10-year design life"],
  },
  {
    id: "inverters",
    name: "Solar Inverters & Hybrid Inverters",
    category: "Inverters",
    description: "Quality inverters from 1kW to 10kW. Pure sine wave output for sensitive equipment.",
    priceNote: "From R3,500",
    image: "/images/products/inverter.jpg",
    specs: ["1kW – 10kW range", "Pure sine wave", "Wi-Fi monitoring", "Grid-tie and off-grid"],
  },
  {
    id: "charge-controllers",
    name: "MPPT Charge Controllers",
    category: "Controllers",
    description: "Maximum Power Point Tracking controllers for optimal solar charging efficiency.",
    priceNote: "From R800",
    image: "/images/products/charge-controller.jpg",
    specs: ["20A – 100A", "MPPT technology", "LCD display", "Multi-battery compatible"],
  },
  {
    id: "solar-lights",
    name: "Solar Outdoor Lights",
    category: "Solar Lights",
    description: "All-in-one solar street lights, floodlights, and garden lights. Perfect for driveways, streets, and outdoor areas.",
    priceNote: "From R350",
    image: "/images/products/solar-light.jpg",
    specs: ["Motion sensor option", "IP65 weatherproof", "Auto on/off dusk-to-dawn", "Various lumen options"],
  },
  {
    id: "solar-geysers",
    name: "Solar Geyser Systems",
    category: "Solar Geysers",
    description: "Complete solar water heating systems. Evacuated tube and flat-plate collector options available.",
    priceNote: "From R8,500 installed",
    image: "/images/products/solar-geyser.jpg",
    specs: ["100L – 300L tanks", "Evacuated tube collectors", "Flat-plate collectors", "Electric backup element"],
  },
  {
    id: "solar-pumps",
    name: "Solar Water Pumps",
    category: "Solar Pumps",
    description: "Solar-powered submersible and surface pumps for boreholes, dams, and irrigation.",
    priceNote: "Contact for pricing",
    image: "/images/products/solar-pump.jpg",
    specs: ["0.37kW – 7.5kW", "Submersible & surface", "Variable speed drive", "Controller included"],
  },
];

const categories = ["All", "Solar Panels", "Batteries", "Inverters", "Controllers", "Solar Lights", "Solar Geysers", "Solar Pumps"];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="Quality solar equipment and energy products. Contact us to order or request a quote."
        breadcrumb="Equipment & Products"
        image="/images/projects/hero-bg.jpg"
      />

      {/* How to buy banner */}
      <section className="py-10 bg-[#0d2137]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="flex items-center gap-2 text-[#e8821a] font-semibold mb-1 justify-center md:justify-start">
                <ShoppingBag size={18} />
                How to Purchase
              </div>
              <p className="text-white/70 text-sm max-w-xl">
                We recommend a consultation before purchasing to ensure you get the right equipment for your
                system. Contact us via WhatsApp, phone, or email — we&apos;ll advise and arrange delivery or
                collection from Vanderbijlpark.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://wa.me/27635259005?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl text-sm transition-colors"
              >
                <MessageSquare size={15} />
                WhatsApp
              </a>
              <a
                href="tel:+27635259005"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#e8821a] hover:bg-[#c46a0e] text-white font-semibold rounded-xl text-sm transition-colors"
              >
                <Phone size={15} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#e8821a]/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-44 bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-[#0d2137] text-white text-xs font-semibold rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-[#0d2137] text-sm mb-2 group-hover:text-[#e8821a] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3 flex-1">
                    {product.description}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {product.specs.slice(0, 2).map((spec) => (
                      <li key={spec} className="text-xs text-gray-500 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#e8821a] flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-[#e8821a] font-bold text-sm">{product.priceNote}</span>
                    <a
                      href={`https://wa.me/27635259005?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(product.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-white bg-[#0d2137] hover:bg-[#e8821a] px-3 py-1.5 rounded-lg transition-colors"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Installation note */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0d2137] rounded-2xl p-8 text-white">
              <Wrench className="text-[#e8821a] mb-4" size={28} />
              <h3 className="text-xl font-bold mb-3">Need Installation?</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Buy any product from us and we can arrange professional installation. We recommend
                a free consultation first to ensure the right system sizing.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#e8821a] font-semibold text-sm"
              >
                Request Installation <ArrowRight size={14} />
              </Link>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <ShoppingBag className="text-[#e8821a] mb-4" size={28} />
              <h3 className="text-xl font-bold text-[#0d2137] mb-3">Not Sure What You Need?</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Our team can assess your energy requirements and recommend the right combination of
                products and system size. Book a free consultation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#e8821a] font-semibold text-sm"
              >
                Book a Consultation <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
