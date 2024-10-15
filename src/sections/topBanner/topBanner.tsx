import { cross_icon } from "assets/icons/icons";

const TopBanner: React.FC = () => {
  return (
    <div className="text-sm md:text-base myContainer">
      <div className="bg-secondary text-xs md:text-base w-full md:py-3 p-5 rounded-full flex items-center justify-between px-5">
        <div></div>
        <p className="text-primary semibold">
          Unlock the secrets within your DNA and discover a customized health
          plan designed to enhance your well-being.
        </p>
        <img src={cross_icon} alt="close" width={15} />
      </div>
    </div>
  );
};

export default TopBanner;
