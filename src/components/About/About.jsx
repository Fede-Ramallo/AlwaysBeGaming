import React from 'react';
import './About.css';
import Face from '../../assets/images/fotoAbout.png';
import LinkedIn from '../../assets/images/media/linkedin.png';
import Twitter from '../../assets/images/media/twitter.png';
import GitHub from '../../assets/images/media/github.png';
import Instagram from '../../assets/images/media/instagram.png'
import { motion } from 'framer-motion';

const divVariant = {
  hidden: {
    opacity: 0
  },
  visible:{
    opacity: 1,
    transition:{
      delay: 0.5,
      duration: 0.8
    }
  },
  exit: {
    opacity: 0,
    transition: {ease: 'easeOut'}
  }
};

const About = () => {
    return (
        <motion.div className='AboutMeContainer' variants={divVariant} initial='hidden' animate='visible' exit='exit'>
            <div className='containerAbout'>
                <img src={Face} alt='' className='myPhoto' />
                <h2 className='aboutMeTitle'>About Me</h2>
                <div className='aboutMeTextContainer'>
                    <p className='aboutMeText'>Hi, my name is Federico Ramallo but you can call me Fede 😉. I'm a 22 y/o <b>Front-End Developer</b> from Argentina and really loves video games (As you can probably tell).
                        I like programming and coding since a young age but never found a good timing to learn, then, in 2019 i decided to go to college and study for a major
                        in system engineering, i had to work and study at the same time and was really difficult for me to concentrate and was finding coding really hard.
                        I had to decide between job or the career, sadly, i chose the job (Not my proudes decision) and since then i was really bored thinking what should i do with my life.
                        then my family encoureged me to start coding again.
                        This is the moment i started to think that coding was not as hard as i made it out to be, next thing you know i am doing more projects to build a portfolio and make a living from this.
                        So please if you are so kind, i encourage you to send me your Feedback about this page or any other project you see.
                        Also you can see a more in-depth presentation in my social media down below, feel free to contact me.
                    </p>
                </div>
                <div className='containerReLoco'>
                    <div className='titleMedia'>Social Media</div>
                    <ul className='socialMediaContainer'>
                        <li className='eachMedia'><a href={"https://www.linkedin.com/in/federico-ramallo-front-end-developer/"} target="blank" className='eachMediaText'>LinkedIn <img src={LinkedIn} width='20px' alt='' /></a></li>
                        <li className='eachMedia'><a href="https://twitter.com/FedeeRamallo" target="blank" className='eachMediaText'> Twitter <img src={Twitter} width='20px' alt='' /></a></li>
                        <li className='eachMedia'><a href="https://github.com/Fede-Ramallo" target="blank" className='eachMediaText'> GitHub <img src={GitHub} width='20px' alt='' /></a></li>
                        <li className='eachMedia'><a href="https://www.instagram.com/fedeeramallo/" target="blank" className='eachMediaText'> Instagram <img src={Instagram} width='20px' alt='' /></a></li>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default About;