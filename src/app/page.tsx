"use client";
import { usePathname } from "next/navigation";
import Designation from "../components/utils/Designation";

const Home = () => {
  const router = usePathname();

  return (
    <section className="flex items-center justify-between h-screen">
      <div className="flex flex-col items-start md:ps-10">
        <pre className=" text-gray-600 font-Google text-xl">{`<html>
      
      
      
      `}</pre>
        <pre className=" text-gray-600 font-Google text-xl">{`  <body>`}</pre>
        {/* <pre className=" text-gray-600 font-Google text-xl">{`             <h1>`}</pre> */}
        <h1 className="ps-5 flex  text-9xl font-Oswald font-bold pb-10">
          <pre className=" text-gray-600 font-Google text-xl">{`<h1>`}</pre>I am
        </h1>
        <h2 className="ps-10 flex items-end text-[#a3e635] md:text-9xl font-Oswald font-bold pb-10">
          Tanvir Parvej
          <pre className=" text-gray-600 font-Google text-xl">{`</h1>`}</pre>
        </h2>
        <pre className=" text-gray-600 font-Google text-xl">{`   <p>`}</pre>
        <div className="flex gap-2">
          <h2 className="ps-10 md:text-7xl font-Oswald  font-bold">A</h2>
          <Designation />
        </div>
        <pre className=" text-gray-600 font-Google text-xl">{`   <p>`}</pre>

        <pre className=" text-gray-600 font-Google text-xl">{`  <body>`}</pre>

        <pre className=" text-gray-600 font-Google text-xl">{`
      
      
      
      
</html>`}</pre>
      </div>
      <div className="relative w-[26rem] h-[26rem]">
        <div className="w-full h-full blob bg-gradient-to-r from-[#a3e635] via-lime-200 to-lime-50 absolute right-20">
          <div className="w-full h-full bg-[url('/me.png')] object-cover object-center z-[99]"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
