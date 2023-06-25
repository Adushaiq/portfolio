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

export default function Contact() {
  return (
    <Section>
      <section id="contact">
        <div className="bg-white min-h-[100vh] flex items-center">
          <div className="max-w-[80%] md:max-w-[70%] mx-auto text-center  ">
            <div className=" md:max-w-[70%] mx-auto flex flex-col gap-5">
              <h3 className="font-bold text-blue text-lg ">Contact me</h3>
              <p className="font-bold text-primary text-xl md:text-4xl">
                Reach Out, Let's Bring Your <br /> Ideas to Life!
              </p>
              <p className="text-secondary leading-7">
                Feel free to reach out anytime! My inbox is open for your
                questions, updates, or just to say hello. I'll do my best to get
                back to you promptly. Feel free to share any relevant job
                updates as well. Looking forward to connecting with you!
              </p>
              <a
                href="mailto: addushaiq123@gmail.com"
                className="p-5 bg-blue hover:bg-white border-blue border-2 md:w-[30%] flex mx-auto justify-center rounded-lg text-white hover:text-blue text-xl font-semibold transition-all duration-75 ease-linear"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
}
