import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../NavBar/NavBar'

const GameDetail = () => {
  const apiKey = "199a87eb35b6431a97d43e89f30741c7";
  const [game, setGame] = useState("");
  const { id } = useParams();

  const url = "https://api.rawg.io/api/games/" + id + "?key=" + apiKey;

  useEffect(() => {
    buscarJuego()
  },[game]);

      const buscarJuego = () => {
      fetch(url)
      .then(resp => resp.json())  
      .then((resp) => setGame(resp))
    }  

    console.log("this is the game", game);  

    return (
      <div>
        <NavBar />
        <div className='containerDetails'>
        <h1 className='mostrar'>{game.name}</h1>
        <p>Released: {game.released}</p>
        <p>Rating: {game.rating}</p>
        <h3>Genre(s):</h3>
        <h3>Platform(s):</h3> 
        <ul>
        </ul>
        </div>
      </div>
    );
  }
  
  export default GameDetail;