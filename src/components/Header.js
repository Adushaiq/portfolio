import { useState } from "react";
import HamburgerMenu from "../Assets/Hamburger Menu.png";
import CloseBtn from "../Assets/Close Btn.png";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const topOffset =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }

    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <Section>
      <section className="shadow-bottom shadow-lg">
        <header className="flex justify-between items-center max-w-[80%] md:max-w-[90%] mx-auto py-7 text-md text-primary font-semibold">
          <a
            href="#"
            className="font-bold text-lg"
            onClick={() => scrollToSection("home")}
          >
            Adnan.dev
          </a>

          <nav>
            {/* Mobile Menu */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="flex items-center focus:outline-none"
              >
                <img src={HamburgerMenu} alt="Menu" className="h-[16px]" />
              </button>
              {isMobileMenuOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-white">
                  <img
                    src={CloseBtn}
                    onClick={toggleMobileMenu}
                    alt="Close"
                    className="w-6 h-6 absolute top-8 right-10"
                  />

                  <ul className="text-center text-lg flex flex-col gap-3">
                    <li className="hover:text-blue">
                      <a onClick={() => scrollToSection("home")}>Home</a>
                    </li>
                    <li className="hover:text-blue">
                      <a onClick={() => scrollToSection("about")}>About</a>
                    </li>
                    <li className="hover:text-blue">
                      <a onClick={() => scrollToSection("projects")}>
                        Projects
                      </a>
                    </li>
                    <li className="hover:text-blue">
                      <a onClick={() => scrollToSection("contact")}>Contact</a>
                    </li>
                    <li className="hover:text-blue">
                      <a
                        href="https://drive.google.com/file/d/1Z4-YPPSq8n40UjI5qIygFy1-AkEzFFHm/view"
                        target="_blank"
                        onClick={() => scrollToSection("contact")}
                      >
                        Resume
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Desktop Menu */}
            <ul className="gap-5 hidden md:flex">
              <li className="hover:text-blue">
                <a href="#" onClick={() => scrollToSection("home")}>
                  Home
                </a>
              </li>
              <li className="hover:text-blue">
                <a href="#" onClick={() => scrollToSection("about")}>
                  About
                </a>
              </li>
              <li className="hover:text-blue">
                <a href="#" onClick={() => scrollToSection("projects")}>
                  Projects
                </a>
              </li>
              <li className="hover:text-blue">
                <a href="#" onClick={() => scrollToSection("contact")}>
                  Contact
                </a>
              </li>
              <li className="hover:text-blue">
                <a
                  href="https://drive.google.com/file/d/1Z4-YPPSq8n40UjI5qIygFy1-AkEzFFHm/view"
                  target="_blank"
                  onClick={() => scrollToSection("contact")}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </section>
    </Section>
  );
}
