import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {

  const [juegito, setJuegito] = useState("");

  const handleChange = (e) => {
    setJuegito(e.target.value)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(juegito);
    }}>
      <input
        type="text"
        placeholder="Games..."
        value={juegito}
        onChange={handleChange}
        className="cajaLoca"
      />
      <input type="submit" value="Search"  className="btnSubmit"/>
    </form>
  );
}
