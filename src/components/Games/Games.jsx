import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Games.css';
import Pagination from '@material-ui/lab/Pagination';


const Games = () => {
  const apiKey = "199a87eb35b6431a97d43e89f30741c7";

  const [page, setPage] = useState(1);
  const [games, setGames] = useState([])

  useEffect(() => {
    fetchGames()
  },[page])

  const fetchGames = () => {
    fetch(`https://api.rawg.io/api/games?key=${apiKey}&page=${page}&page_size=15`)
    .then(resp => resp.json())  
    .then(({results}) => setGames(results))
  }

  const handleChange = (e, value) =>{
    e.preventDefault()
    setPage(value)
    console.log("le hice click pa", page)
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
            <img src={game.background_image} alt="game" className='backgroundImg'/>
            <h5 className='gameName'>{game.name}</h5>
            </Link>
          </li>
        ))
      }
      </ul>
      <div className='btnContainer'>
      <Pagination count={46333} onChange={handleChange} />
      </div>
    </div>
  )
}

export default Games;