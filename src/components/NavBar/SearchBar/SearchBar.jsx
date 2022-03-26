import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {

  const [juegito, setJuegito] = useState("");

  const handleChange = (e) => {
    setJuegito(e.target.value)
  }

  return (
    <form  className="form-inline" onSubmit={(e) => {
      e.preventDefault();
      onSearch(juegito)
      setJuegito('');
    }}>
      <input
        type="text"
        placeholder="Games..."
        value={juegito}
        onChange={handleChange}
        className="searchBar"
      />
      <input type="submit" value="Search"  className="btn btn-outline-success my-2 my-sm-0"/>
    </form>
  );
}
