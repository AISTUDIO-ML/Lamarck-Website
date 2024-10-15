import { ai } from "assets/images/images";

const ScalableSolutions: React.FC = () => {
  return (
    <div id="company" className="myContainer !py-16">
      <div className="flex flex-col items-center">
        <div className="text-secondary bg-secondaryLight w-44 h-11 rounded-full flex items-center justify-center">
          <p>Use Cases</p>
        </div>
        <p className="text-primary  text-3xl semibold mt-5 text-center">
          Scalable Solutions to Meet Your Needs
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 mt-12">
        <div className="flex flex-col gap-5">
          <div className="bg-secondaryLight rounded-full h-14 flex justify-center items-center semibold text-lg">
            <p>Governance</p>
          </div>
          <div className="bg-secondaryLight rounded-full h-14 flex justify-center items-center semibold text-lg">
            <p>Status Alerts</p>
          </div>
          <div className="bg-secondaryLight rounded-full h-14 flex justify-center items-center semibold text-lg">
            <p>Communication</p>
          </div>
        </div>
        <div className="hidden md:flex items-center">
          <img src={ai} alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="bg-secondaryLight rounded-full h-14 flex justify-center items-center semibold text-lg">
            <p>Task Activity</p>
          </div>
          <div className="bg-secondaryLight rounded-full h-14 flex justify-center items-center semibold text-lg">
            <p>Dashboard</p>
          </div>
          <div className="bg-secondaryLight rounded-full h-14 flex justify-center items-center semibold text-lg">
            <p>Versatility</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScalableSolutions;
