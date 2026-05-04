import React from "react";
import { IoMdClock } from "react-icons/io";
import { MdTipsAndUpdates } from "react-icons/md";

const Tips = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 mt-15  text-white">
      <span className="flex justify-center gap-3">
        <MdTipsAndUpdates className="text-3xl md:text-5xl" />
        <h2 className="text-3xl md:text-5xl font-bold mb-10 ">
          
          Learning Tips
        </h2>
      </span>

      {/* Study Tips Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mb-12 md:mt-5 text-black">
        <div className="py-10 px-8 bg-gray-200 max-w-96 text-center rounded-xl hover:scale-[1.03] hover:shadow-lg transition">
          <h3 className="text-2xl font-bold mb-2">Active Learning</h3>
          <p className="text-gray-800 text-md">
            Don’t just watch—take notes and practice actively.
          </p>
        </div>

        <div className="py-10 px-8 bg-gray-200 max-w-96 text-center rounded-xl hover:scale-[1.03] hover:shadow-lg transition">
          <h3 className="text-2xl font-bold mb-2">Spaced Repetition</h3>
          <p className="text-gray-800 text-md">
            Revise topics over time instead of cramming.
          </p>
        </div>

        <div className="py-10 px-8 bg-gray-200 max-w-96 text-center rounded-xl hover:scale-[1.03] hover:shadow-lg transition">
          <h3 className="text-2xl font-bold mb-2">Pomodoro</h3>
          <p className="text-gray-800 text-md">
            Study 25 minutes, then take a short break.
          </p>
        </div>
      </div>

      {/* Time Management */}
      <div className="bg-white text-black rounded-xl p-6 mt-10  mb-10">
        <span className="flex   gap-3">
          <IoMdClock className="text-3xl" />
          <h2 className="text-3xl  font-bold mb-10 ">
            
            Time Management
          </h2>
        </span>

        <ul className="space-y-2 text-lg">
          <li>✔ Study at least 1–2 hours daily</li>
          <li>✔ Focus on one topic at a time</li>
          <li>✔ Take short breaks to stay fresh</li>
        </ul>
      </div>

      
    </section>
  );
};

export default Tips;
