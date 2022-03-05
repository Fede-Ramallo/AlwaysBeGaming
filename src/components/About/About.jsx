import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
import NavBar from '../NavBar/NavBar'

const About = () => {
    return(
        <div>
            <NavBar />
            <div className='tituloContainer'>Bienvenidos a mi about</div>
        </div>
    )
}

export default About;