import React from 'react'
import { Link } from 'react-router-dom'

import './apply.css'

import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

import pic from './img/applied.png'

export default function Applied() {
  return (
    <>
    <Header></Header>
    <div className='applied-container'>
        <div className='applied'>
            <img src={pic}></img>
            <h3>Thank you!</h3>
            <p>Check your mailbox. There should be a confirmation letter. We’ll contact you soon to give you info about next steps</p>
            <Link className='applied-link' to="/"><button className='applied-home-button'>Back to Home</button></Link>
        </div>
    </div>
    <Footer></Footer>
    </>
  )
}
