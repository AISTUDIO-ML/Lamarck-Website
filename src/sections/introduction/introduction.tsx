import { ceo } from "assets/images/images";

const Introduction: React.FC = () => {
  return (
    <div className="myContainer !py-20 grid lg:grid-cols-2 gap-10">
      <img
        src={ceo}
        alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
      />
      <div className="flex flex-col justify-center">
        <p className="text-primary railway font-bold text-3xl">
          Lamarck™ developed by Deepbody
        </p>
        <p className="text-themeBlack md:text-lg regular mt-8 md:leading-9">
          Lamarck™ is the pioneering platform that seamlessly integrates
          Confidential Private Cloud AI (hosted by Honeypotz) and advanced DNA
          methylation analytics. Designed by Deepbody, Lamarck™ stands at the
          cutting edge of health technology, offering:
        </p>
        <div className="bg-secondary rounded-xl p-5 mt-8">
          <p className="railway font-bold text-lg">
            Personalized Nutrition Plans
          </p>
          <p className="text-sm regular mt-2 leading-6">
            Tailored to your unique genetic profile, ensuring optimal nutrient
            intake for your individual needs.
          </p>
        </div>
        <div className="bg-secondary rounded-xl p-5 mt-8">
          <p className="railway font-bold text-lg">Individualized Therapies</p>
          <p className="text-sm regular mt-2 leading-6">
            Custom-designed therapies based on comprehensive DNA analysis to
            enhance overall well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
