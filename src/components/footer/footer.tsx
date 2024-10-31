import { logo } from "assets/images/images";
import {
  apple,
  facebook,
  instagram,
  linkedin,
  podcast,
  smile,
  twitter,
  wifi,
  youtube,
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
        title: "Investors",
        href: require("../../assets/Deepbody_Business_Plan.pdf"),
      },
      {
        title: "Partnership",
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
        title: "Pharma",
        href: "/",
      },
      {
        title: "Biotech",
        href: "/",
      },
      {
        title: "Physicians",
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
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <div className="myContainer border-t border-gray-300 !pt-10 !pb-7">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 lg:gap-y-0 lg:grid-cols-6 gap-3">
        <div className="md:col-span-2">
          <a href="/#">
            <img
              alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
              src={logo}
              width={170}
            />
          </a>
          <p className="medium mt-5 text-sm">Deepbody founded in 2017</p>
          <p className="mt-5 text-sm">Podcast:</p>
          <div className="flex items-center gap-6 mt-2">
            <img src={apple} alt="apple" width={22} />
            <img src={youtube} alt="youtube" width={22} />
            <img src={wifi} alt="wifi" width={22} />
            <img src={podcast} alt="podcast" width={22} />
          </div>
          <p className="mt-5 text-sm">Social:</p>
          <div className="flex items-center gap-6 mt-1">
            <img src={linkedin} alt="linkedin" width={22} />
            <img src={twitter} alt="twitter" width={22} />
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" width={22} />
            <img src={smile} alt="smile" width={30} className="-ml-2" />
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
            159 Main Street Suite 100 Nashua, NH 03060 USA
          </p>
          <p className="medium text-sm py-4">+ 1 202 507 9469</p>
          <p className="medium text-sm">
            Hirschmatstrasse, 42 Luzern, LH-6003 Switzerland
          </p>
          <p className="medium text-sm py-4">+ 41 44 585 2436</p>
          <p className="medium text-sm">DNA@deepbody.me</p>
        </div>
      </div>
      <p className="caveat text-primary text-4xl mt-5 md:mt-0">
        Made By{" "}
        <span className="railway font-bold ml-3 text-3xl">DEEPBODY</span>
      </p>
      <div className="bg-secondary text-xs md:text-base w-full md:py-3 p-5 rounded-full text-center px-5 text-primary mt-10">
        <p>(@) 2024 deepbody.me Limited. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
