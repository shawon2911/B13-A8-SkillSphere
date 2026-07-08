import CourseContainer from "@/Components/CourseContainer";


const AllCoursesPage = async () => {
  const res = await fetch(
    "https://b13-a8-skill-sphere-alpha.vercel.app/data.json",
  );
  const courses = await res.json();
  // console.log(courses);
  return <CourseContainer courses={courses}></CourseContainer>;
};

export default AllCoursesPage;
