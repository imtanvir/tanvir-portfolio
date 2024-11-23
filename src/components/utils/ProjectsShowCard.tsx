"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ProjectsShowCard = ({
  i,
  src,
  thumb,
}: {
  i: number;
  src: string;
  thumb: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`a${i} bg-default-50 border-3 box-border border-[#a3e635] rounded-2xl cursor-crosshair`}
        onClick={() => setOpen(true)}
        style={{
          backgroundImage: `url('${src}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full py-40 px-10"></div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: thumb }]}
        carousel={{ finite: true }}
      />
    </>
  );
};

export default ProjectsShowCard;
