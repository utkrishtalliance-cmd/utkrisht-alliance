import { Link, useLocation } from "react-router";
import { useState, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SHOW_MEDIA_PAGE } from "../featureFlags";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/signature-experiences", label: "Signature Experiences" },
    { to: "/events", label: "Events" },
    { to: "/media", label: "Media" },
    { to: "/creators", label: "Creators" },
    { to: "/contact", label: "Contact" },
  ].filter((link) => SHOW_MEDIA_PAGE || link.to !== "/media");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isOpen ? "" : "transition-all duration-300"
      } ${
        isOpen
          ? "bg-[#0A0F1A] py-6 bottom-0 overflow-y-auto"
          : scrolled
            ? "bg-[#0A0F1A]/90 backdrop-blur-lg py-4"
            : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" aria-label="Utkrisht Alliance — home" className="inline-flex items-center">
            <img
              src="/utkrisht-logo-wide.png"
              alt="Utkrisht Alliance"
              className="h-12 md:h-14 lg:h-[5.25rem] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5">
            {navLinks.map((link, i) => (
              <Fragment key={link.to}>
                {i > 0 && (
                  <span aria-hidden="true" className="select-none text-[#c7a468]/50">
                    /
                  </span>
                )}
                <Link
                  to={link.to}
                  className={`whitespace-nowrap text-sm uppercase tracking-wider transition-colors hover:text-[#c7a468] ${
                    location.pathname === link.to
                      ? "text-[#c7a468]"
                      : "text-gray-400"
                  }`}
                >
                  {link.label}
                </Link>
              </Fragment>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-sm uppercase tracking-wider border border-white/40 px-4 py-2 transition-colors hover:border-[#c7a468] hover:text-[#c7a468]"
            aria-expanded={isOpen}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              // Instant exit: the nav background turns transparent on close,
              // so an animated exit would overlap the hero text.
              exit={{ opacity: 0, height: 0, transition: { duration: 0 } }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 pt-6 pb-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`text-sm uppercase tracking-wider transition-colors hover:text-[#c7a468] ${
                      location.pathname === link.to
                        ? "text-[#c7a468]"
                        : "text-gray-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}