import Image from "next/image";
import React from "react";

const TopInstructors = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 text-white">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        👨‍🏫 Top Instructors
      </h2>

      <div className="grid  md:grid-cols-3 gap-10 mt-20">
        {/* Instructor Card */}
        <div className="flex flex-col justify-center items-center max-w-96  bg-white text-black p-10 rounded-xl text-center hover:scale-[1.03] hover:shadow-lg transition">
         <Image 
            src="https://i.ibb.co.com/bMmVYfMJ/female6.png"
            alt="Olivia Smith"
            height={100}
            width={100}
            />
          <h3 className="font-bold text-xl mt-5">Olivia Smith</h3>
          <p className="text-sm text-gray-800">Web Development</p>
        </div>

        <div className="flex flex-col justify-center items-center max-w-96  bg-white text-black p-10 rounded-xl text-center hover:scale-[1.03] hover:shadow-lg transition">
         <Image 
            src="https://i.ibb.co.com/3mL09Zbz/male4.png"
            alt="Olivia Smith"
            height={100}
            width={100}
            />
          <h3 className="font-bold text-xl mt-5">Omar Khalid </h3>
          <p className="text-sm text-gray-800">Graphic Design</p>
        </div>

        <div className="flex flex-col justify-center items-center max-w-96  bg-white text-black p-10 rounded-xl text-center hover:scale-[1.03] hover:shadow-lg transition">
         <Image 
            src="https://i.ibb.co.com/N21PYhb7/male6.png"
            alt="Olivia Smith"
            height={100}
            width={100}
            />
          <h3 className="font-bold text-xl mt-5">Santiago Mateo</h3>
          <p className="text-sm text-gray-800">Data Science</p>
        </div>

       
      </div>
    </section>
  );
};

export default TopInstructors;
