import CourseCard from '@/Components/CourseCard';
import React from 'react';

const AllCoursesPage = async() => {
    const res = await fetch("https://b13-a8-skill-sphere-alpha.vercel.app/data.json");
    const courses = await res.json();
    // console.log(courses);
    return (
        <div className='max-w-7xl mx-auto p-5 md:py-15'>
            <h1 className="text-3xl font-bold text-center">All Courses</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 md:mt-20'>
                {
                courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
            }
            </div>
        </div>
    );
};

export default AllCoursesPage;