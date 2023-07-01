import Header from "../components/Header";
import { useRef } from "react";
import { useInView } from "framer-motion";
import linkSvg from "../Assets/icons8-web-link-40.png";
import githubSvg from "../Assets/icons8-github.svg";
import { archiveData } from "../components/data";

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

export default function ProjectArchive() {
  return (
    <div>
      <Header />

      <Section>
        <div className="bg-blue min-h-[100vh]">
          <div className="max-w-[80%] md:max-w-[70%] mx-auto">
            <h2 className="font-bold text-5xl text-primary pt-20">
              Archive...
            </h2>
            <p className="text-lg text-white mt-3 mb-10">
              A List of things i have worked on
            </p>

            <div className="flex flex-col gap-6">
              <ul className="flex w-[100%] px-3 justify-between font-semibold">
                <li className="hidden md:flex w-[10%] text-center">Year</li>
                <li className="min-w-[30%]">Title</li>
                <li className="hidden md:flex min-w-[50%] ">Tech Used</li>
                <li className="w-[30%] md:w-[10%] text-center">Links</li>
              </ul>

              {archiveData.map((project) => (
                <div className="group flex items-center w-[100%] justify-between bg-white p-3 rounded-lg shadow-bottom">
                  <p className="hidden md:flex w-[10%] text-center text-blue font-semibold">
                    {project.year}
                  </p>
                  <h3 className="min-w-[30%] group-hover:text-blue font-semibold transition-all duration-500">
                    {project.title}
                  </h3>
                  <ul className="min-w-[50%] md:flex hidden md:flex-row gap-2 justify-start text-xs font-semibold">
                    {project.techUsed.map((tech) => (
                      <li>{tech}</li>
                    ))}
                  </ul>
                  <div className="w-[25%] md:w-[10%] flex justify-center gap-2">
                    <a href={project.projectLink} target="_blank">
                      <img className="w-[30px]" src={linkSvg} alt="" />
                    </a>
                    <a href={project.githubLink} target="_blank">
                      <img className="w-[30px]" src={githubSvg} alt="" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
