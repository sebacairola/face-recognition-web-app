import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className="flex-center mt2">
            <div className="absolute mt2">
                <img id='inputImage' alt="" width="500px" height="auto" src={imageUrl} />
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} ></div>
            </div>            
        </div>
    );
}

export default FaceRecognition;