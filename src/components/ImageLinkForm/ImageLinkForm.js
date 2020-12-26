import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className="flex-column">
            <p className="f3 tc">
                {'This Magic Brain will detect faces in your pictures.'}
            </p>
            <div className="flex-center">
                <div className="pa-box br3 shadow-5 flex-center bg-honey-comb">
                    <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/>
                    <button className="w-30 grow f5 link ph3 pv2 dib white bg-light-purple pointer" onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;