import React from 'react';
import './Summary.scss';

export default class Summary extends React.Component {
    render() {
        return (
            <div id='summary' className='body'>
                <h1 className='heading'>Summary</h1>
                <p className='text'>
                    I am a graduate of the Poznań University of Technology with a degree in Mechatronics, 
                    which encompassed a wide range of fields such as mechanics, electronics, and computer science. 
                    My main interests lie in programming and web technologies. My experience in student projects 
                    and my thesis work has allowed me to develop analytical and practical skills in problem-solving 
                    and the implementation of programming solutions. I am highly committed to further developing my 
                    skills and gaining practical experience in this industry.
                </p>
            </div>
        );
    }
}
