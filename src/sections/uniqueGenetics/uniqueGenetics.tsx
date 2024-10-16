import { deepbody } from "assets/images/images";

const UniqueGenetics: React.FC = () => {
  return (
    <div className="myContainer grid lg:grid-cols-2 gap-10">
      <div className="flex flex-col justify-center">
        <div className="text-primary bg-secondary h-12 w-48 rounded-full flex items-center justify-center">
          <p>Unique genetics</p>
        </div>
        <p className="text-primary railway font-bold text-3xl mt-8">
          Personalized Supplements
        </p>
        <p className="text-themeBlack railway font-bold text-3xl mt-3">
          Based on Your DNA
        </p>
        <p className="text-themeBlack md:text-lg regular mt-8 md:leading-9">
          Harness your genetic data to create tailored supplements that meet
          your specific health needs. Deepbody.me formulates supplements based
          on your DNA to enhance energy, mental clarity, immune function, and
          nutrient utilization. Our customized formulas ensure that each
          supplement addresses your unique genetic markers, providing targeted
          benefits that support your overall health and vitality.
        </p>
      </div>
      <img
        src={deepbody}
        alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
      />
    </div>
  );
};

export default UniqueGenetics;
