import Carousel from "react-multi-carousel";
import { cyber_security, gold, security_awards } from "assets/images/images";

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

const awards = [
  {
    image: cyber_security,
    title: "Best Cloud Security",
  },
  {
    image: security_awards,
    title: "Best Cybersecurity Solution",
  },
  {
    image: gold,
    title: "Best Cloud Infrastructure",
  },
  {
    image: cyber_security,
    title: "Best Cloud Security",
  },
  {
    image: security_awards,
    title: "Best Cybersecurity Solution",
  },
  {
    image: gold,
    title: "Best Cloud Infrastructure",
  },
];

const Awards: React.FC = () => {
  return (
    <div id="aiops" className="!py-16">
      <div className="flex flex-col items-center">
        <div className="text-secondary bg-secondaryLight w-44 h-11 rounded-full flex items-center justify-center">
          <p>Awards</p>
        </div>
        <p className="text-primary text-3xl md:text-5xl semibold mt-5 text-center">
          Our Accomplishments
        </p>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={2000}
        infinite
        arrows={false}
      >
        {awards.map((award, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-between border border-themeOrange/20 rounded-3xl h-56 py-4 mx-3 mt-10"
            >
              <img src={award.image} alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI" />
              <p className="text-lg semibold">{award.title}</p>
            </div>
          );
        })}
      </Carousel>
      <div className="grid md:grid-cols-4 gap-5 mt-10"></div>
    </div>
  );
};

export default Awards;
