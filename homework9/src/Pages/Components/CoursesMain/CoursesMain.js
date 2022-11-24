import React, { useEffect, useState } from 'react'
import './courses.css'

export default function CoursesMain() {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                
                setCourses(data);
                


            });

           console.log(courses)
    }, [])



    return (
        <div className='courses-container' >
            <h3 className='courses-title' >Pick your perfect course</h3>
            {courses.map((course) => (

                <div className='course-content'>
                    <div key={course.id}>
                        <img src={course.thumbnail_img_url} ></img>
                        <div className='name-and-price' >
                            <h4>{course.name}</h4>
                            <p>${course.price}</p>
                        </div>
                        <div className='course-level'>
                            <span>Level:</span>
                            <p>{course.level}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
