import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import NavBar from '../NavBar/NavBar';
import Face from '../../assets/images/fotoAbout.png';
import LinkedIn from '../../assets/images/media/linkedin.png';
import Twitter from '../../assets/images/media/twitter.png';
import GitHub from '../../assets/images/media/github.png';
import Instagram from '../../assets/images/media/instagram.png'

const About = () => {
    return (
        <div>
            <NavBar />
            <div className='containerAbout'>
                <img src={Face} alt='' className='myPhoto' />
                <h2 className='aboutMeTitle'>About Me</h2>
                <div>
                    <p className='aboutMeText'>Hi, my name is Federico Ramallo but you can call me Fede 😉. I'm a 22 y/o <b>Fullstack Developer</b> from Argentina and really loves video games (As you can probably tell).
                        I like programming and coding since a young age but never found a good timing to learn, then, in 2019 i decided to go to college and study for a major
                        in system engineering, i had to work and study at the same time and was really difficult for me to concentrate and was finding coding really hard.
                        I had to decide between job or the career, sadly, i chose the job (Not my proudes decision) and since then i was really bored thinking what should i do with my life.
                        then with help from family i was encoureged to start coding again, and re-learn from scratch.
                        This is the moment i started to think that coding was not as hard as i made it out to be, now im trying to do more projects to build a portfolio and make a living out of this profession.
                        So please if you are so kind, i encourage you to send me your Feedback about this page or any other project you see. Dont be shy! i don't bite.
                        Also you can see a more indepth presentation in my social media down below, feel free to check it out.
                    </p>
                </div>
                <div className='containerReLoco'>
                    <div className='titleMedia'>Social Media</div>
                    <ul className='socialMediaContainer'>
                        <li className='eachMedia'><a href={"https://www.linkedin.com/in/federico-ramallo-fullstack-developer/"} target="blank" className='eachMediaText'>LinkedIn <img src={LinkedIn} width='20px' alt='' /></a></li>
                        <li className='eachMedia'><a href="https://twitter.com/IFWinterExilios" target="blank" className='eachMediaText'> Twitter <img src={Twitter} width='20px' alt='' /></a></li>
                        <li className='eachMedia'><a href="https://github.com/IfExilios" target="blank" className='eachMediaText'> GitHub <img src={GitHub} width='20px' alt='' /></a></li>
                        <li className='eachMedia'><a href="https://www.instagram.com/fedeeramallo/" target="blank" className='eachMediaText'> Instagram <img src={Instagram} width='20px' alt='' /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;