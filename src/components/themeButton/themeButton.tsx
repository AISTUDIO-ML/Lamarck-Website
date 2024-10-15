import { redirectUrl } from "constant/redirectUrl";

interface ThemeButtonProps {
  content: any;
  bgFill?: boolean;
  className?: string;
  href?: string;
}

const ThemeButton: React.FC<ThemeButtonProps> = (props) => {
  const { content, className, href } = props;
  return (
    <a href={href ? href : redirectUrl} target="_blank" rel="noreferrer">
      <button
        className={`${className} bg-primary text-white rounded-full px-8 h-12 semibold`}
      >
        {content}
      </button>
    </a>
  );
};

export default ThemeButton;
