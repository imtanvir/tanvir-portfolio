"use client";

import { siteConfig } from "@/src/config/site";
import { Button } from "@nextui-org/button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscClose, VscHome } from "react-icons/vsc";
import { Blog, Contact, Projects, Skills, User } from "../icons";
import { TransitionLink } from "../TransitionLink";
const ToggleButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        isIconOnly
        className="z-[900] rounded-full border-2 border-[#a3e635] absolute right-5 top-5 lg:hidden flex"
      >
        {isOpen ? (
          <VscClose className="text-[#a3e635] text-2xl" />
        ) : (
          <GiHamburgerMenu className="text-[#a3e635] text-xl" />
        )}
      </Button>
      <div
        className={`${isOpen ? "w-[80%] h-[35%] transition-all visible" : "w-[0%] h-[0%] transition-all invisible"} absolute overflow-hidden  right-0 rounded-bl-[100%] z-[90] flex md:hidden place-content-center place-items-start pt-10 bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-all motion-reduce:transition-none  from-default-200 bg-gradient-to-l`}
      >
        <div className="flex flex-col items-start">
          {siteConfig.navItems.map((item) => (
            <Button key={item.href} className=" bg-transparent">
              <TransitionLink href={item.href}>
                {/* <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  " flex gap-2 data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              > */}
                {item.href === "/" ? (
                  <VscHome
                    className={`${pathName === "/" ? "text-lime-400" : ""} text-2xl`}
                    title="Home"
                  />
                ) : item.href === "/about" ? (
                  <User
                    active={pathName === "/about" ? "#a3e635" : "currentColor"}
                    title="About Me"
                  />
                ) : item.href === "/skills" ? (
                  <Skills
                    active={pathName === "/skills" ? "#a3e635" : "currentColor"}
                    title="Skills"
                  />
                ) : item.href === "/projects" ? (
                  <Projects
                    active={
                      pathName === "/projects" ? "#a3e635" : "currentColor"
                    }
                    title="Projects"
                  />
                ) : item.href === "/blog" ? (
                  <Blog
                    active={pathName === "/blog" ? "#a3e635" : "currentColor"}
                    title="Blog"
                  />
                ) : item.href === "/contact" ? (
                  <Contact
                    active={
                      pathName === "/contact" ? "#a3e635" : "currentColor"
                    }
                    title="Contact"
                  />
                ) : (
                  item.label
                )}
                {item.label}
              </TransitionLink>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ToggleButton;
