import React, { useState } from 'react'
import Select from 'react-select'

import './apply.css'

import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

import pic from './img/pic.png'
import { useCreateApplyInfoMutation } from '../../Redux/apiService'


export default function Apply() {
    

    const [course, setCourse] = useState("")
    const [groups, setGroups] = useState("")
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [createReq , data] = useCreateApplyInfoMutation()
   

    const request = {

        "courseId": course,
        "groupId": groups,
        "full_name": fullName,
        "email": email,
        "phone": phone

    }

    const firstOptions = [
        { value: 'basic sketching', label: 'Basic Sketching' },
        { value: 'watercolor basics', label: 'Watercolor Basics' },
        { value: 'digital sketching', label: 'Digital Sketching' },
        { value: 'some other stuff', label: 'Some other stuff' }

    ]

    const secondOptions = [
        { value: 'mon/wed/fri 6pm-9pm', label: 'mon/wed/fri 7pm-9pm' },
        { value: 'mon/wed/fri 7pm-9pm', label: 'mon/wed/fri 7pm-9pm' },
        { value: 'mon/wed/fri 8pm-9pm', label: 'mon/wed/fri 7pm-9pm' },
        { value: 'mon/wed/fri 5pm-9pm', label: 'mon/wed/fri 7pm-9pm' }

    ]
    const handleSelectCourse = event =>{
        setCourse(event.target?.value)
    }
    const handleSelectGroups = event =>{
        setGroups(event.target?.value)
       
    }

    const createRequest = e => {
        e.preventDefault();
        console.log(request)
        createReq(request)
        
    }



    return (
        <>
            <Header></Header>
            <div className='apply-container'>
                <div className='apply-form-container'>
                    <h3 className='apply-form-title'>Apply to desired course right away!</h3>
                    <p className='apply-form-description'>Select desired course and group,
                        leave us your contact information and we’ll reach out to you for confirmation and letting you know about further steps
                    </p>
                    <div>
                        <form onSubmit={createRequest}>
                            <div className='form-row'>
                                <span >Course</span>
                                <select className='form-row-select' value={course} onChange={handleSelectCourse}>
                                    {firstOptions.map(option => (
                                                <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='form-row'>
                                <span >Group</span>
                                <select className='form-row-select' value={course} onChange={handleSelectGroups}>
                                    {secondOptions.map(option => (
                                                <option className='select-option' key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='inputs'>
                                <div className='form-row-inputs'>
                                    <span >Full name</span>
                                    <input onChange={e => setFullName(e.target.value)} className='form-row-input' type='text' required></input>
                                </div>
                                <div className='form-row-inputs'>
                                    <span >E-mail</span>
                                    <input onChange={e => setEmail(e.target.value)} className='form-row-input' value={request.email} type='email' placeholder='email@email.com' required></input>
                                </div>
                                <div className='form-row-inputs'>
                                    <span >Phone number</span>
                                    <input onChange={e => setPhone(e.target.value)} className='form-row-input' value={request.phone} type='tel' placeholder='(___)___-__-__' required ></input>
                                </div>
                            </div>
                            <button className='apply-button'>Apply</button>
                        </form>
                    </div>
                </div>
                <img src={pic}></img>
            </div>
            <Footer></Footer>

        </>
    )
}
