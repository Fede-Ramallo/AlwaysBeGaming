import React, { useState } from "react";
import './Home.css';
import NavBar from '../NavBar/NavBar';
import Results from '../NavBar/SearchBar/Results';
import Games from '../Games/Games';
import Gif from '../../assets/gif/Gaming-gif.gif'

export default function Home (){
    const [searchTerm, setSearchTerm] = useState("");
    const [gameResults, setGameResults] = useState([])
  
    const apiKey = "199a87eb35b6431a97d43e89f30741c7";

    const onSearch = (jogo) => {
      let slug = jogo.split(' ').join('-').toLowerCase()
      setGameResults([])
      fetch(`https://rawg.io/api/games?key=${apiKey}&search=${slug}`)
      .then(resp => resp.json())
      .then(({results}) => {
        results === undefined ? alert('no games found') : setGameResults(results)
      })
      setSearchTerm(jogo)
    }

    return (
        <div className='containerHome'>
            <NavBar onSearch={onSearch} />
            <img src={Gif} alt='' className="gifContainer"/>
            <div className='textHomeContainer'>All Games</div>
            {
            searchTerm === "" ? <Games /> : <Results gameResults={gameResults}/>
            }
        </div>
    )
}
