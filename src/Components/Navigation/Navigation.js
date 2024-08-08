import React from 'react';
import './Navigation.scss';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className='navigation'>
                <ul className='list'>
                    <li> <a href='#contactDetails'>Contact</a></li>
                    <li> <a href='#summary'>Summary</a></li>
                    <li> <a href='#education'>Education</a></li>
                    <li> <a href='#experience'>Experience</a></li>
                    <li> <a href='#skills'>Skills</a></li>
                    <li> <a href='#languages'>Languages</a></li>
                </ul>
            </div>
        );
    }
}

