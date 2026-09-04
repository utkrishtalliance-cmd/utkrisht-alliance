import { Link } from "react-router";
import { Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img
              src="/utkrisht-logo-wide.webp"
              alt="Utkrisht Alliance"
              className="h-14 md:h-16 w-auto mb-5"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              A premier media & events company connecting luxury brands with high-value audiences worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-gray-400 hover:text-white text-sm transition-colors">
                Services
              </Link>
              <Link to="/events" className="text-gray-400 hover:text-white text-sm transition-colors">
                Events
              </Link>
              <Link to="/partner" className="text-gray-400 hover:text-white text-sm transition-colors">
                Partner With Us
              </Link>
            </div>
          </div>

          {/* Signature Experiences */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Signature Experiences</h4>
            <div className="flex flex-col gap-3">
              <Link to="/fashion-shows" className="text-gray-400 hover:text-white text-sm transition-colors">
                Fashion Shows
              </Link>
              <Link to="/luxury-real-estate" className="text-gray-400 hover:text-white text-sm transition-colors">
                Luxury Real Estate
              </Link>
              <Link to="/networking-events" className="text-gray-400 hover:text-white text-sm transition-colors">
                Invite-Only Networking
              </Link>
              <Link to="/brand-showcases" className="text-gray-400 hover:text-white text-sm transition-colors">
                Brand Showcases
              </Link>
              <Link to="/whisky-spirits" className="text-gray-400 hover:text-white text-sm transition-colors">
                Whisky &amp; Spirits Salons
              </Link>
              <Link to="/arts-architecture" className="text-gray-400 hover:text-white text-sm transition-colors">
                Arts &amp; Architecture
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  Toronto, Ontario, Canada
                  <span className="block text-gray-500 text-xs mt-1">
                    Operating globally across North America, Europe &amp; Asia
                  </span>
                </span>
              </div>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span className="flex flex-col">
                  <a href="mailto:info@utkrishtalliance.com" className="hover:text-white transition-colors">
                    info@utkrishtalliance.com
                  </a>
                  <a href="mailto:partnerships@utkrishtalliance.com" className="hover:text-white transition-colors">
                    partnerships@utkrishtalliance.com
                  </a>
                </span>
              </div>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>
                  <a href="tel:+16399160639" className="hover:text-white transition-colors">
                    +1 (639) 916-0639
                  </a>
                  <span className="block text-gray-500 text-xs mt-1">
                    Mon–Fri, 9:00 AM – 6:00 PM EST
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Utkrisht Alliance. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/utkrishtalliance/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Utkrisht Alliance on Instagram"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/utkrisht-alliance/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Utkrisht Alliance on LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.youtube.com/@UtkrishtAlliance"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Utkrisht Alliance on YouTube"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Youtube size={20} />
            </a>
            <a
              href="mailto:info@utkrishtalliance.com"
              aria-label="Email Utkrisht Alliance"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}