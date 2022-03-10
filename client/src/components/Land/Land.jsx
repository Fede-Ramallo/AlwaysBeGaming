import React from 'react';
import './Land.css';
import { Link } from 'react-router-dom';

export default function Land (){
    return (
    <div className='fdp'>
        <div className='containerLand'>
            <div className='landChild'>Welcome to Always Be Gaming</div>
            <div className='landChild'>Press the button below to continue</div>
            <Link to="/home" className="botonsitox">Continue</Link>
        </div>
    </div>
    )
}
