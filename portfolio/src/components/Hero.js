import Img from "../assets/hero.png";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Hero = () => {
  return (
    <div>
      <secondary className="flex px-8 py-20 backgrdsecondary justify-center flex-col md:flex-row  ">
        <div className="w-1/2 flex flex-col">
          <h1 className=" text-6xl text-white font-hero">
            Hi I'm <br />
            <span className="text-black text-bold hover:text-white">Mani</span>
            kandan K
            <p className="text-2xl py-2">
              B.Tech information technology
              <br />
              Looking for a challenging role in a dynamic, stable organisation
              to utilise my technical and analytical skills for the growth of
              the organisation, as well as to enhance my knowledge on web
              application development.
            </p>
          </h1>
          <div className="flex py-3">
            <a
              href="https://www.linkedin.com/in/manikandan-k1/"
              className="pr-5 hover:text-white"
            >
              <CiLinkedin size={40} />
            </a>
            <a
              href="https://github.com/MANIKANDAN-IT21"
              className="pr-5 hover:text-white"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://github.com/MANIKANDAN-IT21"
              className="pr-5 hover:text-white"
            >
              <FaInstagram size={40} />
            </a>
          </div>
        </div>

        <img className="flex w-1/3 h-[500px]" src={Img} />
      </secondary>
    </div>
  );
};
export default Hero;
