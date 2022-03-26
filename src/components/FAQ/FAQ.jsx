import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './FAQ.css'
import { motion } from 'framer-motion';

const divVariant = {
  hidden: {
    opacity: 0
  },
  visible:{
    opacity: 1,
    transition:{
      delay: 0.5,
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: {ease: 'easeOut'}
  }
};

const FAQ = () => {

    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);

    return(
        <motion.div className='dropdownscontainer' variants={divVariant} initial='hidden' animate='visible' exit='exit'>
            <div className='titleFAQ'>frequently asked questions</div>
            <div className="accordion">
            <div className="accordion-item">
            <div className="accordion-title"
            onClick={() => setIsActive1(!isActive1)}>
            <div>Where can i contact you?</div>
            <div>{isActive1 ? '-' : '+'}</div>
          </div>
          {isActive1 && <div className="accordion-content">You can contact me trough any of my social media.
          you can see them in the tab about me right above this section, you can click <Link to="/about">Here</Link></div>}
        </div>
        <div className="accordion-item">
            <div className="accordion-title"
            onClick={() => setIsActive2(!isActive2)}>
            <div>How did you do this page and what did you use to make it?</div>
            <div>{isActive2 ? '-' : '+'}</div>
          </div>
          {isActive2 && <ul className="accordion-content">You can find that information in the ReadMe file in my github, but i will tell you the same right here
            <li className='li-accordion'>React - Framework</li>
            <li className='li-accordion'>Rawg.io API.</li>
            <li className='li-accordion'>Css</li>
            <li className='li-accordion'>Material UI & Bootstrap</li>
            <li className='li-accordion'>Animate.css</li>
            <li className='li-accordion'>Google Fonts</li>
            <li className='li-accordion'>React-Router-Dom</li>
          </ul>}
        </div>
        <div className="accordion-item">
            <div className="accordion-title"
            onClick={() => setIsActive3(!isActive3)}>
            <div>Where can i find your CV or other Projects?</div>
            <div>{isActive3 ? '-' : '+'}</div>
          </div>
          {isActive3 && <div className="accordion-content">You can find my CV trough my <a href={"https://www.linkedin.com/in/federico-ramallo-front-end-developer/"} target="blank">LinkedIn</a> and send me a message there. And currently im working on my portfolio to make more projects for you to enjoy!</div>}
      <div className="accordion-item">
            <div className="accordion-title"
            onClick={() => setIsActive4(!isActive4)}>
            <div>What API did you use?</div>
            <div>{isActive4 ? '-' : '+'}</div>
          </div>
          {isActive4 && <div className="accordion-content">I owe credit to <a href={"https://rawg.io/"} target="blank">RAWG</a> for providing me with the API to bring you the games you can see right now!</div>}
        </div>
        </div>
        </div>
        </motion.div>
    )
}

export default FAQ;