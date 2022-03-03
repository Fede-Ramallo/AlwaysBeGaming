import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Games.css';


const Games = () => {
  const apiKey = "199a87eb35b6431a97d43e89f30741c7";

  const [page, setPage] = useState(1);
  const [games, setGames] = useState([])

  useEffect(() => {
    fetchGames()
  },[])

  const fetchGames = () => {
    fetch(`https://api.rawg.io/api/games?key=${apiKey}&page=${page}&page_size=15`)
    .then(resp => resp.json())  
    .then(({results}) => setGames(results))
  }

  return (
    <div>
      <ul className='containerGames'>
      {
        games.map(game => (
          <li key={game.id} className='eachGame'>
            <Link to={{
                pathname: `/game/${game.name}`,
                gameProps:{
                  game: game
                }
              }}>
            <h3 className='gameName'>{game.name}</h3>
            <img src={game.background_image} alt="game" className='backgroundImg'/>
            </Link>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default Games;