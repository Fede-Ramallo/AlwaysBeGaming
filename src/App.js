import React, {useState} from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Land from './components/Land/Land';
import Home from './components/Home/Home';
import GameDetail from './components/Games/GameDetails/GameDetail';
import Trending from './components/Trending/Trending';
import Category from './components/Category(es)/Category';
import About from './components/About/About';
import FAQ from './components/FAQ/FAQ';
import { AnimatePresence } from 'framer-motion';
import NavBar from './components/NavBar/NavBar';

function App () {
  const [searchTerm, setSearchTerm] = useState("");
  const [gameResults, setGameResults] = useState([])
  const location = useLocation();

  const apiKey = "4956dc2e647241bf939dfdbd958ab45e";

  const onSearch = (jogo) => {
    let slug = jogo.split(' ').join('-').toLowerCase()
    setGameResults([])
    fetch(`https://rawg.io/api/games?key=${apiKey}&search=${slug}`)
      .then(resp => resp.json())
      .then(({ results }) => {
        results === undefined ? alert('no games found') : setGameResults(results)
      })
    setSearchTerm(jogo)
  }
  return (
    <>
    {
      location.pathname !== '/' && <NavBar onSearch={onSearch} setSearchTerm={setSearchTerm}/>
    }
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route exact path='/' element={<Land />} />
        <Route path='home' element={<Home gameResults={gameResults} searchTerm={searchTerm}/>} />
        <Route path='games' element={<Trending gameResults={gameResults} searchTerm={searchTerm}/>} />
        <Route path='category/:name' element={<Category />} />
        <Route path='game/:id' element={<GameDetail />} />
        <Route path='faq' element={<FAQ />} />
        <Route path='about' element={<About />} />
        <Route
          path='*'
          element={<Navigate to='/home' />}
        />
      </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
