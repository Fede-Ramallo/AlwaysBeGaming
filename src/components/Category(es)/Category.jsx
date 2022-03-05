import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'

const Category = () => {
  const apiKey = "199a87eb35b6431a97d43e89f30741c7";
  const [game, setGame] = useState("");
  const { name } = useParams();

  const url = "https://api.rawg.io/api/games/" + name + "?key=" + apiKey;

    console.log("this is the game", game);  

    return (
      <div>
        <NavBar />
        <div className='containerDetails'>
        <h1 className='mostrar'>Under construction</h1>
        </div>
      </div>
    );
  }
  
  export default Category;