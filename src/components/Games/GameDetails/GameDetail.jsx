import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './GameDetails.css';
import { motion } from 'framer-motion';

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
    transition: {ease: 'easeOut'}
  }
};

const GameDetail = () => {
  const apiKey = "4956dc2e647241bf939dfdbd958ab45e";
  const [game, setGame] = useState("");
  const [genre, setGenre] = useState([]);
  const [platform, setPlatform] = useState([]);
  const [screen, setScreen] = useState([]);
  const { id } = useParams();
  const url = "https://api.rawg.io/api/games/" + id + "?key=" + apiKey;

  useEffect(() => {
    const searchGame = () => {
      fetch(url)
      .then(resp => resp.json())  
      .then((resp) => setGame(resp))
    };
    searchGame();
    const searchGenre = () => {
      fetch(url)
      .then(resp => resp.json())  
      .then((resp) => setGenre(resp.genres))
    };
    searchGenre();
    const searchPlatform = () => {
      fetch(url)
      .then(resp => resp.json())  
      .then((resp) => setPlatform(resp.platforms))
    };
    searchPlatform();
    const searchSS = () => {
      fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${apiKey}`)
      .then(resp => resp.json())
      .then(({results}) => setScreen(results))
    };
    searchSS();
  });

    return (
      <motion.div className='detailsContainer' variants={divVariant} initial='hidden' animate='visible' exit='exit'>
        <div className='containerDetails'>
        <h1 className='tituloJuego'>{game.name}</h1>
        <img src={game.background_image} alt='' className='imgGameContainer'/>
        <div className='textContainer'>
        <h3 className='compartirFont'>About the Game</h3>
        {game.description_raw}
        <h3 className='plsSeparate'>Released:</h3>
        <div className='centerIt'>
        {game.released}
        </div>
        <h3 className='compartirFont'>Rating:</h3>
        <div className='centerIt'>
        ⭐⭐⭐⭐⭐ {game.rating} / 5
        </div>
        <h3 className='compartirFont'>Genre(s):</h3>
        <div className='centerIt'>
        {genre.map(g => { return (g.name + " ")})}
        </div>
        <h3 className='compartirFont'>Platform(s):</h3>
        <div className='centerIt'>
        {platform.map(p => {return (p.platform.name + " ")})} 
        </div>
        </div>
        <div className='containerSSLoco'>
        <h3 className='compartirFont'>Images</h3>
        <ul className='ssContainer'>
          {
            screen.map(ss => <li key={ss.id} className='eachSS'><img src={ss.image} alt='screenshot' className='eachImgSS'></img></li>)
          }
        </ul>
        </div>
        </div>
      </motion.div>
    );
  }
  
  export default GameDetail;