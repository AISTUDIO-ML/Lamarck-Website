import { ai_studio, hero_image } from "assets/images/images";
import { ThemeButton } from "components/components";

const Home: React.FC = () => {
  return (
    <div className="myContainer !py-20 grid lg:grid-cols-2 gap-10">
      <div className="flex flex-col justify-center">
        <div className="h-12 text-primary bg-secondary w-72 rounded-full flex items-center justify-center">
          <p className="medium">Unlock Your Health Potential</p>
        </div>
        <p className="railway font-bold text-4xl mt-7 leading-snug text-themeBlack">
          Unlock Your <span className="text-primary">DNA's Potential</span> for
          Health & Wellness
        </p>
        <p className="text-themeBlack railway font-bold text-lg mt-6 leading-9">
          Revolutionary DNA methylation testing and personalized supplements for
          optimal health
        </p>
        <p className="regular mt-7 md:text-lg md:leading-9">
          Explore a new era of health with Deepbody. Our advanced DNA
          methylation testing uncovers unique insights into your genetic makeup,
          enabling us to craft personalized supplements just for you. By
          understanding how your genes interact with your environment, we
          provide tailored solutions to boost your well-being. Begin your
          journey today and unlock your DNA’s full potential.
        </p>
        <ThemeButton content={"Order Your Test Now"} className="mt-7" />
      </div>
      <img
        src={hero_image}
        alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
      />
    </div>
  );
};

export default Home;
