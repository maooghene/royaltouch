// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Scissors, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Our Barbers", href: "/barbers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-brand-bg/80 backdrop-blur-md border-b border-brand-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity Visual Anchor Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-brand-surface border border-brand-border rounded-lg group-hover:border-brand-accent/40 transition-colors">
              <Scissors className="w-5 h-5 text-brand-accent transform -rotate-45" />
            </div>
            <span className="font-serif text-xl font-bold tracking-wider text-brand-text">
              ROYAL<span className="text-brand-accent">TOUCH</span>
            </span>
          </Link>

          {/* Large Screen Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-text/70 hover:text-brand-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/barbers"
              className="px-4 py-2 bg-brand-surface border border-brand-border text-brand-accent text-sm font-semibold rounded-lg hover:bg-brand-accent hover:text-brand-bg transition-all"
            >
              Book a Barber
            </Link>
          </div>

          {/* Mobile Screen Trigger Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-text/80 hover:text-brand-accent focus:outline-none"
              aria-label="Toggle menu layout navigation control options box dropdown"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Slide Layout Menu Panel Drawer Container drop Overlay box toggler */}
      {isOpen && (
        <div className="md:hidden bg-brand-bg/95 border-b border-brand-border px-4 pt-2 pb-6 space-y-4 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-brand-text/80 hover:text-brand-accent rounded-md"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 px-3">
            <Link
              href="/barbers"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-2.5 bg-brand-accent text-brand-bg font-bold rounded-lg transition-transform"
            >
              Book a Barber
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
