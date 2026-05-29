import Link from "next/link";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

const services = [
  "Solar Systems Design & Installation",
  "Solar Pump Installations",
  "UPS Design & Installation",
  "Solar Geyser Installation",
  "Equipment Supply",
  "Energy Management Consultancy",
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d2137] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="font-bold text-2xl text-white">Robust</div>
              <div className="text-[#e8821a] text-xs uppercase tracking-widest font-semibold">
                Solar & Energy Solutions
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Providing top-of-the-range clean energy solutions since 2015.
              Committed to reducing energy waste across Southern Africa.
            </p>
            <div className="flex gap-3">
              {[
                { label: "Facebook", letter: "f", href: "#" },
                { label: "Twitter/X", letter: "𝕏", href: "#" },
                { label: "Instagram", letter: "ig", href: "#" },
                { label: "LinkedIn", letter: "in", href: "#" },
              ].map(({ label, letter, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#e8821a] transition-colors flex items-center justify-center text-xs font-bold"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[#e8821a] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#e8821a] flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/60 text-sm hover:text-[#e8821a] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#e8821a] flex-shrink-0" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-[#e8821a] flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  ERF 36 Olga Kirsch
                  <br />
                  Street, Mullerstuine,
                  Vanderbijlpark
                  <br />
                  South Africa
                </span>
              </li>
              <li>
                <a
                  href="tel:+27635259005"
                  className="flex gap-3 text-white/60 text-sm hover:text-[#e8821a] transition-colors"
                >
                  <Phone size={16} className="text-[#e8821a] flex-shrink-0" />
                  +27 79 264 5562
                </a>
              </li>
              <li>
                <a
                  href="mailto:robustsolares@gmail.com"
                  className="flex gap-3 text-white/60 text-sm hover:text-[#e8821a] transition-colors"
                >
                  <Mail size={16} className="text-[#e8821a] flex-shrink-0" />
                  robustsolares@gmail.com
                </a>
              </li>
              {/*}
              <li>
                <a
                  href="robustsolares@gmail.com"
                  className="flex gap-3 text-white/60 text-sm hover:text-[#e8821a] transition-colors"
                >
                  <Mail size={16} className="text-[#e8821a] flex-shrink-0" />
                  projects@robustsolarenergy.co.za
                </a>
              </li>
              */}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Robust Solar & Energy Solutions. Reg No. 2020/519615/07 (SA)
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-white/40 text-xs hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 text-xs hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
