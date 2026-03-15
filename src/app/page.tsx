"use client";
import { usePathname } from "next/navigation";
import Designation from "../components/utils/Designation";

const Home = () => {
  const router = usePathname();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-5 md:px-20 bg-black text-white overflow-hidden">
      {/* Left Content */}
      <div className="flex flex-col items-start z-10">
        <pre className="text-gray-600 font-mono text-lg md:text-xl">{`<html>`}</pre>
        <pre className="text-gray-600 font-mono text-lg md:text-xl ps-4">{`<body>`}</pre>
        
        <div className="ps-8 py-4">
          <div className="flex items-baseline gap-4">
            <pre className="text-gray-600 font-mono text-sm md:text-base">{`<h1>`}</pre>
            <h1 className="text-6xl md:text-9xl font-Oswald font-bold leading-tight">
              I am
            </h1>
          </div>
          
          <h2 className="text-[#a3e635] text-6xl md:text-9xl font-Oswald font-bold leading-tight mt-[-20px]">
            Tanvir Parvej
            <span className="text-gray-600 font-mono text-sm md:text-base ms-4">{`</h1>`}</span>
          </h2>
        </div>

        <div className="ps-8">
          <pre className="text-gray-600 font-mono text-sm md:text-base">{`<p>`}</pre>
          <div className="flex items-center gap-4 ps-6">
            <h2 className="text-4xl md:text-7xl font-Oswald font-bold">A</h2>
            <div className="text-4xl md:text-7xl font-Oswald font-bold">
               <Designation />
            </div>
          </div>
          <pre className="text-gray-600 font-mono text-sm md:text-base">{`</p>`}</pre>
        </div>

        <pre className="text-gray-600 font-mono text-lg md:text-xl ps-4 mt-10">{`</body>`}</pre>
        <pre className="text-gray-600 font-mono text-lg md:text-xl">{`</html>`}</pre>
      </div>

      {/* Right Content: The Zoomed Blob Area */}
      <div className="relative flex justify-center items-center w-full md:w-1/2 mt-10 md:mt-0">
        {/* Container defines the viewport */}
        <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] flex items-center justify-center">
          
          {/* The Blob with Overflow Hidden clips the oversized image */}
          <div className="blob w-full h-full bg-gradient-to-r from-[#a3e635] via-lime-400 to-green-500 overflow-hidden flex items-center justify-center">
            
            {/* ZOOM METHOD: 
               We use min-w-[160%] and min-h-[160%] to force the image to be larger than the blob.
               Object-top-center keeps the focus on the upper part of the photo (the face).
            */}
            <img 
              src="/tanvir.jpg" 
              alt="Tanvir Parvej" 
              className="min-w-[160%] min-h-[160%] object-cover object-[center_20%] brightness-95 contrast-110"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .blob {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: morph 8s ease-in-out infinite;
        }

        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
      `}</style>
    </section>
  );
};

export default Home;