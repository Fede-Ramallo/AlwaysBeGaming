import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from 'react-router-dom';
import './Category.css'

const Category = () => {
  const apiKey = "199a87eb35b6431a97d43e89f30741c7";
  const [game1, setGame1] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(undefined)
  const { name } = useParams();

  useEffect(() => {
  const searchGame = () => {
    fetch(`https://api.rawg.io/api/games?key=${apiKey}&page=${page}&page_size=15&genres=${name}`)
    .then(resp => resp.json())
    .then(({results}) => setGame1(results))
  };
    searchGame();
    const pageCountSearch = () => {
      fetch(`https://api.rawg.io/api/genres/${name}?key=${apiKey}`)
      .then(resp => resp.json())
      .then((resp) => setCount(resp.games_count))
    };
    pageCountSearch();
  },[name,page])

  const handleChange = (e, value) =>{
    e.preventDefault()
    setPage(value)
    console.log("le hice click pa", page)
  }

  let number = Math.floor(count/15)

    return (
      <div>
        <NavBar />
        <div>
          <div className='categoryTitleContainer'>{name} Category</div>
        <ul className='containerGames'>
        {
         game1.map(game => (
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
      </div>
      <div className='btnContainer'>
      <Pagination count={number} onChange={handleChange} className='paginationContainer'/>
      </div>
      </div>
    );
  }
  
  export default Category;