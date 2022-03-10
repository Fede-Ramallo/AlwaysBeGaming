import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import {Link} from 'react-router-dom';
import './FAQ.css'

const FAQ = () => {

    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);

    return(
        <div>
            <NavBar />
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
            <div>Why do you have such a big dick?</div>
            <div>{isActive2 ? '-' : '+'}</div>
          </div>
          {isActive2 && <div className="accordion-content">I was born this way baby girl.</div>}
        </div>
        <div className="accordion-item">
            <div className="accordion-title"
            onClick={() => setIsActive3(!isActive3)}>
            <div>Where can i find you OnlyFans?</div>
            <div>{isActive3 ? '-' : '+'}</div>
          </div>
          {isActive3 && <div className="accordion-content">Im actually working on it.</div>}
      <div className="accordion-item">
            <div className="accordion-title"
            onClick={() => setIsActive4(!isActive4)}>
            <div>What did you use to make this page?</div>
            <div>{isActive4 ? '-' : '+'}</div>
          </div>
          {isActive4 && <div className="accordion-content">Most of this was made with React.js and Node.js
          the first one mentioned uses only the base of html, and css combined with javascript to interact with events.
          For the backend mostly Express and SQL</div>}
        </div>
        </div>
        </div>
        </div>
    )
}

export default FAQ;