import {  PersonFill, StarFill } from "@gravity-ui/icons";
import { Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";

const CourseDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    "https://b13-a8-skill-sphere-alpha.vercel.app/data.json",
  );
  const courses = await res.json();
  //   console.log(courses);
  //   console.log(id);
  const course = courses.find((c) => c.id == id);
  //   console.log(course);

  return (
    <div className="max-w-7xl mx-auto pt-8  md:py-15 ">
      <h2 className="text-3xl font-bold px-5 md:px-0">Course Details</h2>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-y-5 md:gap-10 items-center bg-gray-300 border border-gray-700 rounded-xl p-2 pb-8 md:pb-0 md:py-15 mt-8 ">
        <div className="relative aspect-video w-full lg:w-125 left-content mx-auto ">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="absolute rounded-xl"
          />
        </div>

        <div className="right-content text-black space-y-3 px-2">
          <h2 className="text-3xl font-bold ">{course.title}</h2>
          <span className="flex gap-3 items-center">
            <PersonFill />
            <h4 className="text-xl font-bold">{course.instructor}</h4>
          </span>
          <p className="text-lg text-gray-700 font-medium">Duration : <span className="font-bold">{course.duration}</span></p>
          <span className="flex gap-1 items-center">
            
            <p className="text-lg text-gray-700 font-medium">Rating : </p>
            <span  className="font-bold">{course.rating}</span>
            <StarFill className="text-yellow-600" />
          </span>
           <span className="flex gap-3 items-center">
            <p className="text-lg text-gray-700 font-medium">Level : </p>
            <Chip className="bg-red-800 text-white">{course.level}</Chip>
           </span>
          <p className="text-lg text-gray-800">{course.description}</p>
          <span className="flex items-center gap-3">
            <p className="text-gray-700 font-medium">Category : </p>
            <Chip className="bg-red-800 text-white">{course.category}</Chip>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
