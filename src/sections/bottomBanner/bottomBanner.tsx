import { banner_image, banner_mask } from "assets/images/images";
import { ThemeButton } from "components/components";
import "./bottomBanner.css";

const BottomBanner: React.FC = () => {
  const backgroundImage: React.CSSProperties = {
    backgroundImage: `url(${banner_mask})`,
  };
  return (
    <div className="myContainer !pt-20 !pb-0">
      <div
        style={backgroundImage}
        className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center md:px-14 p-5 background shadow-xl lg:shadow-none"
      >
        <div>
          <p className="semibold text-primary md:text-4xl text-2xl md:leading-[45px]">
            Unlock Exclusive Access to Our{" "}
            <span className="text-secondary">Premium Security Solutions!</span>
          </p>
          <p className="text-sm leading-7 mt-5 md:w-[450px] semibold">
            Protect your business with AI-powered cybersecurity. Sign up now and
            get a free trial with full access to our most advanced features.
          </p>
          <div className="mt-5">
            <ThemeButton bgFill content={"Get Started – It's Free!"} />
          </div>
        </div>
        <img src={banner_image} alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI" width={380} className="lg:mr-16" />
      </div>
    </div>
  );
};

export default BottomBanner;
