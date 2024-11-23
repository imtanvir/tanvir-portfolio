"use client";
import AboutMeImg from "@/src/components/utils/AboutMeImg";
import { Button } from "@nextui-org/button";
import { usePathname } from "next/navigation";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { IoGameControllerOutline } from "react-icons/io5";
import { LiaBookReaderSolid } from "react-icons/lia";
import { SlCalender } from "react-icons/sl";

const About = () => {
  const router = usePathname();

  return (
    // <Curve path={router}>
    <section className="overflow-hidden h-screen">
      <div className="container mx-auto pt-5 px-5">
        <h1 className="font-Oswald font-bold text-6xl py-14 text-[#a3e635] inline-block">
          About Me
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="flex-auto">
            <AboutMeImg />
          </div>
          <div className="flex-auto">
            <h1 className="text-2xl pb-5">
              I'm Tanvir Parvej and I'm a{" "}
              <span className="text-[#a3e635] text-semibold">
                Full Stack web Developer
              </span>
            </h1>
            <p>
              Hi, My name is{" "}
              <span className="text-[#a3e635]">Tanvir Parvej</span>. I am a web
              developer, and I'm very passionate and dedicated to my work. With
              5+ years experience as a developer, I have acquired the skills and
              knowledge to make your project a successful finish.
            </p>
            <div className="flex gap-5 pt-10">
              <ul>
                <li className="flex gap-2 items-center">
                  <span className="pe-2 text-[#a3e635] text-lg">
                    <FaGithub />
                  </span>
                  Github:{" "}
                  <a href="https://github.com/imtanvir" target="_blank">
                    imtanvir
                  </a>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="pe-2 text-[#a3e635] text-lg">
                    <CiLocationOn />
                  </span>
                  Location: Dhaka, Bangladesh
                </li>
                <li className="flex gap-2 items-center">
                  <span className="pe-2 text-[#a3e635] text-lg">
                    <LiaBookReaderSolid />
                  </span>
                  Study: "Diploma in Computer Science and Technology"
                </li>
                <li className="flex gap-2 items-center">
                  <span className="pe-2 text-[#a3e635] text-lg">
                    <CiMail />
                  </span>
                  Mail:{" "}
                  <a href="tanvirparvej101@gmail.com">
                    tanvirparvej101@gmail.com
                  </a>
                </li>
              </ul>
              <ul>
                <li className="flex gap-2 items-center">
                  <span className="pe-2 text-[#a3e635] text-lg">
                    <SlCalender />
                  </span>
                  Age: 23
                </li>
                <li className="flex gap-2 items-center">
                  <span className="pe-2 text-[#a3e635] text-lg">
                    <IoGameControllerOutline />
                  </span>
                  Interests: Problem solving, playing games
                </li>
                <li className="flex gap-2 items-center">
                  <span className="pe-2 text-[#a3e635] text-lg">
                    <HiOutlineAcademicCap />
                  </span>
                  Degree: Diploma
                </li>
                <li className="flex gap-2 items-center">
                  <span className="pe-2 text-[#a3e635] text-lg">
                    <FiPhone />
                  </span>
                  Phone: +8801752661670
                </li>
              </ul>
            </div>
            <Button
              size="lg"
              className="rounded whitespace-nowrap text-gray-900 bg-[#a3e635] hover:bg-[#a3e635] mt-10"
            >
              Review My Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
    // </Curve>
  );
};

export default About;
