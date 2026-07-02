import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useScrolled } from "../hooks/useScrolled";
import logoCabecario from "../Logo/Cabeçario/Logo principal - Cabeçario branco.png";

const NAV_LINKS = [
  { label: "SOBRE", to: "/sobre" },
  { label: "PROJETOS", to: "/projetos" },
  { label: "SERVIÇOS", to: "/servicos" },
  { label: "CONTATO", to: "/contato" },
];

export default function Navbar() {
  const scrolled = useScrolled(80);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isLight = !scrolled;

  const textColor = isLight ? "text-white" : "text-on-surface";
  const hoverColor = isLight
    ? "hover:text-primary-fixed-dim"
    : "hover:text-primary-container";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ease-in-out border-b ${
        scrolled
          ? "bg-background border-outline-variant/40"
          : "bg-transparent border-outline-variant/20"
      }`}
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-2 max-w-container-max mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center group flex-shrink-0">
          <img
            src={logoCabecario}
            alt="Logo Sandra"
            className={`h-14 md:h-16 w-auto object-contain transition-opacity ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
        </Link>

        {/* Desktop Nav - Centered */}
        <nav className="hidden md:flex items-center gap-12 lg:gap-16 flex-1 justify-center">
          {NAV_LINKS.map((link) => {
            const active =
              location.pathname === link.to ||
              (link.to !== "/" && location.pathname.startsWith(link.to + "/"));
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`font-label-caps text-label-caps tracking-[0.32em] uppercase transition-colors ${
                  active ? "text-primary-container" : textColor
                } ${hoverColor}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Contact meta (desktop) */}
        <div
          className={`hidden md:flex items-center font-label-caps text-label-caps tracking-[0.1em] transition-colors ${textColor} flex-shrink-0`}
        >
          <div className="w-5 h-px bg-primary-container mr-3" />
          <span>+55 51 81 14 9971</span>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Abrir menu"
          aria-expanded={mobileOpen}
          className={`md:hidden ${textColor}`}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="material-symbols-outlined text-[28px]">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-outline-variant/40 px-margin-mobile py-8">
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="font-label-caps text-label-caps tracking-[0.32em] uppercase text-on-surface hover:text-primary-container transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="font-label-caps text-label-caps tracking-[0.1em] text-on-surface-variant pt-4 border-t border-outline-variant/40">
              +55 51 81 14 9971
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
