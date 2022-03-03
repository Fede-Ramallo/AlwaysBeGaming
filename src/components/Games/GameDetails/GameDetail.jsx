import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const GameDetail = () => {
  const apiKey = "199a87eb35b6431a97d43e89f30741c7";
  const [game, setGame] = useState([]);
  const { name } = useParams();

  let nombresito = name.split(' ').join('-').toLowerCase();

  const url = "https://api.rawg.io/api/games?key=" + apiKey + "&search=" + nombresito + "&search_exact=true";

  useEffect(() => {
    fetchGames()
  },[]);

  const fetchGames = () => {
    fetch(url)
    .then(resp => resp.json())  
    .then(({results}) => setGame(results))
  };

    console.log("this is the game", game);  
    return (
      <div>
        <h1>{game.name}</h1>
        <p>Released: {game.released}</p>
        <p>Rating: {game.rating}</p>
        <h3>Genre(s):</h3>
          { 
            game.genres.map(g => `${g.name} | `)
          }
  
        <h3>Platform(s):</h3>
          { 
            game.platforms.map(p => `${p.platform.name} | `)
          }
  
        <ul>
          {
            game.short_screenshots.map(ss => <li><img src={ss.image} alt='screenshot'></img></li>)
          }
        </ul>
      </div>
    );
  }
  
  export default GameDetail;