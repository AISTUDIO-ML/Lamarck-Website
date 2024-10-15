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
    name: "Abdu Teseer",
    time: "3 month ago",
    review:
      "The proactive threat detection of Honeypotz has saved us from multiple potential breaches. The software operates smoothly, providing constant protection without draining system resources. We can trust Honeypotz to keep our sensitive data secure, and the peace of mind it offers is invaluable.",
  },
  {
    image: profile,
    name: "Abdu Teseer",
    time: "3 month ago",
    review:
      "The proactive threat detection of Honeypotz has saved us from multiple potential breaches. The software operates smoothly, providing constant protection without draining system resources. We can trust Honeypotz to keep our sensitive data secure, and the peace of mind it offers is invaluable.",
  },
  {
    image: profile,
    name: "Abdu Teseer",
    time: "3 month ago",
    review:
      "The proactive threat detection of Honeypotz has saved us from multiple potential breaches. The software operates smoothly, providing constant protection without draining system resources. We can trust Honeypotz to keep our sensitive data secure, and the peace of mind it offers is invaluable.",
  },
  {
    image: profile,
    name: "Abdu Teseer",
    time: "3 month ago",
    review:
      "The proactive threat detection of Honeypotz has saved us from multiple potential breaches. The software operates smoothly, providing constant protection without draining system resources. We can trust Honeypotz to keep our sensitive data secure, and the peace of mind it offers is invaluable.",
  },
  {
    image: profile,
    name: "Abdu Teseer",
    time: "3 month ago",
    review:
      "The proactive threat detection of Honeypotz has saved us from multiple potential breaches. The software operates smoothly, providing constant protection without draining system resources. We can trust Honeypotz to keep our sensitive data secure, and the peace of mind it offers is invaluable.",
  },
  {
    image: profile,
    name: "Abdu Teseer",
    time: "3 month ago",
    review:
      "The proactive threat detection of Honeypotz has saved us from multiple potential breaches. The software operates smoothly, providing constant protection without draining system resources. We can trust Honeypotz to keep our sensitive data secure, and the peace of mind it offers is invaluable.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div id="usecases" className="!pt-14">
      <div className="myContainer">
        <div className="text-secondary bg-secondaryLight w-44 h-11 rounded-full flex items-center justify-center">
          <p>Client Reviews</p>
        </div>
        <p className="text-primary text-3xl md:text-5xl semibold mt-6">
          OUR <span className="text-secondary">TESTIMONIALS</span>
        </p>
        <p className="text-black/70 mt-6">
          Don't just take our word for it - see what actual users of our service{" "}
          <br /> have to say about their experience.
        </p>
      </div>
      <div className="bg-secondaryLight !py-7 rounded-3xl mt-10">
        <div className="myContainer">
          <div className="bg-white flex flex-col lg:flex-row gap-3 lg:gap-0 items-center justify-between rounded-2xl py-5 px-10">
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <img src={google} alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI" width={84} />
                <p>Rating</p>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <p>4.9</p>
                <img src={stars} alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI" width={112} />
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
