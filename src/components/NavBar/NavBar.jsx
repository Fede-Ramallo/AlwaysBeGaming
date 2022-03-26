import React, { useState, useEffect } from 'react';
import Logo from '../../assets/images/abg-icon.png'
import SearchBar from './SearchBar/SearchBar';
import './NavBar.css';
import { Link } from 'react-router-dom';


function Nav({ onSearch, setSearchTerm }) {
  const apiKey = "4956dc2e647241bf939dfdbd958ab45e";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    searchCategories()
  }, [])

  const searchCategories = () => {
    fetch(`https://api.rawg.io/api/genres?key=${apiKey}`)
      .then(resp => resp.json())
      .then(({ results }) => setCategories(results))
  }

  return (
    <div className='containerNavBar'>
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand mr-5">
        <Link to="/">
          <img id="logoABG" src={Logo} width="50" height="50" className="d-inline-block align-top" alt="" />
        </Link>
      </span>
      <div className='linkContainer'>
        <Link to='/home/reload' className='linkChild' onClick={() => setSearchTerm('')}>Home</Link>
        <Link to='/games' className='linkChild' onClick={() => setSearchTerm('')}>Trending</Link>
        <div className='linkChild'>
          <span>Categories</span>
          <div className='dropdown-content'>
            <ul className='dropdown-ul'>
              {
                categories.map((c, i) =>
                  <li key={i}>
                    <Link to={{ pathname: `/category/${c.name.toLowerCase()}` }} >{c.name}</Link>
                  </li>)
              }
            </ul>
          </div>
        </div>
        <Link to='/faq' className='linkChild'>F.A.Q</Link>
        <Link to='/about' className='linkChild'>About Me</Link>
      </div>
      <SearchBar
        onSearch={onSearch}
      />
    </nav>
    </div>
  );
};

export default Nav;