import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import './apply.css'

import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'



import { useForm, Controller } from "react-hook-form";
import Select from 'react-select'


import pic from './img/pic.png'
import { useCreateApplyInfoMutation } from '../../Redux/apiService'






export default function Apply() {
    const [createReq, data] = useCreateApplyInfoMutation()

    const navigate = useNavigate();

    const { register,
        handleSubmit,
        control
    } = useForm();


    const onSubmit = (data) => {
        createReq(data)
            .then(() => navigate('/applie'))
            .catch(error => console.error('error', error))
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
    const styles = {
        control:(provided,state)=>({
            ...provided,
            minWidth:'295px',
            width:'295px',
            borderRadius:"10px",
            fontFamily:'Poppins',
            fontSize:'14px',
            padding:'2px'
        }),
        option:(provided,state)=>({
            ...provided,
            padding:'2px',
            minHeight:'30px',
            height:'30px',
            fontFamily:'Poppins'
        }),
        singleValue:(provided,state)=>({
            ...provided,
            padding:'2px'
        })
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='form-row'>
                                <span >Course</span>
                                <Controller
                                    name="courseId"
                                    control={control}
                                    render={({ field }) => <Select
                                        {...field}
                                        options={firstOptions}
                                        styles={styles}
                                        required
                                    />}
                                />
                            </div>
                            <div className='form-row'>
                                <span >Group</span>
                                <Controller
                                    name="groupId"
                                    control={control}
                                    render={({ field }) => <Select
                                        {...field}
                                        options={secondOptions}
                                        styles={styles}
                                        required
                                    />}
                                />
                            </div>
                            <div className='inputs'>
                                <div className='form-row-inputs'>
                                    <span >Full name</span>
                                    <input name="full_name" {...register("full_name")} className='form-row-input' type='text' required></input>
                                </div>
                                <div className='form-row-inputs'>
                                    <span >E-mail</span>
                                    <input name='email' {...register("email")} className='form-row-input' type='email' placeholder='email@email.com' required></input>
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
