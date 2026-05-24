"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "#sobre", label: "Quem Somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#atividades", label: "Atividades" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(16,16,16,0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #2E2E2E" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="IME Jr"
              width={80}
              height={32}
              className="h-8 w-auto object-contain group-hover:opacity-80 transition-opacity"
              priority
            />
            <span className="font-black text-white tracking-tight">
                IME Jr
              </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium px-4 py-2 rounded-lg transition-all"
                style={{ color: "#A0A0A0" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#A0A0A0")}
              >
                {l.label}
              </a>
            ))}
            <a href="#contato" className="ml-4 btn-primary text-sm">
              Fale Conosco
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#101010", borderTop: "1px solid #2E2E2E" }}>
          <nav className="flex flex-col px-4 py-3 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-medium px-4 py-3 rounded-lg transition-all"
                style={{ color: "#A0A0A0" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 btn-primary justify-center text-center text-sm"
            >
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
