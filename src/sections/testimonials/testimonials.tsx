import Carousel from "react-multi-carousel";
import { google, profile, profile2, profile3, stars } from "assets/images/images";
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
    name: "Olivia Spencer ",
    stage: "CEO at genetica",
    review:
      "I was skeptical about doing DNA methylation testing at home, but this service exceeded my expectations. The kit was easy to use, and the results were detailed and easy to understand. I've gained so much insight into my health and how my lifestyle affects my genes. Highly recommend!",
  },
  {
    image: profile2,
    name: "Isabella Johnson",
    stage: "CEO at genetica",
    review:
      "Fantastic service! The DNA methylation test provided me with comprehensive information about my genetic health. It has helped me make informed decisions about my diet and lifestyle. The customer support was also very responsive and helpful. Worth every penny!",
  },
  {
    image: profile3,
    name: "Ava Martinez",
    stage: "CEO at genetica",
    review:
      "Impressed by the thoroughness of this DNA methylation test. The kit arrived quickly, and the whole process was seamless. The results gave me detailed health insights and actionable recommendations. I feel more empowered to take charge of my health now. Highly recommend!",
  },
  {
    image: profile,
    name: "Olivia Spencer ",
    stage: "CEO at genetica",
    review:
      "I was skeptical about doing DNA methylation testing at home, but this service exceeded my expectations. The kit was easy to use, and the results were detailed and easy to understand. I've gained so much insight into my health and how my lifestyle affects my genes. Highly recommend!",
  },
  {
    image: profile2,
    name: "Isabella Johnson",
    stage: "CEO at genetica",
    review:
      "Fantastic service! The DNA methylation test provided me with comprehensive information about my genetic health. It has helped me make informed decisions about my diet and lifestyle. The customer support was also very responsive and helpful. Worth every penny!",
  },
  {
    image: profile3,
    name: "Ava Martinez",
    stage: "CEO at genetica",
    review:
      "Impressed by the thoroughness of this DNA methylation test. The kit arrived quickly, and the whole process was seamless. The results gave me detailed health insights and actionable recommendations. I feel more empowered to take charge of my health now. Highly recommend!",
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
