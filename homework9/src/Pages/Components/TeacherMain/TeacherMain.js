import React, { useEffect, useState } from 'react'
import './teacher.css'
import { useGetAllTeachersQuery } from '../../../Redux/apiService'

export default function TeacherMain() {

    const {data:teachers,...others} = useGetAllTeachersQuery()

    return (
        <div className='teachers-container'>
            <h3 className='teachers-title'>Meet our great team!</h3>
            <div className='teachers-list'>
                {teachers?.map((teacher) => (
                    <div key={teacher.id} className='teacher-content'>
                        <img src={teacher.photo}></img>
                        <h4 className='teacher-name'>{teacher.first_name} {teacher.last_name}</h4>
                        <div className='teacher-info'>
                            <p className='info-element'>
                                <p className='info-element-span'><span>Course:</span></p>

                                <p >{teacher.courses.map((course) => (<p className='info-element-content'>{course}</p>))}</p>
                            </p>
                            <p className='info-element'>
                                <p className='info-element-span'><span>Education:</span></p>
                                <p className='info-element-content'>{teacher.education}</p>
                            </p>
                            <p className='info-element'>
                                <p className='info-element-span'><span>About me:</span></p>
                                <p className='info-element-content'>{teacher.about}</p>
                            </p>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}
