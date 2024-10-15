import { usecase_1, usecase_2, usecase_3 } from "assets/images/images";

const CaseStudies: React.FC = () => {
  return (
    <div id="usecases" className="myContainer">
      <div className="flex flex-col items-center">
        <div className="text-secondary bg-secondaryLight w-44 h-11 rounded-full flex items-center justify-center">
          <p>Case Studies</p>
        </div>
        <p className="text-primary text-3xl md:text-5xl semibold mt-5 text-center">
          Real World <span className="text-secondary">Case Studies</span>
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mt-16">
        <div className="flex flex-col justify-around h-[100%]">
          <div>
            <p className="text-lg semibold">CASE STUDY 1</p>
            <p className="font-bold lexend md:leading-snug md:text-5xl text-2xl mt-3">
              Secure Healthcare Diagnostics
            </p>
          </div>
          <p className="md:leading-9 opacity-70 md:text-lg text-themeBlack mt-5 lg:mt-0">
            Utilizing confidential AI, sensitive medical data can be analyzed
            securely for diagnostic purposes, ensuring patient privacy while
            enabling advanced healthcare insights and personalized treatment
            recommendations.
          </p>
        </div>
        <img src={usecase_1} alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI" />
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mt-16">
        <img src={usecase_2} alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI" />
        <div className="flex flex-col justify-around h-[100%]">
          <div>
            <p className="text-lg semibold">CASE STUDY 2</p>
            <p className="font-bold lexend md:leading-snug md:text-5xl text-2xl mt-3">
              Quantum Armor Technology
            </p>
          </div>
          <p className="md:leading-9 opacity-70 md:text-lg text-themeBlack mt-5 lg:mt-0">
            Authentic Ai revolutionizes AI security by embedding robust defenses
            at the CPU level, providing an impregnable shield against all
            potential threats. Safeguard your AI and ML models with unparalleled
            protection, ensuring resilience in the face of evolving risks and
            challenges.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mt-16">
        <div className="flex flex-col justify-around h-[100%]">
          <div>
            <p className="text-lg semibold">CASE STUDY 3</p>
            <p className="font-bold lexend md:leading-snug md:text-5xl text-2xl mt-3">
              Border Crossings
            </p>
          </div>
          <p className="md:leading-9 opacity-70 md:text-lg text-themeBlack mt-5 lg:mt-0">
            Border crossings can be a daunting prospect for many travelers, with
            lengthy queues and tedious document checks often causing delays and
            frustration. DeepBeat ID offers a solution to this challenge. By
            leveraging advanced biometric technology, DeepBeat ID enables
            travelers to seamlessly cross borders without the need for
            traditional passports or IDs.
          </p>
        </div>
        <img src={usecase_3} alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI" />
      </div>
    </div>
  );
};

export default CaseStudies;
