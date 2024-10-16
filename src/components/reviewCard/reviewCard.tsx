import { check_icon } from "assets/icons/icons";
import { google_g, stars } from "assets/images/images";

interface ReviewCardProps {
  data: {
    image: string;
    name: string;
    stage: string;
    review: string;
  };
}

const ReviewCard: React.FC<ReviewCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl pr-5 pl-12 py-5 mx-8">
      <div className="relative">
        <img
          alt="img"
          className="absolute -left-24 top-10 border-8 border-secondary rounded-full"
          src={data.image}
          width={80}
        />
      </div>
      <p className="font-bold railway text-2xl text-themeBlack">{data.name}</p>
      <p className="regular text-sm pt-2 pb-4">{data.stage}</p>
      <p className="regular">{data.review}</p>
    </div>
  );
};

export default ReviewCard;
