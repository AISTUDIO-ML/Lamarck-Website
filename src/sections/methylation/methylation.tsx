import { methylation } from "assets/images/images";

const Methylation: React.FC = () => {
  return (
    <div className="myContainer !py-20 grid lg:grid-cols-2 gap-10">
      <div className="flex flex-col justify-center">
        <p className="text-primary railway font-bold text-3xl">
          What is the Methylation Cycle?
        </p>
        <p className="text-themeBlack md:text-lg regular mt-8 leading-9">
          The methylation cycle is the process of transferring methyl groups
          (CH3) to DNA, turning switches off and on which change the gene
          expression but not the sequence. The methylation cycle relies on
          folate, B6, B12, B2, choline (60% of dietary methyl groups are from
          choline) and betaine to maintain normal homocysteine levels and
          general homeostasis of the body. The terms “hypomethylation” and
          “hypermethylation” refer to the low or high amount of methyl groups.
          As we age, gradual DNA hypomethylation occurs (increasing the need for
          methyl groups) and several studies show that DNA hypomethylation is
          the main causative factor of defective gene expression.
        </p>
      </div>
      <img
        src={methylation}
        alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
      />
    </div>
  );
};

export default Methylation;
