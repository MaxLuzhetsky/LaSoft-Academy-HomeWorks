import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetAllCoursesQuery } from '../../../Redux/apiService'

import './courses.css'


export default function CoursesMain() {

    const { data: courses } = useGetAllCoursesQuery()

    const navigate = useNavigate();

    return (
        <div className='courses-container'>
            <h3 className='courses-title'>Pick your perfect course</h3>
            <div className='courses-list'>
                {courses?.map((course) => (
                    <div key={course.id} onClick={() => navigate('/course', {
                        state: {
                            courseName: course.name,
                            courseImg: course.full_img_url,
                            courseLvl: course.level,
                            courseDur: course.duration,
                            courseDecr: course.description_full,
                            coursePrice:course.price
                        }
                    })}
                        className='course-content'>
                        <div>
                            <img src={course.thumbnail_img_url} ></img>
                            <div className='course-info'>
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
