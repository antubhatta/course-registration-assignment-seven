import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        fetch('courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div>
            <h3>Courses:{courses.length}</h3>
            {
                courses.map(course=><Course key={course.id} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;