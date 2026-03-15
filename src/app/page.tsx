"use client";
import { usePathname } from "next/navigation";
import Designation from "../components/utils/Designation";

const Home = () => {
  const router = usePathname();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-5 md:px-20 bg-black text-white overflow-hidden">
      {/* Left Content: Text & HTML Tags */}
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

      {/* Right Content: Animated Image Blob */}
      <div className="relative flex justify-center items-center w-full md:w-1/2 mt-10 md:mt-0">
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
          {/* The Blob Background/Container */}
          <div className="blob w-full h-full bg-gradient-to-r from-[#a3e635] via-lime-400 to-green-500 overflow-hidden shadow-2xl transition-all duration-500">
            {/* The Image inside the blob */}
            <img 
              src="/tanvir.jpg" 
              alt="Tanvir Parvej" 
              className="w-full h-full object-cover object-top scale-x-[-1] brightness-90 contrast-110"
            />
          </div>
        </div>
      </div>

      {/* Custom Styles for the Blob Animation */}
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