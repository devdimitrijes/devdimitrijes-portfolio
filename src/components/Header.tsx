import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About me" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-secondary ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 lg:px-12 lg:justify-evenly">
        <h2 className="text-xl font-bold font-heading">
          <span className="text-primary">devdimitrije</span>
          <span className="text-accent">s</span>
        </h2>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary font-semibold text-lg hover:text-primary-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg bg-accent text-accent-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        className={`lg:hidden bg-secondary transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80 pb-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary font-semibold text-xl hover:text-primary-dark transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
