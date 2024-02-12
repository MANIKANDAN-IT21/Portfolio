import resume from "../assets/resume.jpg";

const Vikhas = () => {
  return (
    <thrid className="flex flex-col md:flex-row backgrdsec px-5" id="resume">
      <div className="md:w-1/2 flex justify-center">
        <img className="h-[500px] py-3" src={resume} />
      </div>
      <div className=" md:w-1/2 flex justify-center font-hero ">
        <div className=" w-1/2 flex flex-col justify-center text-white ">
          <h1 className="text-4xl border-b-4 border-[rgb(91 10 241)] w-[145px] mb-5 font-bold">
            Resume
          </h1>
          <p className="">
            Experienced Full Stack Developer with proficiency in front-end
            technologies like React and back-end technologies including Node.js.
            Expertise in database management with MongoDB. Proven track record
            of delivering scalable web applications within deadlines. Strong
            collaborator in cross-functional teams, ensuring seamless project
            execution. Passionate about staying updated with the latest
            technologies to drive innovation.
            <br />{" "}
            <a className="btn flex justify-center" href="#">
              Download
            </a>
          </p>
        </div>
      </div>
    </thrid>
  );
};
export default Vikhas;
