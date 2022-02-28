import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}) {
  const [games, setGames] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(games);
    }}>
      <input
        type="text"
        placeholder="Games..."
        value={games}
        onChange={e => setGames(e.target.value)}
        className="cajaLoca"
      />
      <input type="submit" value="Search"  className="btnSubmit"/>
    </form>
  );
}
