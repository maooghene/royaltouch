// components/Footer.tsx
import Link from "next/link";
import { Scissors } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-surface border-t border-brand-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand / Identity Visual Logo */}
        <div className="flex items-center space-x-2">
          <div className="p-1.5 bg-brand-bg border border-brand-border rounded-md">
            <Scissors className="w-4 h-4 text-brand-accent transform -rotate-45" />
          </div>
          <span className="font-serif text-lg font-bold tracking-wider text-brand-text">
            ROYAL<span className="text-brand-accent">TOUCH</span>
          </span>
        </div>

        {/* Navigation Shortcut Targets */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-brand-text/50">
          <Link href="/" className="hover:text-brand-accent transition-colors">
            Home
          </Link>
          <Link
            href="/barbers"
            className="hover:text-brand-accent transition-colors"
          >
            Find a Barber
          </Link>
          <Link
            href="/contact"
            className="hover:text-brand-accent transition-colors"
          >
            Support
          </Link>
        </div>

        {/* Copyright & Core Status Disclaimer */}
        <div className="text-center md:text-right">
          <p className="text-xs text-brand-text/40">
            &copy; {currentYear} Royal Touch. Campus MVP Demand Validation.
          </p>
        </div>
      </div>
    </footer>
  );
}
