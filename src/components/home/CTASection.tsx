import Link from "next/link";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#e8821a] to-[#c46a0e] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-white/5" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
          Ready to Switch to Solar?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          Get a free consultation and custom quote. Our experts will assess your needs
          and design the perfect energy solution for you — whether you&apos;re in
          Johannesburg or Harare.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#e8821a] font-bold rounded-xl hover:bg-white/90 transition-colors shadow-xl"
          >
            Get a Free Quote <ArrowRight size={18} />
          </Link>
          <a
            href="https://wa.me/27 79 264 5562?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20solar%20solutions."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-bold rounded-xl border border-white/30 transition-colors"
          >
            <MessageSquare size={18} />
            WhatsApp Us
          </a>
          <a
            href="tel:+27 79 264 5562"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-bold rounded-xl border border-white/30 transition-colors"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
