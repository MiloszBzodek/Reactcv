import React from 'react';
import './ProgressBar.scss'; // Stwórz plik SCSS dla stylizacji paska

const ProgressBar = ({ percentage, label }) => {
    return (
        <div className='progress-bar-container'>
            <div className='progress-bar-label'>{label}</div>
            <div className='progress-bar'>
                <div
                    className='progress-bar-fill'
                    style={{ width: `${percentage}%` }}
                >
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
