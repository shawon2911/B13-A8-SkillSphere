import { Person, StarFill } from "@gravity-ui/icons";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseCard = ({ course }) => {
  console.log(course);
  return (
    <div className="border border-gray-500 rounded-xl max-w-90 bg-white text-black p-2 flex flex-col h-full hover:scale-[1.05]">
      <Image
        src={course.image}
        height={200}
        width={500}
        alt={course.title}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className=" rounded-xl"
      />
      <div className="p-3 flex flex-col grow space-y-4 mt-2">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">{course.title}</h3>
          <span className="flex gap-3 items-center">
            <Person />
            <h4 className="text-lg font-bold">{course.instructor}</h4>
          </span>
          <span className="flex gap-3 items-center">
            <StarFill />
            <p>{course.rating}</p>
          </span>
        </div>
       <div className="mt-auto">
         <Link href={"/"}>
          <Button className="bg-[#080431] text-white rounded-full w-full py-2">View Details</Button>
        </Link>
       </div>
      </div>
    </div>
  );
};

export default CourseCard;
