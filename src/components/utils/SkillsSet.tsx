// "use client";
// import Script from "next/script";

// const SkillsSet = () => {
//   return (
//     <section>
//       <div id="myCanvasContainer">
//         <canvas width="600" height="600" id="myCanvas" className=" cursor-move">
//           <p>
//             Anything in here will be replaced on browsers that support the
//             canvas element
//           </p>
//         </canvas>
//       </div>
//       <div id="tags">
//         <ul>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               href="https://en.wikipedia.org/wiki/HTML"
//               target="_blank"
//             >
//               HTML 5
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="25"
//               href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
//               target="_blank"
//             >
//               CSS 3
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="15"
//               href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)"
//               target="_blank"
//             >
//               SASS
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="15"
//               href="https://en.wikipedia.org/wiki/Less_(stylesheet_language)"
//               target="_blank"
//             >
//               Less
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="25"
//               href="https://en.wikipedia.org/wiki/JavaScript"
//               target="_blank"
//             >
//               JavaScript
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="19"
//               href="https://en.wikipedia.org/wiki/JQuery"
//               target="_blank"
//             >
//               jQuery
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="19"
//               href="https://en.wikipedia.org/wiki/JQueryUI"
//               target="_blank"
//             >
//               jQuery UI
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="23"
//               href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"
//               target="_blank"
//             >
//               Bootstrap
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="25"
//               href="https://en.wikipedia.org/wiki/PHP"
//               target="_blank"
//             >
//               PHP
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="19"
//               href="https://en.wikipedia.org/wiki/MySQL"
//               target="_blank"
//             >
//               mySQl
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="19"
//               href="https://en.wikipedia.org/wiki/MySQL"
//               target="_blank"
//             >
//               DMS
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="26"
//               href="https://en.wikipedia.org/wiki/WordPress"
//               target="_blank"
//             >
//               Wordpress
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="17"
//               href="https://en.wikipedia.org/wiki/Git"
//               target="_blank"
//             >
//               Git
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="17"
//               href="https://en.wikipedia.org/wiki/WooCommerce"
//               target="_blank"
//             >
//               WooCommerce
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="17"
//               href="https://en.wikipedia.org/wiki/GitHub"
//               target="_blank"
//             >
//               Git Hub
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="17"
//               href="https://en.wikipedia.org/wiki/User_interface_design"
//               target="_blank"
//             >
//               UI Design
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="17"
//               href="https://en.wikipedia.org/wiki/User_experience_design"
//               target="_blank"
//             >
//               UX Design
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="13"
//               href="https://en.wikipedia.org/wiki/XML"
//               target="_blank"
//             >
//               XML
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="19"
//               href="https://www.npmjs.com/"
//               target="_blank"
//             >
//               JSON
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="13"
//               href="https://en.wikipedia.org/wiki/Mailchimp"
//               target="_blank"
//             >
//               Mailchimp
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="24"
//               href="https://en.wikipedia.org/wiki/Adobe_XD"
//               target="_blank"
//             >
//               Adobe XD
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="24"
//               href="https://en.wikipedia.org/wiki/Adobe_Photoshop"
//               target="_blank"
//             >
//               Adobe Photoshop
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="21"
//               href="https://en.wikipedia.org/wiki/Node.js"
//               target="_blank"
//             >
//               Animation
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="19"
//               href="https://www.npmjs.com/"
//               target="_blank"
//             >
//               jQuery Animation
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="19"
//               href="https://www.npmjs.com/"
//               target="_blank"
//             >
//               ReactJs
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="19"
//               href="https://www.npmjs.com/"
//               target="_blank"
//             >
//               Laravel
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="19"
//               href="https://www.npmjs.com/"
//               target="_blank"
//             >
//               AWS
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="19"
//               href="https://www.npmjs.com/"
//               target="_blank"
//             >
//               Firebase
//             </a>
//           </li>
//           <li className="hidden ">
//             <a
//               className=" text-[#a3e635]"
//               rel="noreferrer"
//               data-weight="19"
//               href="https://www.npmjs.com/"
//               target="_blank"
//             >
//               Github
//             </a>
//           </li>
//         </ul>
//       </div>
//       <Script src="https://www.goat1000.com/tagcanvas.js" />
//       <Script
//         src="https://www.goat1000.com/tagcanvas.js"
//         onLoad={() => {
//           console.log(
//             "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, dolorem provident! Optio dolorem officiis aliquam atque non praesentium sed, veniam, aliquid omnis consectetur vitae modi nam earum, dignissimos quam. Odit."
//           );

//           try {
//             (window as any).TagCanvas.Start("myCanvas", "tags", {
// outlineMethod: "none", // Disables the hover outline method
// outlineColour: "none",
// noSelect: true,
// textColour: "#a3e635",
// reverse: true,
// minSpeed: 0.03, // Minimum rotation speed
// maxSpeed: 0.05, // Maximum rotation speed
// depth: 0.8,
// startAngle: 120,
//             });
//             (window as any).TagCanvas.Fit("myCanvas");
//           } catch (e) {
//             // something went wrong, hide the canvas container
//             console.error("TagCanvas failed to load:", e);
//           }
//         }}
//       />
//     </section>
//   );
// };

