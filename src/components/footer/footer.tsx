import {
  discover,
  honeypotz,
  logo,
  mastercard,
  unionpay,
  visa,
} from "assets/images/images";
import {
  facebook,
  github,
  instagram,
  linkedin,
  // mail,
  twitter,
} from "assets/icons/icons";

const links = [
  {
    title: "Quick Links",
    link: [
      {
        title: "Solutions",
        href: "/",
      },
      {
        title: "Company",
        href: "https://www.honeypotz.net/",
      },
      {
        title: "Enterprise",
        href: "/",
      },
      {
        title: "Blog",
        href: "https://aistudioml.blogspot.com/?m=1",
      },
    ],
  },
  {
    title: "Services",
    link: [
      {
        title: "AIOPS",
        href: "/",
      },
      {
        title: "Deep Beat",
        href: "/",
      },
      {
        title: "Confidential Computing",
        href: "/",
      },
      {
        title: "Much more...",
        href: "/",
      },
    ],
  },
  {
    title: "Policies",
    link: [
      {
        title: "Terms & conditions",
        href: "https://app.termly.io/document/terms-of-use-for-saas/27e6cc45-1962-43c3-a37f-6f15d02ba5a9",
      },
      {
        title: "Privacy Policies",
        href: "https://app.termly.io/document/privacy-policy/fec0b2f8-630e-4a48-889b-fa3e8174ced8",
      },
      {
        title: "Investors",
        href: require("../../assets/Honeypotz_Seed.pdf"),
      },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <>
      <div className="myContainer border-t border-gray-300 !py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 lg:gap-y-0 lg:grid-cols-6 gap-3">
          <div className="md:col-span-2">
            <a href="/#">
              <img
                alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
                src={logo}
                width={170}
              />
            </a>
            <p className="medium mt-5 w-full text-sm leading-7  ">
              Developed by Honeypotz Inc founded in 2016. <br /> Unlock a new
              era of digital security With <br /> AIstudio- where cutting-edge
              AI meets <br /> effortless protection.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <div className="bg-themeGray-200 w-12 h-7 rounded-full flex justify-center items-center">
                <img
                  src={visa}
                  alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
                  width={30}
                  className="mr-1"
                />
              </div>
              <div className="bg-themeGray-200 w-12 h-7 rounded-full flex justify-center items-center">
                <img
                  src={mastercard}
                  alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
                  width={25}
                />
              </div>
              <div className="bg-themeGray-200 w-12 h-7 rounded-full flex justify-center items-center">
                <img
                  src={discover}
                  alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
                  width={30}
                />
              </div>
              <div className="bg-themeGray-200 w-12 h-7 rounded-full flex justify-center items-center">
                <img
                  src={unionpay}
                  alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
                  width={25}
                />
              </div>
            </div>
          </div>
          {links.map((link, index) => (
            <div key={index}>
              <p className="semibold pb-3">{link.title}</p>
              <div className="medium text-sm flex flex-col leading-9">
                {link.link.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div>
            <p className="semibold pb-3">Contact Us</p>
            <p className="medium text-sm">
              8 The Green STE R Dover, DE 19901 USA
            </p>
            <p className="medium text-sm py-4">Ph. +1 305 390 0563</p>
            <p className="medium text-sm">
              Hirschmattstrasse 42 Luzern, LH-6003 Switzerland
            </p>
            <p className="medium text-sm py-4">Ph. +41 44 585 2436</p>
            <p className="medium text-sm">Email: Team@honeypotz.net</p>
          </div>
        </div>
        <div className="md:flex items-center justify-between">
          <div className="mt-8 flex items-center">
            <p className="caveat text-primary text-4xl">Made By</p>
            <img alt="honeypotz" src={honeypotz} className="ml-4" width={180} />
          </div>
          <div className="flex items-center gap-7 mt-8">
            <a
              href="https://www.facebook.com/aistudioml"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={facebook}
                alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
              />
            </a>
            {/* <img src={mail} alt="mastercard" /> */}
            <a
              href="https://www.instagram.com/aistudioml/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={instagram}
                alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/honeypotz"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
              />
            </a>
            <a
              href="https://github.com/AISTUDIO-ML/Honeypotz-main-website"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={github}
                alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
              />
            </a>
            <a
              href="https://twitter.com/aistudioml"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={twitter}
                alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-primary text-xs md:text-sm myContainer h-16 md:h-14 flex justify-center text-center items-center text-white">
        <p>(@) 2024 aistudio Limited. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
