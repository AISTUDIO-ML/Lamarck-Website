import Carousel from "react-multi-carousel";
import { google, profile, stars } from "assets/images/images";
import { ReviewCard, ThemeButton } from "components/components";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const reviews = [
  {
    image: profile,
    name: "Ami Sami",
    stage: "CEO at genetica",
    review:
      "We are very much impressed by the degree of solutions precisions the deepbody have got totally amazed.",
  },
  {
    image: profile,
    name: "Ami Sami",
    stage: "CEO at genetica",
    review:
      "We are very much impressed by the degree of solutions precisions the deepbody have got totally amazed.",
  },
  {
    image: profile,
    name: "Ami Sami",
    stage: "CEO at genetica",
    review:
      "We are very much impressed by the degree of solutions precisions the deepbody have got totally amazed.",
  },
  {
    image: profile,
    name: "Ami Sami",
    stage: "CEO at genetica",
    review:
      "We are very much impressed by the degree of solutions precisions the deepbody have got totally amazed.",
  },
  {
    image: profile,
    name: "Ami Sami",
    stage: "CEO at genetica",
    review:
      "We are very much impressed by the degree of solutions precisions the deepbody have got totally amazed.",
  },
  {
    image: profile,
    name: "Ami Sami",
    stage: "CEO at genetica",
    review:
      "We are very much impressed by the degree of solutions precisions the deepbody have got totally amazed.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="!py-14">
      <div className="myContainer">
        <p className="text-themeBlack text-3xl md:text-5xl semibold mt-6 text-center">
          Our <span className="text-primary">Testimonial</span>
        </p>
      </div>
      <div className="bg-secondary !py-10 rounded-3xl mt-10">
        <div className="myContainer">
          <div className="bg-white flex flex-col lg:flex-row gap-3 lg:gap-0 items-center justify-between rounded-2xl py-5 px-10">
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <img
                  src={google}
                  alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
                  width={84}
                />
                <p>Rating</p>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <p>4.9</p>
                <img
                  src={stars}
                  alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
                  width={112}
                />
                <p className="opacity-70 text-sm">120 reviews</p>
              </div>
            </div>
            <ThemeButton content={"Write a Review"} bgFill />
          </div>
        </div>
        <Carousel
          responsive={responsive}
          autoPlay
          autoPlaySpeed={2000}
          infinite
          arrows={false}
          className="mt-6"
        >
          {reviews.map((review, index) => {
            return <ReviewCard key={index} data={review} />;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
