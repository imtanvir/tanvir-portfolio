"use client";
import { usePathname } from "next/navigation";
import Designation from "../components/utils/Designation";

const Home = () => {
  const router = usePathname();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-5 md:px-20 bg-black text-white overflow-hidden">
      
      {/* Left Content: Text & Tags */}
      <div className="flex flex-col items-start z-10 space-y-2">
        <pre className="text-gray-600 font-mono text-sm md:text-base">{`<html>`}</pre>
        <pre className="text-gray-600 font-mono text-sm md:text-base ps-4">{`<body>`}</pre>
        
        <div className="ps-8 py-2">
          <div className="flex items-center gap-2">
            <pre className="text-gray-600 font-mono text-xs md:text-sm">{`<h1>`}</pre>
            <h1 className="text-6xl md:text-9xl font-Oswald font-bold leading-none">I am</h1>
          </div>
          
          <div className="flex items-end gap-2">
            <h2 className="text-[#a3e635] text-6xl md:text-9xl font-Oswald font-bold leading-none">
              Tanvir Parvej
            </h2>
            <pre className="text-gray-600 font-mono text-xs md:text-sm mb-2">{`</h1>`}</pre>
          </div>
        </div>

        <div className="ps-8 py-2">
          <pre className="text-gray-600 font-mono text-xs md:text-sm">{`<p>`}</pre>
          <div className="flex items-center gap-4 ps-6">
            <h2 className="text-4xl md:text-7xl font-Oswald font-bold uppercase">
              A <Designation />
            </h2>
          </div>
          <pre className="text-gray-600 font-mono text-xs md:text-sm">{`</p>`}</pre>
        </div>

        <pre className="text-gray-600 font-mono text-sm md:text-base ps-4 mt-4">{`</body>`}</pre>
        <pre className="text-gray-600 font-mono text-sm md:text-base">{`</html>`}</pre>
      </div>

      {/* Right Content: Optimized Image Blob */}
      <div className="relative flex justify-center items-center w-full md:w-1/2 mt-10 md:mt-0">
        <div className="relative w-[350px] h-[350px] md:w-[550px] md:h-[550px]">
          
          {/* FIXED BLOB: 
              - Removed 'flex' from the blob itself to prevent image shifting.
              - Standardized w-full h-full.
          */}
          <div className="blob w-full h-full bg-gradient-to-r from-[#a3e635] via-lime-400 to-green-500 overflow-hidden border border-lime-400/30">
            
            {/* IMAGE FIX:
                - Used w-full h-full so it fills the blob exactly.
                - object-top ensures your head is not cut off.
                - Removed all scales/rotates.
            */}
            <img 
              src="/tanvir.jpg" 
              alt="Tanvir Parvej" 
              className="w-full h-full object-cover object-top brightness-105 contrast-110"
              style={{ transform: 'none' }}
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