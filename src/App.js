import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Land from './components/Land/Land'
import Home from './components/Home/Home'
import GameDetail from './components/Games/GameDetails/GameDetail'
import Trending from './components/Trending/Trending'
import Category from './components/Category(es)/Category'
import About from './components/About/About'
import FAQ from './components/FAQ/FAQ'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Land />} />
        <Route path='home' element={<Home />} />
        <Route path='games' element={<Trending />} />
        <Route path='category/:name' element={<Category />} />
        <Route path='game/:id' element={<GameDetail />} />
        <Route path='faq' element={<FAQ />} />
        <Route path='about' element={<About />} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
