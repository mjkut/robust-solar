"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#0d2137] text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:+27635259005"
              className="flex items-center gap-1.5 hover:text-[#e8821a] transition-colors"
            >
              <Phone size={13} />
              +27 79 264 5562
            </a>
            <a
              href="mailto:info@robustsolarenergy.co.za"
              className="flex items-center gap-1.5 hover:text-[#e8821a] transition-colors"
            >
              <Mail size={13} />
              info@robustsolarenergy.co.za
            </a>
          </div>
          <span className="text-white/60 text-xs">
            Serving South Africa · Zimbabwe · Lesotho · Swaziland
          </span>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled || !isHome
            ? "bg-white shadow-md"
            : "bg-white/95 backdrop-blur-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="/logos.png"
                alt="Robust Solar logo"
                width={140}
                height={50}
                className="object-contain"
                priority
              />
              {/*
              <!-- Logo text 
              <div className="leading-tight">
                <div className="font-bold text-[#0d2137] text-lg leading-none">
                  Robust
                </div>
                <div className="text-[10px] text-[#e8821a] uppercase tracking-widest font-semibold leading-none mt-0.5">
                  Solar & Energy Solutions
                </div>
              </div>
              -->
              */}
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    pathname === link.href
                      ? "text-[#e8821a] bg-orange-50"
                      : "text-[#0d2137] hover:text-[#e8821a] hover:bg-orange-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-4 px-5 py-2.5 bg-[#e8821a] text-white text-sm font-semibold rounded-lg hover:bg-[#c46a0e] transition-colors shadow-sm"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-[#0d2137] hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                    pathname === link.href
                      ? "text-[#e8821a] bg-orange-50"
                      : "text-[#0d2137] hover:text-[#e8821a] hover:bg-orange-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-100 mt-2">
                <Link
                  href="/contact"
                  className="block px-4 py-3 text-sm font-semibold text-center bg-[#e8821a] text-white rounded-lg hover:bg-[#c46a0e] transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <a
                  href="tel:+27635259005"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600"
                >
                  <Phone size={14} />
                  +27 (635) 25 9005
                </a>
                <a
                  href="mailto:info@robustsolarenergy.co.za"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600"
                >
                  <Mail size={14} />
                  info@robustsolarenergy.co.za
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
