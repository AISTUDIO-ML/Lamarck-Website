import { box } from "assets/images/images";
import { ThemeButton } from "components/components";

const community = [
  {
    title: "Choose Your Package",
    description:
      "Select from various packages tailored to meet your unique health needs.",
    href: "",
  },
  {
    title: "Place Your Order",
    description: "Complete the secure checkout process quickly and easily.",
    href: "",
  },
  {
    title: "Receive Your Test Kit",
    description:
      "We’ll deliver your DNA methylation test kit right to your door.",
    href: "",
  },
  {
    title: "Collect & Send Your Sample",
    description:
      "Follow the easy instructions to provide a sample and send it back to us.",
    href: "",
  },
  {
    title: "Get Your Personalized Plan",
    description:
      "Receive your comprehensive genetic report and personalized supplement recommendations.",
    href: "",
  },
];

const Community: React.FC = () => {
  return (
    <div id="platform" className="myContainer !pb-20">
      <div className="text-primary bg-secondary w-52 h-11 rounded-full flex items-center justify-center">
        <p>How To Place Order</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-center mt-3 gap-3 md:gap-0">
        <p className="text-primary text-3xl semibold">Order Placement</p>
        <div className="flex items-center gap-3">
          <ThemeButton content={"Get Started with 10% off"} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-center mt-5 gap-3 md:gap-0">
        <p className="text-3xl railway font-bold">
          Ready To Begin Your Health Journey?
        </p>
      </div>
      <div className="flex flex-col gap-5 mt-7">
        {community.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-7"
            >
              <div className="bg-primary text-white h-11 w-12 rounded-full flex justify-center items-center text-xl">
                <p className="lexend font-semibold">{index + 1}</p>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-5 border border-themeGray-300 w-full px-5 py-3 rounded-lg md:rounded-full">
                <img
                  src={box}
                  alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
                  width={50}
                />
                <div>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="railway font-bold text-2xl hover:underline"
                  >
                    {item.title}
                  </a>
                  <p className="text-themeGray-500 mt-1 regular">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Community;
