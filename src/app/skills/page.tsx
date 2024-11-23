"use client";
import SkillProgress from "@/src/components/utils/SkillProgress";
import SkillsSet from "@/src/components/utils/SkillsSet";
export const dynamic = "force-dynamic";
const Skills = () => {
  return (
    <section className=" overflow-y-scroll h-screen pt-10 mb-20 scrollable-content">
      <div className="container mx-auto pt-5 px-5">
        <h1 className="font-Oswald font-bold text-6xl py-14 text-[#a3e635] inline-block">
          Skills
        </h1>
        <div className="flex gap-10 items-center">
          <div>
            <p className="md:w-1/2">
              The main area of my expertise lies in full-stack{" "}
              <span className="text-[#a3e635]">MERN</span> development,
              including building dynamic and interactive{" "}
              <span className="text-[#a3e635]">SPA</span> (Single Page
              Applications). I specialize in full-stack web development and
              creating modern, high-performance applications using{" "}
              <span className="text-[#a3e635]">NextJs</span>, ensuring seamless
              user experiences.
            </p>
            <div>
              <h3 className="font-Oswald font-bold text-2xl py-5">
                Tech stack
              </h3>
              <div className="">
                <div className="flex flex-col gap-2 pb-10">
                  <SkillProgress label="HTML 5" progress={95} />
                  <SkillProgress label="CSS 3" progress={90} />
                  <SkillProgress label="SCSS" progress={75} />
                  <SkillProgress label="Bootstrap 5" progress={85} />
                  <SkillProgress label="Tailwaind CSS" progress={90} />
                  <SkillProgress label="JAVASCRIPT" progress={85} />
                  <SkillProgress label="ReactJS" progress={90} />
                  <SkillProgress label="Redux" progress={80} />
                  <SkillProgress label="Github" progress={75} />
                  <SkillProgress label="NextJS" progress={85} />
                  <SkillProgress label="Typescript" progress={90} />
                  <SkillProgress label="NodeJS" progress={80} />
                  <SkillProgress label="ExpressJS" progress={85} />
                  <SkillProgress label="Mongoose" progress={80} />
                  <span className="italic text-gray-500 pt-5">
                    continuously exploring new technologies...
                  </span>
                </div>
              </div>
            </div>
          </div>
          <SkillsSet />
        </div>
      </div>
    </section>
  );
};

export default Skills;
