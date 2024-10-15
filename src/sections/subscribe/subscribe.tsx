import { ThemeInput } from "components/components";

const Subscribe: React.FC = () => {
  return (
    <div className="myContainer !pt-20 !pb-10">
      <div className="bg-secondaryLight p-10 rounded-2xl grid lg:grid-cols-2 gap-5 items-center">
        <div>
          <p className="semibold text-3xl">
            Subcribe to our <span className="text-secondary">Newsletter</span>
          </p>
          <p className="text-sm mt-4">
            Subscribe for Updates: Stay informed about the latest investor
            updates, financial results, and announcements by subscribing to our
            newsletter.
          </p>
        </div>
        <ThemeInput placeholder="Enter your email" />
      </div>
    </div>
  );
};

export default Subscribe;
