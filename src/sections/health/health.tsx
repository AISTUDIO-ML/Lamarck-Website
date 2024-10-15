import { health_care } from "assets/images/images";

const data = [
  {
    title: "Urea Cycle",
    description: "Detoxifies ammonia.",
  },
  {
    title: "Neurotransmitter Cycle",
    description: "Produces mood-regulating neurotransmitters.",
  },
  {
    title: "Folate Cycle",
    description: "Supports DNA repair and thymidine production.",
  },
  {
    title: "Methionine Cycle",
    description: "Recycles vitamin B12 and creates vital methyl groups.",
  },
  {
    title: "Transsulfuration Cycle",
    description: "Detoxifies sulfur and prevents oxidative stress.",
  },
];

const Health: React.FC = () => {
  return (
    <div className="myContainer flex flex-col items-center text-center">
      <div className="text-primary bg-secondary h-12 w-52 rounded-full flex items-center justify-center">
        <p>Key to Your Health</p>
      </div>
      <p className="railway font-bold text-3xl md:text-5xl text-primary mt-7">
        The Yasko Methylation Cycle
      </p>
      <p className="railway font-bold text-2xl md:text-4xl text-themeBlack mt-8">
        The 5 Cycles Behind Your Body's Vital Functions
      </p>
      <p className="text-themeBlack/70 md:text-xl mt-10 leading-9 md:leading-10">
        he Yasko Methylation Cycle drives essential processes in your body, from
        detoxifying harmful substances to producing neurotransmitters and
        regulating gene expression. These 5 interconnected cycles work together
        to support your overall health
      </p>
      <div className="flex flex-wrap justify-center gap-7 mt-10">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-themeBorder w-96 px-5 rounded-xl flex flex-col items-center justify-center min-h-36"
            >
              <p className="bold text-themeBlack text-xl">{item.title}</p>
              <p className="regular leading-7 mt-3">{item.description}</p>
            </div>
          );
        })}
      </div>
      <img
        className="mt-10"
        src={health_care}
        alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
      />
    </div>
  );
};

export default Health;
