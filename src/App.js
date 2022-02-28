import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Land from "./components/Land/Land";
import Home from "./components/Home/Home";
import CardList from './components/Cards/CardList';

const axios = require('axios').default;


const apiKey = "199a87eb35b6431a97d43e89f30741c7";

function App() {
  // ni idea xD
  const [games, SetGames] = useState([]);

  const mostrarJuego = () => {
    axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
    .then(function (response){
      console.log(response.data.results[0])

      //lo que deberia contener cuando traigo "juegos"
      const juegos = {
        id: response.data.results[0].id,
        name: response.data.results[0].name,
        background_image: response.data.results[0].background_image,
        genre: response.data.results[0].genres[0].name
      }
    })
    .catch(function (error){
      console.log(error)
    })
  }

  mostrarJuego();

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Land />} />
      <Route path="Home" element={<Home />} />
      <Route path="Games" element={<Home />} />
      <Route path="Games/Category" element={<Home />} />
      <Route path="Help" element={<Home />} />
      <Route path="About" element={<Home />} />
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