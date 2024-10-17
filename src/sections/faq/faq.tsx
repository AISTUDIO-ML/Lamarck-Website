const data = [
  {
    question: "What is DNA Methylation Testing?",
    answer:
      "DNA methylation testing reveals how your genetic expression is influenced by lifestyle and environment.",
  },
  {
    question: "How Do I Order a DNA Methylation Test?",
    answer:
      "Simply choose a package, place your order, and follow the instructions to submit your DNA sample.",
  },
  {
    question: "What Should I Expect After Submitting My Sample?",
    answer:
      "Once your sample is analyzed, you'll receive a detailed report with personalized health recommendations.",
  },
  {
    question: "How Secure is My Genetic Data?",
    answer:
      "Your genetic data is protected with state-of-the-art encryption and privacy measures to ensure complete security.",
  },
  {
    question: "Can I Change My Supplement Plan?",
    answer:
      "Yes, you can adjust your supplement plan based on new health insights or preferences.",
  },
  {
    question: "How Long Does It Take to Get Results?",
    answer:
      "Results are typically available within a few weeks after your sample is received and analyzed.",
  },
];

const Faq: React.FC = () => {
  return (
    <div className="myContainer !pb-20">
      <p className="text-themeBlack text-3xl md:text-5xl semibold mt-6 text-center">
        Frequestly Asked <span className="text-primary">Questions</span>
      </p>
      <div className="grid md:grid-cols-2 gap-5 mt-10">
        {data.map((item, index) => {
          return (
            <div key={index} className="shadow rounded-lg p-8">
              <p className="railway font-bold text-xl">{item.question}</p>
              <p className="text-themeGray regular mt-3">{item.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
