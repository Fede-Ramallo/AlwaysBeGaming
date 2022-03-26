import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from 'react-router-dom';
import './Category.css';
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


const Category = () => {
  const apiKey = "4956dc2e647241bf939dfdbd958ab45e";
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
      <motion.div className='categoriesContainer' variants={divVariant} initial='hidden' animate='visible' exit='exit'>
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
      <div className='flexContainer'>
      <div className='btnContainer'>
      <Pagination count={number} onChange={handleChange} className='paginationContainer'/>
      </div>
      </div>
      </motion.div>
    );
  }
  
  export default Category;