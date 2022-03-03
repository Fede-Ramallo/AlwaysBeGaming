import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Land from "./components/Land/Land";
import Home from "./components/Home/Home";
import GameDetail from './components/Games/GameDetails/GameDetail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Land />} />
      <Route path="home" element={<Home />} />
      <Route path="games" element={<Home />} />
      <Route path="games/categories" element={<Home />} />
      <Route path="game/:name" element={<GameDetail />} />
      <Route path="help" element={<Home />} />
      <Route path="about" element={<Home />} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  </BrowserRouter>
  );
}



export default App;