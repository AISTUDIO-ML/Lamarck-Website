import { useState } from "react";
import { cross_icon, menu_icon } from "assets/icons/icons";
import { logo } from "assets/images/images";
import { ThemeButton } from "components/components";
import "./navbar.css";

const links = [
  {
    name: "Enterprise",
    href: "/#",
  },
  {
    name: "Solutions",
    href: "#solutions",
  },
  {
    name: "Company",
    href: "#company",
  },
  {
    name: "AIOPS",
    href: "#aiops",
  },
  {
    name: "Confidential Computing",
    href: "#confidential_computing",
  },
  {
    name: "Blog",
    href: "#blog",
  },
];

const MobNavBar: React.FC = () => {
  const [showOptions, setShowOptions] = useState("headerClose");
  const handleOptions = () => {
    if (showOptions === "headerClose") {
      setShowOptions("headerOpen");
    } else {
      setShowOptions("headerClose");
    }
  };
  return (
    <div className="lg:hidden z-20 sticky top-0 bg-white shadow-md">
      <div className="flex items-center justify-between myContainer">
        <a href="/#">
          <img alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI" src={logo} width={130} />
        </a>
        <img
          onClick={handleOptions}
          alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
          src={showOptions === "headerClose" ? menu_icon : cross_icon}
          width={25}
          className="cursor-pointer"
        />
      </div>
      <div
        className={`${showOptions} absolute w-full !py-0 myContainer bg-white overflow-hidden`}
      >
        <div>
          <div className="gap-5 flex flex-col items-center">
            {links.map((link, index) => {
              return (
                <a
                  onClick={() => setShowOptions("headerClose")}
                  key={index}
                  href={link.href}
                  className="py-1 semibold"
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          <div className="flex justify-center">
            <ThemeButton bgFill content="Try for Free" className="mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

const NavBar: React.FC = () => {
  return (
    <>
      <MobNavBar />
      <div className="myContainer sticky top-0 z-20 bg-white shadow-md lg:flex items-center justify-between hidden">
        <a href="/#">
          <img alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI" src={logo} width={170} />
        </a>
        <div className="gap-7 flex items-center">
          {links.map((link, index) => {
            return (
              <a key={index} href={link.href} className="py-1 semibold">
                {link.name}
              </a>
            );
          })}
          <ThemeButton bgFill content="Try for Free" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
