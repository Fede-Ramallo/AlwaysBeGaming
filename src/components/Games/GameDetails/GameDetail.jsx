import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../NavBar/NavBar'
import './GameDetails.css'

const GameDetail = () => {
  const apiKey = "199a87eb35b6431a97d43e89f30741c7";
  const [game, setGame] = useState("");
  const [genre, setGenre] = useState([]);
  const [platform, setPlatform] = useState([]);
  const [screen, setScreen] = useState([]);
  const { id } = useParams();
  const url = "https://api.rawg.io/api/games/" + id + "?key=" + apiKey;

  useEffect(() => {
    searchGame()
    searchGenre()
    searchPlatform()
    searchSS()
  },[]);

      const searchGame = () => {
      fetch(url)
      .then(resp => resp.json())  
      .then((resp) => setGame(resp))
    }  
    const searchGenre = () => {
      fetch(url)
      .then(resp => resp.json())  
      .then((resp) => setGenre(resp.genres))
    }
    const searchPlatform = () => {
      fetch(url)
      .then(resp => resp.json())  
      .then((resp) => setPlatform(resp.platforms))
    }
    const searchSS = () => {
      fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${apiKey}`)
      .then(resp => resp.json())
      .then(({results}) => setScreen(results))
    }
    return (
      <div>
        <NavBar />
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
      </div>
    );
  }
  
  export default GameDetail;