import { Person, StarFill } from "@gravity-ui/icons";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseCard = ({ course }) => {
  console.log(course);
  return (
    <div className=" border border-gray-500 rounded-xl max-w-90 bg-white text-black p-2 flex flex-col h-full hover:scale-[1.05]">
     <div className="relative aspect-video w-full">
       <Image
        src={course.image}
        fill
        alt={course.title}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover rounded-xl"
      />
     </div>
      <div className="p-3 flex flex-col grow space-y-4 mt-2">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">{course.title}</h3>
          <span className="flex gap-3 items-center">
            <Person />
            <h4 className="text-lg font-bold">{course.instructor}</h4>
          </span>
          <span className="flex gap-3 items-center">
            <StarFill className="text-yellow-600" />
            <p>{course.rating}</p>
          </span>
        </div>
       <div className="mt-auto">
         <Link href={`/all-courses/${course.id}`}>
          <Button className="bg-[#080431] text-white rounded-full w-full py-2">View Details</Button>
        </Link>
       </div>
      </div>
    </div>
  );
};

export default CourseCard;
