import React from 'react'
import {  useNavigate  } from 'react-router-dom'


import './apply.css'

import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

import pic from './img/pic.png'
import { useCreateApplyInfoMutation } from '../../Redux/apiService'
import { useForm } from "react-hook-form";



export default function Apply() {


   
    const [createReq, data] = useCreateApplyInfoMutation()

    
    

    const navigate = useNavigate();
    
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => { 
        createReq(data)
        .then(() => navigate('/applie'))
        .catch(error => console.error('error' , error))
    }



    

    const firstOptions = [
        { value: "", label: "Choose your course" },
        { value: 'basic sketching', label: 'Basic Sketching' },
        { value: 'watercolor basics', label: 'Watercolor Basics' },
        { value: 'digital sketching', label: 'Digital Sketching' },
        { value: 'some other stuff', label: 'Some other stuff' }

    ]

    const secondOptions = [
        { value: "", label: "Choose your group" },
        { value: 'mon/wed/fri 6pm-9pm', label: 'mon/wed/fri 7pm-9pm' },
        { value: 'mon/wed/fri 7pm-9pm', label: 'mon/wed/fri 7pm-9pm' },
        { value: 'mon/wed/fri 8pm-9pm', label: 'mon/wed/fri 7pm-9pm' },
        { value: 'mon/wed/fri 5pm-9pm', label: 'mon/wed/fri 7pm-9pm' }

    ]

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
                        <form onSubmit={handleSubmit(onSubmit) }>
                            <div className='form-row'>
                                <span >Course</span>
                                <select className='form-row-select' {...register("courseId")}   required>
                                    {firstOptions.map(option => (
                                                <option key={option.value} value={option.value} >{option.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='form-row'>
                                <span >Group</span>
                                <select className='form-row-select'  {...register("groupId")}  required >
                                    {secondOptions.map(option => (
                                                <option className='select-option' key={option.value} value={option.value} >{option.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='inputs'>
                                <div className='form-row-inputs'>
                                    <span >Full name</span>
                                    <input name="full_name" {...register("full_name")} className='form-row-input' type='text' required></input>
                                </div>
                                <div className='form-row-inputs'>
                                    <span >E-mail</span>
                                    <input name='email' {...register("email")} className='form-row-input'  type='email' placeholder='email@email.com' required></input>
                                </div>
                                <div className='form-row-inputs'>
                                    <span >Phone number</span>
                                    <input name='phone' {...register("phone")} className='form-row-input' type='tel' placeholder='(___)___-__-__' required ></input>
                                </div>
                            </div>
                            <button type='submit' className='apply-button'>Apply</button>
                        </form>
                    </div>
                </div>
                <img src={pic}></img>
            </div>
            <Footer></Footer>

        </>
    )
}
