import React from 'react';
import { Link } from 'react-router-dom';
import './Results.css'
import { motion } from 'framer-motion';

const divVariant = {
    hidden: {
      opacity: 0
    },
    visible:{
      opacity: 1,
      transition:{
        delay: 1.1,
        duration: 1
      },
      exit: {
        opacity: 0,
        transition: {ease: 'easeInOut'}
      }
    }
  }
  

const ResultsSearch = ({gameResults}) => {
return(
    <motion.div variants={divVariant} initial='hidden' animate='visible' exit='exit'>
        <ul className='containerResult'>
            {
                gameResults.map(game => (
                    <li key={game.id} className='eachGameR'>
                        <Link to={{
                            pathname: `/game/${game.id}`,
                            gameProps: {
                                game: game
                            }
                        }}>
                            <img src={game.background_image} alt='game' className='backgroundImgR'/>
                            <h5 className='gameNameR'>{game.name}</h5>
                        </Link>
                    </li>
                ))
            }
            </ul>
    </motion.div>
)
}

export default ResultsSearch;