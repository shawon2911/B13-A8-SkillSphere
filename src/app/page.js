import Banner from "@/Components/Banner";
import Tips from "@/Components/Tips";
import TopCourses from "@/Components/TopCourses";
import TopInstructors from "@/Components/TopInstructors";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopCourses></TopCourses>
      <Tips></Tips>
      <TopInstructors></TopInstructors>
    </div>
  );
}
