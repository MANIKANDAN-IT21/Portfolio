import ecom from "../assets/ecommerce-websites.jpg";
import ecom2 from "../assets/food-ecommerce.jpg";
import ecom3 from "../assets/website-blog.jpg";

const Nithish = () => {
  return (
    <fourth className="flex flex-col py-20 px-5 justify-center backgrdsecondary text-white md:flex-row" id="project">
      <div className="w-full">
        <div className="flex flex-col px-10 py-5 font-hero">
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">
            Projects
          </h1>
          <p>
          Designed and implemented a feature-rich online marketplace from conception to deployment.
           Developed responsive and intuitive user interfaces using React for the front end. Implemented robust server-side logic with Node.js and Express, ensuring seamless communication with the MongoDB database. Integrated third-party APIs for payment processing, enhancing the platform's functionality. Employed agile methodologies to iteratively enhance features, 
          resulting in a scalable and user-friendly e-commerce solution.
          </p>
        </div>
      </div>
      <div className="w-full ">
        <div className="flex flex-col md:flex-row px-10 gap-5 ">
          <div className="relative">
            <img className="h-[200px] " src={ecom} />
            <div className="opacity">
              <p className="text-center px-5 py-5">my project is very worst1</p>
            </div>
          </div>

          <div className="relative">
            <img className="h-[200px] " src={ecom2} />
            <div className="opacity ">
              <p className="text-center px-5 py-5">my project is very worst2</p>
            </div>
          </div>

          <div className="relative">
            <img className="h-[200px]" src={ecom3} />
            <div className="opacity">
              <p className="text-center px-5 py-5">my project is very worst3</p>
            </div>
          </div>
        </div>
      </div>
    </fourth>
  );
};
export default Nithish;
