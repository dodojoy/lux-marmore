import { useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimension";
import headerlogomobile from "./../assets/headerlogomobile.svg";
import headerlogodesktop from "./../assets/headerlogodesktop.svg";

function Header() {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = width < 1024 ? true : false;

  const links = [
    { name: "QUEM SOMOS", link: "/" },
    { name: "PORTFÓLIO", link: "/" },
    { name: "ORÇAMENTOS", link: "/" },
    { name: "CONTATOS", link: "/" },
  ];

  return (
    <header className="bg-yellow w-full pt-12 fixed top-0 left-0 flex flex-col lg:pt-0">
      <nav
        className={`${
          isOpen ? "bg-white h-[90%]" : ""
        } lg:bg-inherit absolute top-0 right-0 w-4/5 flex flex-col items-center lg:relative lg:justify-center lg:self-center lg:bg-none`}
      >
        {isMobile ? (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer self-end py-3 px-3"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>
        ) : null}

        {isOpen || !isMobile ? (
          <ul className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-3 lg:flex-row lg:p-5 lg:justify-evenly lg:w-full  lg:relative lg:translate-y-[0%]">
            {links.map((link) => (
              <li key={link.name} className="">
                <a
                  href={link.link}
                  className="text-blue font-semibold hover:text-lightblue duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </nav>
      <div>
        <img
          className="h-full w-full"
          w-full
          h-full
          src={isMobile ? headerlogomobile : headerlogodesktop}
          alt="bancada de cozinha com a logo da lux marmore centralizada"
        />
      </div>
    </header>
  );
}

export default Header;
