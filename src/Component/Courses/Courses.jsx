import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleSelectCourse}) => {
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        fetch('courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="md:w-3/4 grid grid-cols-3 gap-6 mb-20">
            
            {
                courses.map(course=><Course key={course.id}
                    handleSelectCourse={handleSelectCourse}
                    course={course}></Course>)
            }
        </div>
    );
};

export default Courses;