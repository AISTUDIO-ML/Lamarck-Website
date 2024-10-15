import { redirectUrl } from "constant/redirectUrl";

interface ThemeInputProps {
  placeholder?: string;
}

const ThemeInput: React.FC<ThemeInputProps> = ({ placeholder }) => {
  return (
    <div className="bg-white h-14 w-full rounded-xl flex justify-between">
      <input
        className="bg-white h-14 placeholder:text-black regular w-full px-7 rounded-tl-xl rounded-bl-xl focus-visible:outline-secondary"
        placeholder={placeholder}
      />
      <a href={redirectUrl} target="_blank" rel="noreferrer">
        <button className="bg-secondary text-white rounded-tr-xl rounded-br-xl px-3 lg:px-8 h-14 semibold">
          Subscribe
        </button>
      </a>
    </div>
  );
};

export default ThemeInput;
