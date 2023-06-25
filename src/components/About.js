import Lottie from "lottie-react";
import aboutAnimation from "../Assets/animations/116410-hello.json";

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

export default function About() {
  return (
    <Section>
      <section
        id="about"
        className=" mx-auto bg-white min-h-[100vh] flex items-center pt-20 md:pt-0 pb-20 md:pb-0"
      >
        <div className="max-w-[80%] md:max-w-[70%] flex flex-col md:flex-row mx-auto text-center  md:text-left  ">
          <div className="md:max-w-[66%] flex flex-col gap-5">
            <h3 className="font-bold text-blue text-lg animate-slide-fade">
              About Me...
            </h3>

            <p className="font-bold text-primary text-xl md:text-4xl">
              A dedicated Mern-Stack Developer based in Pune, India. 📍
            </p>
            <p className="text-secondary leading-7 text-justify">
              As a 20-year-old MERN stack developer pursuing a bachelor's degree
              in Information Technology, I excel in building dynamic web
              applications using MongoDB, Express.js, React, and Node.js. I
              prioritize clean code and engaging user interfaces. Passionate
              about MERN development, I thrive in collaborative environments.
              Apart from coding, I enjoy playing football.
            </p>
          </div>

          <Lottie animationData={aboutAnimation} />
        </div>
      </section>
    </Section>
  );
}
