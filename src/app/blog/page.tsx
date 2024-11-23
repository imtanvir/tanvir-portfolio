"use client";
import { usePathname } from "next/navigation";

const BlogPage = () => {
  const router = usePathname();

  return (
    <section className="overflow-hidden h-screen py-10">
      <div className=" container mx-auto pt-5 px-5">
        <h1 className="font-Oswald font-bold text-6xl py-14 text-[#a3e635] inline-block">
          Recent Blog Post
        </h1>
        <p className="md:w-1/3 text-4xl text-center pt-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-light">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Coming
          </span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            soon
          </span>
          ...
        </p>
      </div>
    </section>
  );
};

export default BlogPage;
