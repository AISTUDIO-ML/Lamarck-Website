interface BlogCardProps {
  data: {
    image: string;
    category: string;
    name: string;
    description: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  return (
    <div className="bg-white p-5 border-2 border-secondaryLight rounded-xl mx-3">
      <img
        src={data.image}
        alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
        height={"auto"}
        width={"100%"}
      />
      <div className="flex mt-5">
        <div className="bg-secondaryLight px-7 h-8 rounded-full flex items-center">
          <p>{data.category}</p>
        </div>
      </div>
      <p className="text-2xl semibold mt-4">{data.name}</p>
      <p className="opacity-70 text-sm font-medium mt-4">{data.description}</p>
    </div>
  );
};

export default BlogCard;
