import resume from "../assets/resume.jpg";

const Constact = () => {
  return (
    <final
      className="flex flex-col backgrdsecondary px-5 py-32  text-white"
      id="constact"
    >
      <div className="  flex flex-col items-center font-hero">
        <h1 className="text-4xl border-b-4 border-[rgb(91 10 241)] w-[145px] mb-5 font-bold">
          Contact
        </h1>
        <p className="pb-5">
          I declare that all the details provided above are true to the best of
          my knowledge{" "}
        </p>
        <p className="py-2">
          <span>Email Id: maikamaraj.k@gmail.com</span>
        </p>
        <p className="py-2">
          <span>Phone No: 8754124935</span>
        </p>
        <p className="py-2">
          <span>Location: Ariyalur, Tamilnadu</span>
        </p>
      </div>
    </final>
  );
};
export default Constact;
