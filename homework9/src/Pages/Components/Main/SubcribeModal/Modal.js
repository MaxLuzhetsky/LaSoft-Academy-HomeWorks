import React from 'react'

import { useForm } from "react-hook-form";
import { useCreateSubscribeInfoMutation } from '../../../../Redux/apiService';


import './modal.css'
import pic from './img/right.png'


export default function Modal({ visible, setVisible }) {

    
    const { register, handleSubmit } = useForm();
    const [createReq, data] = useCreateSubscribeInfoMutation()
    const onSubmit = (data) => {
        console.log(data)
        createReq(data)
        setVisible(false)
    }



    return (
        <div className={visible ? "subscribe-container active" : "subscribe-container"}>
            <div className='subscribe'>
                <div className='subscribe-left'>
                    <button className='subscribe-cross-button' onClick={() => setVisible(false)}>x</button>

                    <div className='subscribe-form'>
                        <h3>Give us your email to stay tuned!</h3>
                        <div className='subscribe-input'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='subscribe-email'  {...register("email")} type="email" placeholder='enter your email' required />
                                <button type='submit' >subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <img src={pic}></img>


            </div>

        </div>
    )
}
