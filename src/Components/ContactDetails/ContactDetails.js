import React from 'react';
import './ContactDetails.scss';

export default class ContactDetails extends React.Component {
    render() {
        return (
            <div id='contactDetails' className='body'>
                <h1 className='heading'>Contact</h1>
                <div className='contact'>
                    <div className='image'>
                        <p> <img src='https://cdn.pixabay.com/photo/2017/05/09/00/15/resume-2296951_1280.png'></img> </p>
                    </div>
                    <div className='contactDetails'>
                        <p className='name'>MIŁOSZ BZODEK</p>
                        <p>Email: milosz.bzodek@gmail.com</p>
                        <p>Phone number: 669 737 508</p>
                    </div>
                </div>
            </div>
        );
    }
}