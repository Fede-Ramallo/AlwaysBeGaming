import React from "react";
import './Home.css';
import ResultsSearch from '../NavBar/SearchBar/ResultsSearch';
import Games from '../Games/Games';
import dragon from '../../assets/images/greenDragon.png'
import ScrollButton from "./ScrollBack/ScrollButton";

export default function Home({gameResults, searchTerm}) {
return (
    <div className='containerHome' >
      <img src={dragon} alt='' className="logardoContainer" />
      <div className='textHomeContainer'>All Games</div>
      {
        searchTerm === '' ? <Games /> : <ResultsSearch gameResults={gameResults} />
      }
      <ScrollButton />
    </div>
  )
}
