import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Games.css';


const Games = () => {
  const apiKey = "199a87eb35b6431a97d43e89f30741c7";

  let pageCount = 1;

  useEffect(() => {
    fetchGames()
  }, [])

  const [games, setGames] = useState([])

  const fetchGames = () => {
    fetch(`https://api.rawg.io/api/games?key=${apiKey}&page=${pageCount}&page_size=15`)
      .then(resp => resp.json())
      .then(({ results }) => setGames(results))
  }
  console.log('tthis is games', games)
  return (
    <div className='containerGames'>
      {/* <ul>
      list-style: none;
            <li>
              listado de juegos
            </li>
          </ul> */}
      {
        games.map(game => (
          <div key={game.id} className='eachGame'>
            <Link to={{
              pathname: `/game/${game.name}`,
              gameProps: {
                game: game
              }
            }}>
              <h3 className='gameName'>{game.name}</h3>
              <img src={game.background_image} alt="game" className='backgroundImg' />
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Games;