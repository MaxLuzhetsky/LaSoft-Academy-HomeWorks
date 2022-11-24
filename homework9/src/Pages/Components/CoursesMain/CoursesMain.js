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
        <div className='courses-container'>
            <h3 className='courses-title' >Pick your perfect course</h3>
            <div className='courses-list' >

                {courses.map((course) => (

                    <div className='course-content'>
                        <div key={course.id}>
                            <img src={course.thumbnail_img_url} ></img>
                            <div  className='course-info'>
                                <div className='name-and-price' >
                                    <h4 className='course-title'>{course.name}</h4>
                                    <p className='course-price'>${course.price}</p>
                                </div>
                                <div className='course-level'>
                                    <span>Level:</span>
                                    <p className='level-duration'>{course.level}</p>
                                </div>
                                <div className='course-duration'>
                                    <span>Duration</span>
                                    <div>
                                    <p className='level-duration' >{course.duration}</p>
                                    <p className='level-duration'>{course.periodicity}</p>
                                    </div>
                                </div>
                                <p className='course-description'>{course.description_short}</p>
                                <button className='course-apply-button'>Apply</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