// export default SkillsSet;

"use client";
import Script from "next/script";
import { useEffect } from "react";

const SkillsSet = () => {
  useEffect(() => {
    // Reinitialize TagCanvas after script is loaded
    const initializeCanvas = () => {
      try {
        (window as any).TagCanvas.Start("myCanvas", "tags", {
          outlineMethod: "none", // Disables the hover outline method
          outlineColour: "none",
          noSelect: true,
          textColour: "#a3e635",
          reverse: true,
          minSpeed: 0.03, // Minimum rotation speed
          maxSpeed: 0.05, // Maximum rotation speed
          depth: 0.8,
          startAngle: 120,
        });
      } catch (e) {
        console.error("Canvas setup error:", e);
      }
    };

    // Check if TagCanvas is already available
    if ((window as any).TagCanvas) {
      initializeCanvas();
    }
  }, []); // Runs only on mount

  return (
    <section>
      {/* Script Tag to Load TagCanvas */}
      <Script
        src="https://www.goat1000.com/tagcanvas.js"
        onLoad={() => {
          // Initialize TagCanvas once the script is loaded
          try {
            (window as any).TagCanvas.Start("myCanvas", "tags", {
              outlineMethod: "none", // Disables the hover outline method
              outlineColour: "none",
              noSelect: true,
              textColour: "#a3e635",
              reverse: true,
              minSpeed: 0.03, // Minimum rotation speed
              maxSpeed: 0.05, // Maximum rotation speed
              depth: 0.8,
              startAngle: 120,
            });
          } catch (e) {
            console.error("Canvas setup error:", e);
          }
        }}
        strategy="lazyOnload" // Loads the script lazily
      />

      <div id="myCanvasContainer">
        <canvas width="600" height="600" id="myCanvas" className="cursor-move">
          <p>
            Anything in here will be replaced on browsers that support the
            canvas element.
          </p>
        </canvas>
      </div>
      <div id="tags">
        <ul className="hidden">
          {[
            { name: "HTML 5", href: "https://en.wikipedia.org/wiki/HTML" },
            {
              name: "CSS 3",
              href: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets",
            },
            {
              name: "SASS",
              href: "https://en.wikipedia.org/wiki/Sass_(stylesheet_language)",
            },
            {
              name: "Less",
              href: "https://en.wikipedia.org/wiki/Less_(stylesheet_language)",
            },
            {
              name: "JavaScript",
              href: "https://en.wikipedia.org/wiki/JavaScript",
            },
            { name: "jQuery", href: "https://en.wikipedia.org/wiki/JQuery" },
            {
              name: "jQuery UI",
              href: "https://en.wikipedia.org/wiki/JQueryUI",
            },
            {
              name: "Bootstrap",
              href: "https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)",
            },
            { name: "PHP", href: "https://en.wikipedia.org/wiki/PHP" },
            { name: "mySQl", href: "https://en.wikipedia.org/wiki/MySQL" },
            { name: "DMS", href: "https://en.wikipedia.org/wiki/MySQL" },
            {
              name: "Wordpress",
              href: "https://en.wikipedia.org/wiki/WordPress",
            },
            { name: "Git", href: "https://en.wikipedia.org/wiki/Git" },
            {
              name: "WooCommerce",
              href: "https://en.wikipedia.org/wiki/WooCommerce",
            },
            { name: "Git Hub", href: "https://en.wikipedia.org/wiki/GitHub" },
            {
              name: "UI Design",
              href: "https://en.wikipedia.org/wiki/User_interface_design",
            },
            {
              name: "UX Design",
              href: "https://en.wikipedia.org/wiki/User_experience_design",
            },
            { name: "XML", href: "https://en.wikipedia.org/wiki/XML" },
            { name: "JSON", href: "https://www.npmjs.com/" },
            {
              name: "Mailchimp",
              href: "https://en.wikipedia.org/wiki/Mailchimp",
            },
            {
              name: "Adobe XD",
              href: "https://en.wikipedia.org/wiki/Adobe_XD",
            },
            {
              name: "Adobe Photoshop",
              href: "https://en.wikipedia.org/wiki/Adobe_Photoshop",
            },
            {
              name: "Animation",
              href: "https://en.wikipedia.org/wiki/Node.js",
            },
            { name: "jQuery Animation", href: "https://www.npmjs.com/" },
            { name: "ReactJs", href: "https://www.npmjs.com/" },
            { name: "Laravel", href: "https://www.npmjs.com/" },
            { name: "AWS", href: "https://www.npmjs.com/" },
            { name: "Firebase", href: "https://www.npmjs.com/" },
            { name: "Github", href: "https://www.npmjs.com/" },
          ].map((tech, idx) => (
            <li key={idx}>
              <a
                className="text-[#a3e635]"
                rel="noreferrer"
                href={tech.href}
                target="_blank"
              >
                {tech.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsSet;
