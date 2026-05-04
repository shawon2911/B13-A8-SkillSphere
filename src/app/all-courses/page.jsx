
import CourseCard from "@/Components/CourseCard";

const AllCoursesPage = async () => {
  const res = await fetch(
    "https://b13-a8-skill-sphere-alpha.vercel.app/data.json",
  );
  const courses = await res.json();
  // console.log(courses);
  return (
    <div className="max-w-7xl mx-auto  p-5 md:py-15">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <h1 className="text-3xl md:text-5xl mb-5 md:mb-0 text-white shadow-black font-bold ">
          All Courses
        </h1>
        {/* searching ui */}
        <div className="flex items-center gap-2 max-w-xl ">
          
          <input
            type="text"
            
            
            placeholder="Search courses..."
            className="w-full px-4 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none  text-black"
          />

          
          <button
            
            className="px-5 py-2 bg-red-700 text-white rounded-lg hover:scale-105 transition"
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 md:mt-20">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default AllCoursesPage;
