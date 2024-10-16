import { homocysteine } from "assets/images/images";

const Homocysteine: React.FC = () => {
  return (
    <div className="myContainer !py-20 grid lg:grid-cols-2 gap-10">
      <img
        src={homocysteine}
        alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
      />
      <div className="flex flex-col justify-center">
        <p className="text-primary railway font-bold text-3xl">
          What is Homocysteine?
        </p>
        <p className="text-themeBlack md:text-lg regular mt-8 md:leading-9">
          Homocysteine is a non-protein amino acid that is produced from
          methionine, can be recycled back into methionine and converted into
          cysteine in the methylation cycle. Variants in the MTHFR C677T, MTHFR
          A1298C, PEMT, and genes like CBS that require higher amounts of B6 can
          lead to elevated homocysteine due to the higher need for the folate,
          choline, betaine (beets, spinach quinoa) B12, B6, and other
          co-factors.
        </p>
        <div className="bg-secondary rounded-xl p-5 mt-8 text-sm regular">
          <p>
            High homocysteine levels have been connected to depression, blood
            clots, inflammation, macular degeneration, dementia, and cancer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homocysteine;
