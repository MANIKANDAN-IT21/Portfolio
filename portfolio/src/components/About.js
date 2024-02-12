import about from "../assets/about.png";

const Mithun = () => {
  return (
    <thrid className="flex flex-col md:flex-row backgrdsec px-5" id='about'>
      <div className="md:w-1/2">
        <img className=" h-[500px] py-3 " src={about} />
      </div>
      <div className=" md:w-1/2 flex justify-center ">
        <div className=" w-1/2 flex flex-col justify-center text-white font-hero">
          <h1 className="text-4xl border-b-4 border-[rgb(91 10 241)] w-[175px] mb-5 font-bold">
            About Me
          </h1>
          <p className="font-hero">Passionate Full Stack Developer with [X years] of hands-on experience creating robust and scalable web applications. Proficient in both front-end and back-end technologies, including [mention specific technologies or languages, e.g., JavaScript, React, Node.js, MongoDB].
           Proven track record of delivering high-quality solutions within tight deadlines. Strong problem-solving skills and a collaborative mindset, adept at working in cross-functional teams. Excited about contributing technical expertise to drive innovation and elevate user experiences.</p>
        </div>
      </div>
    </thrid>
  );
};
export default Mithun;
