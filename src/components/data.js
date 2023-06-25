import projectBlog from "../Assets/React-App.png";
import devPng from "../Assets/Dev-Detective.png";
import portfolioV1 from "../Assets/Adnan-Shaikh-Portfolio.png";

const data = [
  {
    id: 1,
    title: "Campus Connect",
    description:
      "A platform for Students to share their stories, ideas, and perspective with the campus community.",
    techUsed: ["MongoDB", "ExpressJS", "React", "NodeJS"],
    projectLink: "https://github.com/adushaiq",
    githubLink: "https://github.com/adushaiq",
    image: projectBlog,
  },
  {
    id: 2,
    title: "Portfolio V1",
    description:
      "A simple Portfolio website made with Html, TailwindCss, Javascript.",
    techUsed: ["Html", "TailwindCSS", "Javascript"],
    projectLink: "https://adushaiq.github.io/portfolio/",
    githubLink: "https://github.com/adushaiq/portfolio",
    image: portfolioV1,
  },
  {
    id: 3,
    title: "Dev Detective",
    description:
      "Find the GitHub profiles and repositories you need with lightning-fast search.",
    techUsed: ["Html", "TailwindCSS", "Javascript"],
    projectLink: "https://adushaiq.github.io/DevDetective/",
    githubLink: "https://github.com/Adushaiq/DevDetective",
    image: devPng,
  },
  
];

export default data;
