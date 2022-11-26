import React from 'react'
import Select from 'react-select'

import './apply.css'

import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

import pic from './img/pic.png'

export default function Apply() {
    const firstOptions = [
        { value: 'basic sketching', label: 'Basic Sketching' },
        { value: 'watercolor basics', label: 'Watercolor Basics' },
        { value: 'digital sketching', label: 'Digital Sketching' },
        { value: 'some other stuff', label: 'Some other stuff' }

    ]

    const secondOptions = [
        { value: 'mon/wed/fri 7pm-9pm', label: 'mon/wed/fri 7pm-9pm' },
        { value: 'mon/wed/fri 7pm-9pm', label: 'mon/wed/fri 7pm-9pm' },
        { value: 'mon/wed/fri 7pm-9pm', label: 'mon/wed/fri 7pm-9pm' },
        { value: 'mon/wed/fri 7pm-9pm', label: 'mon/wed/fri 7pm-9pm' }

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
                        <form>
                            <div className='form-row'>
                                <span >Course</span>
                                <Select className='form-row-select' options={firstOptions} />
                            </div>
                            <div className='form-row'>
                                <span >Group</span>
                                <Select className='form-row-select' options={secondOptions} />
                            </div>
                            <div className='inputs'>
                                <div className='form-row-inputs'>
                                    <span >Full name</span>
                                    <input  className='form-row-input' type='text'></input>
                                </div>
                                <div className='form-row-inputs'>
                                    <span >E-mail</span>
                                    <input  className='form-row-input' type='email' placeholder='email@email.com'></input>
                                </div>
                                <div className='form-row-inputs'>
                                    <span >Phone number</span>
                                    <input className='form-row-input' type='tel' placeholder='(___)___-__-__' ></input>
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
