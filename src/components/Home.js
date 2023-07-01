import linkedinIcon from "../Assets/icons8-linkedin (1).svg";
import githubIcon from "../Assets/icons8-github.svg";
import javascript from "../Assets/icons8-javascript-48.png";
import mongoDb from "../Assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-48.png";
import express from "../Assets/icons8-express-js-48.png";
import reactJs from "../Assets/icons8-react-native-48.png";
import nodeJs from "../Assets/icons8-nodejs-48.png";
import tailwindCss from "../Assets/icons8-tailwindcss-48.png";
import html from "../Assets/icons8-html-5-48.png";
import css from "../Assets/icons8-css-48.png";

import Lottie from "lottie-react";
import heroAnimation from "../Assets/animations/141279-codingwithcoffile.json";

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

export default function Home() {
  return (
    <Section>
      <section
        id="home"
        className="bg-bgColor1 min-h-[100vh] pt-10 pb-10 flex flex-col  "
      >
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-center md:max-w-[70%] mx-auto   text-primary ">
          {/* Left Section */}
          <div className="max-w-[80%] md:max-w-[50%] flex flex-col gap-5">
            <div>
              <h2 className="font-bold text-4xl md:text-6xl">Mern-Stack</h2>
              <div className="flex gap-4">
                <span className="font-bold text-4xl md:text-6xl">
                  Developer
                </span>
                <img
                  className="w-[40px] h-[40px] md:w-[70px] md:h-[70px]"
                  src="data:image/png;base64,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"
                ></img>
              </div>
            </div>
            <p className="text-secondary text-lg ">
              Hi, I'm Adnan Shaikh. A passionate Mern-Stack Developer based in
              Pune, India. 📍
            </p>
            <div className="flex justify-start gap-2">
              <a href="https://www.linkedin.com/in/adushaiq" target="_blank">
                <img src={linkedinIcon} />
              </a>
              <a href="https://github.com/adushaiq" target="_blank">
                <img src={githubIcon} />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="max-w-[80%] md:max-w-[50%] mx-auto ">
            <Lottie animationData={heroAnimation} />
          </div>
        </div>

        {/* Tech Stack */}
        <div className="max-w-[70%]  flex flex-wrap md:flex-row gap-10 justify-center md:justify-start text-primary mx-auto">
          <div className="font-semibold flex flex-col md:flex-row items-center gap-5 text-lg ">
            <span className="text-blue md:text-inherit">Tech Stack</span>
            <span className="bg-primary h-[2px] w-[150px] md:hidden"></span>
            <span className="text-2xl font-normal hidden md:flex">|</span>
          </div>

          <div className="flex flex-wrap md:flex-row justify-center gap-5">
            <div className="bg-white shadow-bottom p-2 rounded-full hover:-translate-y-2 cursor-pointer transition-all duration-200 ">
              <img src={html} />
            </div>
            <div className="bg-white shadow-bottom p-2 rounded-full hover:-translate-y-2 cursor-pointer transition-all duration-200 ">
              <img src={css} />
            </div>
            <div className="bg-white shadow-bottom p-2 rounded-full hover:-translate-y-2 cursor-pointer transition-all duration-200 ">
              <img src={javascript} />
            </div>
            <div className="bg-white shadow-bottom p-2 rounded-full hover:-translate-y-2 cursor-pointer transition-all duration-200 ">
              <img src={reactJs} />
            </div>
            <div className="bg-white shadow-bottom p-2 rounded-full hover:-translate-y-2 cursor-pointer transition-all duration-200 ">
              <img src={nodeJs} />
            </div>
            <div className="bg-white shadow-bottom p-2 rounded-full hover:-translate-y-2 cursor-pointer transition-all duration-200 ">
              <img src={express} />
            </div>
            <div className="bg-white shadow-bottom p-2 rounded-full hover:-translate-y-2 cursor-pointer transition-all duration-200 ">
              <img src={mongoDb} />
            </div>
            <div className="bg-white shadow-bottom p-2 rounded-full hover:-translate-y-2 cursor-pointer transition-all duration-200 ">
              <img src={tailwindCss} />
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
}
