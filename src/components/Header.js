import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Team", link: "#team" },
  { name: "Contact", link: "#contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide text-white"
          onClick={closeMenu}
        >
          <img className="inline w-10" src="./images/logo.png" alt="" />
          KASUKA<span className="text-amber-400">.</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-sm font-medium text-white/70 transition duration-300 hover:text-amber-400"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-md border border-amber-400 px-5 py-2.5 text-sm font-semibold text-amber-400 transition duration-300 hover:bg-amber-400 hover:text-black lg:block"
        >
          Get Started
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white transition hover:text-amber-400 lg:hidden"
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-black lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={closeMenu}
                className="border-b border-white/10 py-4 text-base font-medium text-white/80 transition hover:text-amber-400"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-5 rounded-md bg-amber-400 px-5 py-3 text-center font-semibold text-black transition hover:bg-amber-300"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
