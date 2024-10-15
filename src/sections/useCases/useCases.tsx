import {
  logo,
  security_group,
  deap_id,
  unique_image,
} from "assets/images/images";
import { lock, protect } from "assets/icons/icons";

const UseCases: React.FC = () => {
  return (
    <div id="solutions" className="myContainer !pt-10">
      <div className="flex flex-col items-center">
        <div className="text-secondary bg-secondaryLight w-44 h-11 rounded-full flex items-center justify-center">
          <p>Use Cases</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 mt-5">
          <p className="text-primary text-center text-3xl semibold">
            Use Case In Real World With
          </p>
          <img
            alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
            src={logo}
            width={170}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        <div className="bg-secondaryLight p-4 rounded-3xl">
          <div className="bg-white rounded-3xl flex justify-center items-center h-60">
            <img
              src={deap_id}
              alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
              width={240}
            />
          </div>
          <p className="text-center semibold mt-7">
            EKG Identity Validation with NASA
          </p>
          <div className="flex justify-center">
            <img
              src={security_group}
              alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
              className="mt-7"
            />
          </div>
          <div className="bg-white mt-7 rounded-3xl flex flex-col justify-around items-center h-72 p-5 text-sm text-black/60">
            <p>
              The data was taken from 1,000 EKG records, was preproccessed and
              then sliced into two sets: 70% for training and 30% for
              validation. The Deepbeat ID model has achieved 90% accuracy.
            </p>
            <p>
              In order to increase the accuracy of the model we would add more
              EKG records. As more EKG records get stored in the database this
              would increase the training set.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:col-span-2 gap-5">
          <div className="md:col-span-2 bg-secondaryLight p-4 rounded-3xl">
            <div className="bg-white rounded-3xl h-auto flex justify-between">
              <div className="p-7 w-[360px] flex flex-col justify-around">
                <p className="bold text-3xl">
                  Create Unique{" "}
                  <span className="text-secondary">Solutions</span>
                </p>
                <p className="semibold opacity-80 py-7 md:py-0">
                  Develop innovative products and services that include built-in
                  security and privacy to meet growing customer expectations and
                  comply with strict regulations.
                </p>
                <p className="text-secondary semibold">Learn more -&gt;</p>
              </div>
              <div className="md:flex justify-end hidden">
                <img
                  src={unique_image}
                  alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
                  width={"80%"}
                  height={"auto"}
                />
              </div>
            </div>
          </div>
          <div className="bg-secondaryLight p-7 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="h-12 bg-white w-12 rounded-full flex items-center justify-center">
                <img
                  src={protect}
                  alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
                  className="mt-1"
                />
              </div>
              <p className="bold text-2xl mt-5">
                Protect Your Data from Threats
              </p>
              <p className="opacity-60 mt-7">
                Operate your applications and manage your data securely,
                ensuring they remain hidden from hackers, internal risks,
                malware, and even cloud providers.
              </p>
            </div>
            <p className="text-secondary semibold">Learn more -&gt;</p>
          </div>
          <div className="bg-secondaryLight p-6 rounded-3xl">
            <div className="h-12 bg-white w-12 rounded-full flex items-center justify-center">
              <img
                src={lock}
                alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
              />
            </div>
            <p className="bold text-2xl mt-5">
              Innovate Through Secure Collaboration
            </p>
            <p className="opacity-60 mt-7">
              Multiple organizations, including competitors, can work together
              and share insights to tackle shared challenges while keeping each
              other’s data completely private and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
