"use client";
import { Avatar } from "@nextui-org/avatar";
import { Link } from "@nextui-org/link";
import {
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { VscHome } from "react-icons/vsc";

import {
  Blog,
  Contact,
  DiscordIcon,
  GithubIcon,
  Projects,
  Skills,
  TwitterIcon,
  User,
} from "@/src/components/icons";
import { siteConfig } from "@/src/config/site";
import { TransitionLink } from "./TransitionLink";

export const Navbar = () => {
  const pathName = usePathname();

  return (
    <NextUINavbar
      className="header-px tanvir-parvej"
      height="h-screen"
      position="sticky"
    >
      <NavbarContent className="flex flex-col">
        <ul className="hidden lg:flex flex-col gap-4 ml-2">
          <NavbarItem className="hidden sm:flex flex-col gap-2 mb-10">
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                " data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href="/"
            >
              {/* <Logo /> */}
              <Avatar
                isBordered
                alt="Tanvir"
                color="success"
                size="sm"
                src="https://lh3.googleusercontent.com/a/ACg8ocKDoVv2ktCqr8UcU05qNUF2_zZtmIbv1hvt9n6sZWHdwwCzm8GC=s288-c-no"
              />
            </NextLink>
          </NavbarItem>

          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} className="flex">
              <TransitionLink href={item.href}>
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
              </TransitionLink>
            </NavbarItem>
          ))}
          <NavbarItem className="hidden sm:flex flex-col gap-2 pt-5 border-t border-gray-600">
            <Link
              isExternal
              aria-label="Twitter"
              href={siteConfig.links.twitter}
            >
              <TwitterIcon className="text-default-500" />
            </Link>
            <Link
              isExternal
              aria-label="Discord"
              href={siteConfig.links.discord}
            >
              <DiscordIcon className="text-default-500" />
            </Link>
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <GithubIcon className="text-default-500" />
            </Link>
            {/* <ThemeSwitch /> */}
          </NavbarItem>
        </ul>
        {/* <ul className="hidden lg:flex flex-col gap-4 ml-2">
          
        </ul> */}
      </NavbarContent>

      {/* <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full">
        <NavbarItem className="hidden sm:flex flex-col gap-2">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent> */}

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
