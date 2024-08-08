import React from 'react';
import './Education.scss';

export default class Education extends React.Component {
    render() {
        return (
            <div id='education' className='body'>
                <h1 className='heading'>Education</h1>
                <div className='box1'>
                    <div className='image'>
                        <p> <img src='https://bip-archiwum.put.poznan.pl/themes/newputpoznan/images/PP-PUT_logo_drut_wh.png'></img> </p>
                    </div>
                    <div className='study'>
                        <p>Degree: Master</p>
                        <p>Field of study: Mechatronics</p>
                        <p>Graduation date: 07/2024</p>
                    </div>
                </div>

                <div className='box2'>
                    <div className='image'>
                        <p> <img src='https://bip-archiwum.put.poznan.pl/themes/newputpoznan/images/PP-PUT_logo_drut_wh.png'></img> </p>
                    </div>
                    <div className='study'>
                        <p>Degree: Engineer</p>
                        <p>Field of study: Mechatronics</p>
                        <p>Graduation date: 02/2023</p>
                    </div>
                </div>
            </div>
        );
    }
}