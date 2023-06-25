import linkSvg from "../Assets/icons8-web-link-40.png";
import githubSvg from "../Assets/icons8-github.svg";
import data from "../components/data";

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
          transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) .5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Projects() {
  return (
    <Section>
      <section id="projects" className="bg-blue pt-20 pb-20">
        <div className="max-w-[80%] md:max-w-[70%] mx-auto text-left  ">
          <div className=" flex flex-col gap-5">
            <h3 className="font-bold text-primary text-lg ">Portfolio...</h3>
            <p className="font-bold text-white text-xl md:text-2xl md:max-w-[60%]">
              Each project is a customized masterpiece, built with precision and
              care. 👨🏻‍💻
            </p>

            <div className="flex flex-col gap-20 pt-10 md:pt-20 ">
              {data.map((project) => (
                <div
                  className={`flex flex-col ${
                    project.id % 2 == 0 ? "md:flex-row " : "md:flex-row-reverse"
                  } items-center gap-5 md:gap-0  mx-auto text-primary group bg-white p-2 rounded-xl`}
                >

                  {/* Image Section */}
                  <div className="md:max-w-[50%] shadow-bottom  rounded-lg ">
                    <img
                      className="rounded-xl border-primary border-2"
                      src={project.image}
                    />
                  </div>

                  <div className="bg-primary h-[1px] w-[50%] md:hidden"></div>
                  
                  {/* Details Section */}
                  <div className="flex flex-col gap-2 md:px-5 pb-5 md:pb-0 items-center">
                    <a href={project.projectLink} target="_blank" className="font-bold group-hover:text-blue">
                      {project.title}
                    </a>
                    <p className="px-2 text-center text-sm md:max-w-[70%]">{project.description}</p>
                    <ul className="flex px-2 text-sm gap-2 font-semibold text-primary ">
                      {project.techUsed.map((tech) => {
                        return <li>{tech}</li>;
                      })}
                    </ul>
                    <div className="flex items-center gap-2">
                      <a href={project.projectLink} target="_blank">
                        <img src={linkSvg} className="w-[35px] h-[35px]  " />
                      </a>
                      <a href={project.githubLink} target="_blank">
                        <img src={githubSvg} />
                      </a>
                    </div>
                  </div>

                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
}
