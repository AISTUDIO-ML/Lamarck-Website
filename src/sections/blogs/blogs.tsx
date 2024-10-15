import Carousel from "react-multi-carousel";
import { blogimage_1, blogimage_2, blogimage_3 } from "assets/images/images";
import { BlogCard } from "components/components";

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

const data = [
  {
    image: blogimage_1,
    category: "Design",
    name: "Al Instructional Design",
    description:
      "Analyze learning needs, design instructional strategies, and evaluate the effectiveness of your instruction so no student gets left behind.",
  },
  {
    image: blogimage_2,
    category: "Engineering",
    name: "Al Prompt Engineering",
    description:
      "Learn to tell Al to do whatever you want. Design a course, build course materials, whatever. So you can get back to focusing on your students.",
  },
  {
    image: blogimage_3,
    category: "Generative Fill",
    name: "AI Generative",
    description:
      "You have an idea for your dream course. After going through this program you'll have everything you need to build it.",
  },
  {
    image: blogimage_1,
    category: "Design",
    name: "Al Instructional Design",
    description:
      "Analyze learning needs, design instructional strategies, and evaluate the effectiveness of your instruction so no student gets left behind.",
  },
  {
    image: blogimage_2,
    category: "Engineering",
    name: "Al Prompt Engineering",
    description:
      "Learn to tell Al to do whatever you want. Design a course, build course materials, whatever. So you can get back to focusing on your students.",
  },
  {
    image: blogimage_3,
    category: "Generative Fill",
    name: "AI Generative",
    description:
      "You have an idea for your dream course. After going through this program you'll have everything you need to build it.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div id="blog" className="!pt-10">
      <div className="flex flex-col items-center">
        <div className="text-secondary bg-secondaryLight w-44 h-11 rounded-full flex items-center justify-center">
          <p>Our Blogs</p>
        </div>
        <p className="text-primary text-3xl md:text-4xl semibold mt-5 text-center">
          Insights Into Future Of{" "}
          <span className="text-secondary">Data Security</span>
        </p>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={2000}
        infinite
        arrows={false}
        className="mt-10"
      >
        {data.map((item, index) => {
          return <BlogCard key={index} data={item} />;
        })}
      </Carousel>
    </div>
  );
};

export default Blogs;
