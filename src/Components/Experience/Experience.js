import React from 'react';
import './Experience.scss'

export default class Experience extends React.Component {
    render() {
        return (
            <div id='experience' className='body'>
                <h1 className='heading'>Experience</h1>
                <div className='box'>   
                    <div className='image2'>
                        <p> <img src='https://lh3.googleusercontent.com/proxy/SRQV8meC91537lkzPChu0u6yZyDIXVS6SCiI1IuBo6X0yXx0NZgIYpg4Xv4NjMA02arnnY6M3zX9-CU'></img> </p>
                    </div>
                    <div className='study'>
                        <p>Company: Rem-poL Sp. z o.o.</p>
                        <p>Job position: Intern</p>
                        <p>Employment Period: 08/2022 - 09/2022</p>
                        <p>Responsibilities: PLC Programming</p>
                    </div>
                </div>
            </div>
        );
    }
}