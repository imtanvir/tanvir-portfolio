"use client";
import ProjectsShowCard from "@/src/components/utils/ProjectsShowCard";
import { usePathname } from "next/navigation";
import "react-vertical-timeline-component/style.min.css";
import "yet-another-react-lightbox/styles.css";
const Projects = () => {
  const projectImg = [
    {
      src: "/bikeride.png",
      alt: "Project 1",
      id: 1,
      full_img: "/bikeride_thumb.png",
    },
    {
      src: "/pawpedia_thumb.png",
      alt: "Project 2",
      id: 2,
      full_img: "pawpedia.png",
    },
    {
      src: "/sportsthumb.png",
      alt: "Project 3",
      id: 3,
      full_img: "/sports.png",
    },
    {
      src: "/hilothumb.png",
      alt: "Project 4",
      id: 4,
      full_img: "/hilo_full.png",
    },
    {
      src: "/vocalty_thumb.png",
      alt: "Project 5",
      id: 5,
      full_img: "/vocalty.png",
    },
    {
      src: "/smarths.png",
      alt: "Project 6",
      id: 6,
      full_img: "/smarths_thumb.png",
    },
    {
      src: "/proqz.png",
      alt: "Project 7",
      id: 7,
      full_img: "/proqz_thumb.png",
    },
  ];
  const router = usePathname();

  return (
    <section className="overflow-auto h-screen py-10 scrollable-content">
      {/* <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<VscWorkspaceTrusted />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<VscWorkspaceTrusted />}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<VscWorkspaceTrusted />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Los Angeles, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<VscWorkspaceTrusted />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<GiSchoolBag />}
          >
            <h3 className="vertical-timeline-element-title">
              Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Online Course
            </h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<GiSchoolBag />}
          >
            <h3 className="vertical-timeline-element-title">
              Agile Development Scrum Master
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Certification
            </h4>
            <p>Creative Direction, User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Interactive Digital Media Visual Imaging
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor Degree
            </h4>
            <p>Creative Direction, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<CiStar />}
          />
        </VerticalTimeline>
      </div> */}
      {/* <ProjectGallery /> */}
      <div className=" container mx-auto">
        <h1 className=" text-5xl font-bold text-[#a3e635] py-10 font-Oswald">
          Recent Projects
        </h1>
        <p className="md:w-1/2 text-gray-400 pb-10 text-lg">
          Here are some of my latest projects. I preferred to keep it simple and
          user friendly web ui and smooth animation.{" "}
        </p>
        <div className="container-grids">
          {projectImg.map((project) => (
            <ProjectsShowCard
              key={project?.alt}
              i={project?.id}
              src={project?.src}
              thumb={project?.full_img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
