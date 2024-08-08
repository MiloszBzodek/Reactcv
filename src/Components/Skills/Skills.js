import React from 'react';
import './Skills.scss';

export default class Skills extends React.Component {
    render() {
        return (
            <div id='skills' className='body'>
                <h1 className='heading'>Skills</h1>
                <ul className='list2'>
                    <li>Basic knowledge of JavaScript, HTML, CSS, REACT, SASS - applied in learning to build simple websites.</li>
                    <li>Basic knowledge of Python - utilized Python for academic purposes as well as for personal projects, including my thesis.</li>
                    <li>Basic knowledge of data structures and algorithms - implemented vision algorithms in Python as part of my thesis project.</li>
                    <li>Punctuality - consistently delivered projects on time, demonstrating effective time management skills.</li>
                    <li>Communication Skills - participated in group projects during my studies, which enhanced my communication abilities and teamwork skills.</li>
                    <li>Problem-Solving - ability to effectively address and resolve issues, gained from experience with student projects and thesis work.</li>
                </ul>
            </div>
        );
    }
}