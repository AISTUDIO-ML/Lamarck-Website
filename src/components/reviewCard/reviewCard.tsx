import { stars } from "assets/images/images";

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
        <div className="absolute -left-24 top-[74px] border-8 border-secondary rounded-full">
          <img
            alt="img"
            className="rounded-full w-20 h-20 object-cover"
            src={data.image}
          />
        </div>
      </div>
      <p className="font-bold railway text-2xl text-themeBlack">{data.name}</p>
      <img src={stars} alt="stars" width={90} className="mt-2 mb-3" />
      <p className="regular text-sm">{data.review}</p>
    </div>
  );
};

export default ReviewCard;
