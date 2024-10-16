import { basket, files, tablets } from "assets/icons/icons";
import { steps } from "assets/images/images";

const data = [
  {
    id: 1,
    icon: basket,
    title: "Order Your Test Kit",
    description:
      "Order your DNA methylation test kit online. We’ll deliver it straight to your door with simple instructions for the next steps.",
  },
  {
    id: 2,
    icon: files,
    title: "Collect Your Sample",
    description:
      "Follow the easy instructions to collect your DNA sample using the kit. Once done, use the prepaid envelope to send your sample back to our lab.",
  },
  {
    id: 3,
    icon: tablets,
    title: "Get Results & Supplements",
    description:
      "After analyzing your sample, we’ll provide you with a detailed report. Based on your results, we’ll create personalized supplements to help you reach your health goals.",
  },
];

const Process: React.FC = () => {
  return (
    <>
      <div className="relative -z-10 hidden md:block">
        <img
          src={steps}
          alt="steps"
          width={"100%"}
          className="absolute top-72"
        />
      </div>
      <div className="myContainer flex flex-col items-center text-center !pt-10 !pb-20">
        <div className="text-primary bg-secondary h-12 w-52 rounded-full flex items-center justify-center">
          <p>Our Process</p>
        </div>
        <p className="railway font-bold text-3xl md:text-5xl text-primary mt-7">
          How Lamarck™ Works
        </p>
        <p className="railway font-bold text-2xl md:text-4xl text-themeBlack mt-8">
          Our Proven Steps
        </p>
        <div className="grid md:grid-cols-3 gap-10 mt-14">
          {data.map((item, index) => {
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 bg-white h-24 flex items-center justify-center shadow-lg rounded-full relative">
                  <div className="absolute top-0 left-0 shadow-lg h-7 w-7 rounded-full flex items-center justify-center">
                    <p className="semibold text-sm text-primary">{item.id}</p>
                  </div>
                  <img src={item.icon} alt="icon" />
                </div>
                <p className="railway font-bold text-lg md:text-2xl text-themeBlack mt-7">
                  {item.title}
                </p>
                <p className="railway text-sm md:text-base text-themeBlack mt-5">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Process;
