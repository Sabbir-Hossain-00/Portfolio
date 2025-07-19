import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

import "../../../styles/animations.css";
export const Hero = () => {
  return (
    <div className=" py-14 px-0 ">
      <div className=" flex flex-col lg:flex-row-reverse justify-between items-center ">
        
        <div className="lg:w-1/2 flex justify-end py-10 ">
          <img
            src="/sabbir.png"
            className="rounded-full shadow-[0_1px_80px_rgba(34,197,94,0.5)] border-2 border-green-500  shadow-green-800 w-50 h-50 md:w-100 md:h-100 float-animation "
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-medium mt-4">Hello, I'm </h2>
          <h1 className="text-4xl mt-2 font-bold">Sabbir Hossain</h1>
          <h2 className="text-2xl font-medium mt-4">
            And I'm a —{" "}
            <span className="text-green-500 font-bold">
              <Typewriter
                words={[
                  "Web Developer !",
                  "React Developer !",
                  "MERN Stack Developer !",
                ]}
                loop={Infinity}
                cursor
                cursorStyle=" _ "
                typeSpeed={70}
                deleteSpeed={50}
              />
            </span>
          </h2>
          <p className="py-6">
            I love turning ideas into interactive web experiences — solving
            problems with clean, responsive, and user-friendly apps.
          </p>

          <div className="flex gap-6 items-center">
            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-green-500 border-none shadow-none text-black"
            >
              Resume
            </a>
            {/* Social Links */}
            <div className="flex items-center gap-4 text-xl">
              <a
                href="https://www.linkedin.com/in/sabbir-hossain-0595b1301/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-green-500 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Sabbir-Hossain-00"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-green-500 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/ms7398037"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-green-500 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
