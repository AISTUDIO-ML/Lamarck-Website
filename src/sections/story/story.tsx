import { person } from "assets/images/images";

const Story: React.FC = () => {
  return (
    <div className="myContainer !py-20 grid lg:grid-cols-2 gap-10">
      <div className="flex flex-col justify-center">
        <p className="text-primary railway font-bold text-4xl md:text-5xl">
          Success Story
        </p>
        <p className="text-themeBlack railway font-bold text-3xl md:text-4xl py-7">
          Emma's Health Transformation:
        </p>
        <p className="text-themeBlack railway font-bold text-2xl mt-2">
          Emma Says:
        </p>
        <p className="text-themeBlack md:text-xl regular mt-4 md:leading-9">
          <span className="bold">Lamarck™</span> approach was a game-changer for
          me. The personalized insights and supplements have truly transformed
          my health. I feel like I have finally found a solution that works for
          me!"
        </p>
      </div>
      <img
        src={person}
        alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
      />
    </div>
  );
};

export default Story;
