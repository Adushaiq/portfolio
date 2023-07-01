import { useState } from "react";
import HamburgerMenu from "../Assets/Hamburger Menu.png";
import CloseBtn from "../Assets/Close Btn.png";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";

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
          <Link
            to={"/"}
            className="font-bold text-lg"
            onClick={() => scrollToSection("home")}
          >
            Adnan.dev
          </Link>

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
                <div className="fixed inset-0 flex items-center justify-center bg-white">
                  <img
                    src={CloseBtn}
                    onClick={toggleMobileMenu}
                    alt="Close"
                    className="w-6 h-6 absolute top-8 right-10"
                  />

                  <ul className="text-center text-lg flex flex-col gap-3">
                    <li className="hover:text-blue">
                      <Link to={"/"} onClick={() => scrollToSection("home")}>
                        Home
                      </Link>
                    </li>
                    <li className="hover:text-blue">
                      <Link to={"/"} onClick={() => scrollToSection("about")}>
                        About
                      </Link>
                    </li>
                    <li className="hover:text-blue">
                      <Link
                        to={"/"}
                        onClick={() => scrollToSection("projects")}
                      >
                        Projects
                      </Link>
                    </li>
                    <li className="hover:text-blue">
                      <Link to={"/"} onClick={() => scrollToSection("contact")}>
                        Contact
                      </Link>
                    </li>
                    <li className="hover:text-blue">
                      <Link
                        to={"/"}
                        href="https://drive.google.com/file/d/1Z4-YPPSq8n40UjI5qIygFy1-AkEzFFHm/view"
                        target="_blank"
                        onClick={() => scrollToSection("contact")}
                      >
                        Resume
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Desktop Menu */}
            <ul className="gap-5 hidden md:flex">
              <li className="hover:text-blue">
                <Link to={"/"} onClick={() => scrollToSection("home")}>
                  Home
                </Link>
              </li>
              <li className="hover:text-blue">
                <Link to={"/"} onClick={() => scrollToSection("about")}>
                  About
                </Link>
              </li>
              <li className="hover:text-blue">
                <Link to={"/"} onClick={() => scrollToSection("projects")}>
                  Projects
                </Link>
              </li>
              <li className="hover:text-blue">
                <Link to={"/"} onClick={() => scrollToSection("contact")}>
                  Contact
                </Link>
              </li>
              <li className="hover:text-blue">
                <Link
                  to={"/"}
                  target="_blank"
                  onClick={() => scrollToSection("contact")}
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </section>
    </Section>
  );
}
