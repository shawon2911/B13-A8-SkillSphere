
import CourseCard from "./CourseCard";

const TopCourses = async () => {
  const res = await fetch("https://b13-a8-skill-sphere-alpha.vercel.app/data.json");
  const courses = await res.json();
  // console.log(courses);
  const top3Course = courses.sort((a, b) => b.rating - a.rating).slice(0, 3);
  // console.log(top3Course);

  return (
    <div className="max-w-7xl mx-auto pt-10 p-6 md:mt-20">
      <h2 className="text-3xl md:text-5xl text-white  font-bold">Top Rated Courses</h2>
      

      <p className="text-gray-400 mt-5 md:mt-8">
        Gain hands-on experience through practical projects and stay ahead with
        up-to-date <br /> course   content tailored for your growth.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10">
        {top3Course.map((course) => (
        <CourseCard key={course.id} course={course}></CourseCard>
      ))}
      </div>
    </div>
  );
};

export default TopCourses;
