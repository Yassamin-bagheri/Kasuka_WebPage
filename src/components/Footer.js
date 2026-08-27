import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            KASUKA<span className="text-amber-400">.</span>
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Modern digital solutions for businesses that want to grow.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#!"
              aria-label="Twitter"
              className="transition hover:text-amber-400"
            >
              <FaTwitter size={20} />
            </a>

            <a
              href="#!"
              aria-label="Facebook"
              className="transition hover:text-amber-400"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="#!"
              aria-label="Instagram"
              className="transition hover:text-amber-400"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="#!"
              aria-label="LinkedIn"
              className="transition hover:text-amber-400"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold text-white">Useful Links</h3>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href="#home" className="transition hover:text-amber-400">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="transition hover:text-amber-400">
                About
              </a>
            </li>

            <li>
              <a href="#services" className="transition hover:text-amber-400">
                Services
              </a>
            </li>

            <li>
              <a href="#portfolio" className="transition hover:text-amber-400">
                Portfolio
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-white">Our Services</h3>

          <ul className="mt-5 space-y-3 text-sm">
            <li>Web Development</li>
            <li>UI / UX Design</li>
            <li>Digital Marketing</li>
            <li>Business Analytics</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white">Contact</h3>

          <p className="mt-5 text-sm leading-7 text-gray-400">
            New York, NY
            <br />
            United States
            <br />
            <br />
            Phone: +1 234 567 890
            <br />
            Email: info@kasuka.com
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Kasuka. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
