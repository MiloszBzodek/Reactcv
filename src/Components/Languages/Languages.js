import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar'; // Importuj komponent ProgressBar
import './Languages.scss';

export default class Languages extends React.Component {
    render () {
        return (
            <div id='languages' className='body'>
                <h1 className='heading'>Languages</h1>
                <ProgressBar percentage={100} label="Polish (Native)" /> {/* Polski na poziomie C2 */}
                <ProgressBar percentage={65} label="English (B1)" /> {/* Angielski na poziomie B1 */}
                <ProgressBar percentage={30} label="Spanish (A2)" /> {/* Hiszpański na poziomie A2 */}
            </div>
        );
    }
}
