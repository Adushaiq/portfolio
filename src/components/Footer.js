import linkedIn from "../Assets/icons8-linkedin (1).svg";
import github from "../Assets/icons8-github.svg";

export default function Footer() {
  return (
    <div className="bg-blue ">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-7 h-[120px] md:h-[100px] max-w-[80%] mx-auto text-primary md:text-lg  ">
        Developed by Adnan Shaikh
        <span className="text-4xl hidden md:flex ">|</span>
        <span className="flex gap-1">
          <a href="https://www.linkedin.com/in/adushaiq" target="_blank">
            <img src={linkedIn} />
          </a>
          <a href="https://github.com/Adushaiq" target="_blank">
            <img src={github} />
          </a>
        </span>
      </div>
    </div>
  );
}
