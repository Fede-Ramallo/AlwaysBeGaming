import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Games.css';
import Pagination from '@material-ui/lab/Pagination';


const Games = () => {
  const apiKey = "199a87eb35b6431a97d43e89f30741c7";

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
    console.log("le hice click pa", page)
  }

  let counter = Math.floor(pagecount/15);

  console.log("this is games", games)

  return (
    <div className="listContainer">
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
      <div className='btnContainer'>
      <Pagination count={counter} onChange={handleChange} className='paginationContainer'/>
      </div>
    </div>
  )
}

export default Games;