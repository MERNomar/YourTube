import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-between w-full h-10 bg-gray-300">
        <div className="ml-2 text-gray-600 line-clamp-1">
          Developed by{" "}
          <a
            className="font-bold text-gray-800 hover:underline"
            href="https://www.linkedin.com/in/omar-ahmed-a4ab79244/"
            target="_blank"
          >
            MERNOmar
          </a>
        </div>
        <div className="flex mr-3">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/omar-ahmed-a4ab79244/"
            className="w-5 h-5 mr-2 text-lg"
          >
            <FaLinkedin />
          </a>
          <a
            target="_blank"
            href="https://github.com/MERNomar"
            className="w-5 h-5 text-lg"
          >
            <FaGithub />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
