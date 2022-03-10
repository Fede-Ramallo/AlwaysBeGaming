import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar';
import './Trending.css'


const Trending = () => {

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
    <div>
        <NavBar />
        <div className='xDnt'>Top Trending Games 🔥</div>
      <ul className='TrendContainer'>
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
      </ul>
    </div>
  )
}

export default Trending;