import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Trending.css'
import { motion } from 'framer-motion';
import ResultsSearch from '../NavBar/SearchBar/ResultsSearch';

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
    transition: {ease: 'easeInOut'}
  }
};

const Trending = ({gameResults, searchTerm}) => {

  useEffect(() => {
    fetchGames()
  },[])

  const [games, setGames] = useState([])

  const fetchGames = () => {
    fetch('https://rawg.io/api/collections/must-play/games')
    .then(resp => resp.json())
    .then(({results}) => setGames(results))
  }

  return (
    <motion.div className='trendingGamesContainer'  variants={divVariant} initial='hidden' animate='visible' exit='exit'>
      {searchTerm === '' && <div className='xDnt'>Top Trending Games 🔥</div>}
      {searchTerm === '' ? <ul className='TrendContainer'>
      {
        games.map(game => (
          <li key={game.id} className='eachGameTrend'>
            <Link to={{
                pathname: `/game/${game.id}`,
                gameProps:{
                  game: game
                }
              }}>
            <img src={game.background_image} alt="game" className='bgImgTrend'/>      
            <h3 className='nameContainerTrend'>{game.name}</h3>
            </Link>
          </li>
        ))
      }
      </ul> : <ResultsSearch gameResults={gameResults}/>}
    </motion.div>
  )
}

export default Trending;