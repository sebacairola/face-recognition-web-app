import React from 'react';
import Tilt from 'react-tilt';
import image from './face-recognition.png';

const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"><img alt="" src={image} /></div>
            </Tilt>
        </div>
    );
}

export default Logo;