import Link from "next/link";
import { useState, useEffect, ReactNode } from "react";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDocumentDownload } from "react-icons/hi";
import { motion } from "framer-motion";

import Transition from "./Transition";

interface IProps {
  children: ReactNode;
}

export default function Navigation({ children }: IProps) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    if (displayChildren != children) {
      setTransition(true);
    }
    setTimeout(() => {
      setTransition(false);
    }, 2000);
  }, [children, displayChildren]);

  return (
    <>
      <Transition isVisible={transition} />
      <div className={transition ? "hidden" : ""}>
        <div className="top-[10%] right-0 pr-[5%] fixed max-w-7xl flex flex-col text-[#cba6f7] z-50">
          <div className="flex flex-row-reverse">
            <div className="m-0.5">
              <Link href="https://github.com/fuwaa">
                <BsGithub title="GitHub" className="text-md cursor-pointer" />
              </Link>
            </div>
            <div className="m-0.5">
              <Link href="https://www.linkedin.com/in/fuwaa/">
                <BsLinkedin
                  title="LinkedIn"
                  className="text-md cursor-pointer"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-items-end mt-4">
            {[
              ["home", "/"],
              ["about-me", "#about"],
              ["experience", "#experience"],
              ["my-projects", "/projects"],
            ].map(([title, url], x) => (
              <Link href={url} key={x}>
                <a className="text-md font-bold text-right cursor-pointer m-0">
                  /{title}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
