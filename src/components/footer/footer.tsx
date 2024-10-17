import { logo, payments } from "assets/images/images";

const links = [
  {
    title: "Quick Links",
    link: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Technology",
        href: "/",
      },
      {
        title: "Solution",
        href: "/",
      },
      {
        title: "Prices",
        href: "/",
      },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <>
      <div className="myContainer border-t border-gray-300 !pt-10 !pb-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 lg:gap-y-0 lg:grid-cols-6 gap-3">
          <div className="md:col-span-4">
            <a href="/#">
              <img
                alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
                src={logo}
                width={170}
              />
            </a>
            <p className="medium mt-8 text-sm text-themeBlack/50 w-80 leading-7">
              Founded in 2024, Lamarck™ ushers in a new era of personalized
              wellness – where advanced DNA insights meet tailored health
              optimization.
            </p>
            <img
              className="my-8"
              width={400}
              alt="Confidential Computing, Data Confidentiality, Safe AI act, Safeguarding AI, Confidential AI"
              src={payments}
            />
          </div>
          <div>
            <p className="semibold pb-3">Contact Us</p>
            <p className="medium text-sm text-themeBlack/50">
              159 Main Street Suite 100 Nashua, NH 03060 USA
            </p>
            <p className="medium text-sm py-4 text-themeBlack/50">
              + 1 202 507 9469
            </p>
            <p className="medium text-sm text-themeBlack/50">
              Hirschmatstrasse, 42 Luzern, LH-6003 Switzerland
            </p>
            <p className="medium text-sm py-4 text-themeBlack/50">
              + 41 44 585 2436
            </p>
            <p className="medium text-sm text-themeBlack/50">DNA@deepbody.me</p>
          </div>
          <div className="flex md:justify-end">
            {links.map((link, index) => (
              <div key={index}>
                <p className="semibold pb-3">{link.title}</p>
                <div className="medium text-sm flex flex-col leading-9">
                  {link.link.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      className="text-themeBlack/50"
                      rel="noreferrer"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="caveat text-primary text-4xl mt-5 md:mt-0">
          Made By{" "}
          <span className="railway font-bold ml-3 text-3xl">DEEPBODY</span>
        </p>
      </div>
      <div className="bg-primary text-xs md:text-base w-full h-14 flex items-center justify-center text-white mt-5">
        <p>(@) 2024 deepbody.me Limited. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
