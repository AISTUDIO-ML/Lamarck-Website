import { health_matter } from "assets/images/images";

const HealthMatters: React.FC = () => {
  return (
    <div className="myContainer !py-20">
      <div className="grid grid-cols-7 gap-10 border-[25px] rounded-3xl p-5 border-secondary">
        <div className="col-span-3">
          <img src={health_matter} alt="health_matter" />
        </div>
        <div className="col-span-4 flex flex-col justify-center">
          <div className="text-primary bg-secondary h-12 w-48 rounded-full flex items-center justify-center">
            <p>Health matters</p>
          </div>
          <p className="text-primary railway font-bold text-3xl mt-8">
            Health Optimization & Wellness
          </p>
          <p className="text-themeBlack md:text-lg regular mt-8 md:leading-9">
            Leverage DNA methylation testing to fine-tune your diet, lifestyle,
            and health routines for optimal well-being. Deepbody.me provides
            personalized diet plans, lifestyle recommendations, and holistic
            health strategies informed by your genetic insights. These
            actionable recommendations empower you to make informed decisions
            that enhance your overall health and quality of life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthMatters;
