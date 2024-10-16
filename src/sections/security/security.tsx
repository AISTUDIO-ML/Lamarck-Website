import { security } from "assets/images/images";
import { ThemeButton } from "components/components";

const Security: React.FC = () => {
  return (
    <div className="myContainer !pt-20">
      <div className="grid md:grid-cols-7 gap-10 border-[25px] rounded-3xl p-8 border-secondary">
        <div className="md:col-span-4 flex flex-col justify-center">
          <div className="text-primary bg-secondary h-12 w-48 rounded-full flex items-center justify-center">
            <p>Encrypted Security</p>
          </div>
          <p className="text-primary railway font-bold text-3xl mt-8">
            Data Security & Privacy
          </p>
          <p className="text-themeBlack md:text-lg regular py-8 md:leading-9">
            At Deepbody.me, your genetic information is secured with end-to-end
            encryption and processed in a secure private cloud infrastructure.
            We adhere to the highest data protection standards and implement
            strict access controls to ensure your data remains confidential and
            protected. Your privacy is our priority, allowing you to focus on
            your health optimization with peace of mind.
          </p>
          <ThemeButton bgFill content={"Order Your Test Now"} />
        </div>
        <div className="md:col-span-3 flex items-center">
          <img src={security} alt="health_matter" />
        </div>
      </div>
    </div>
  );
};

export default Security;
