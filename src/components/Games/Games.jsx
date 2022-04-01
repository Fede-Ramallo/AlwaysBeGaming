import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Games.css';
import Pagination from '@material-ui/lab/Pagination';
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
    }
  },
  exit: {
    opacity: 0,
    transition: {ease: 'easeOut'}
  }
};


const Games = () => {
  const apiKey = "4956dc2e647241bf939dfdbd958ab45e";

  const [page, setPage] = useState(1);
  const [games, setGames] = useState([])
  const [pagecount, setPagecount] = useState(undefined)

  useEffect(() => {
    const fetchGames = () => {
      fetch(`https://api.rawg.io/api/games?key=${apiKey}&page=${page}&page_size=15`)
      .then(resp => resp.json())  
      .then(({results}) => setGames(results))
    };
    fetchGames();
    const pageCountSearch = () => {
      fetch(`https://api.rawg.io/api/games?key=${apiKey}`)
      .then(resp => resp.json())
      .then(({count}) => setPagecount(count))
    }
    pageCountSearch();
  },[page]);

  const handleChange = (e, value) =>{
    e.preventDefault()
    setPage(value)
  }

  let counter = Math.floor(pagecount/15);

  return (
    <motion.div className="listContainer" variants={divVariant} initial='hidden' animate='visible' exit='exit'>
      <ul className='containerGames'>
      {
        games.map(game => (
          <li key={game.id} className='eachGame'>
            <Link to={{
                pathname: `/game/${game.id}`,
                gameProps:{
                  game: game
                }
              }}>
            <img src={game.background_image} alt="game" className='backgroundImg'/>
            <h5 className='gameName'>{game.name}</h5>
            </Link>
          </li>
        ))
      }
      </ul>
      <div className='flexContainer'>
      <div className='btnContainer'>
      <Pagination count={counter} onChange={handleChange} className='paginationContainer'/>
      </div>
      </div>
    </motion.div>
  )
}

export default Games;