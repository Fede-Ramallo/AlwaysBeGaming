import React from 'react';
import Logo from '../abg-icon.png'
import SearchBar from './SearchBar/SearchBar.jsx';
import './NavBar.css';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">
          <img id="logoABG" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
        </span>
        <div className='linkContainer'>
        <Link to='/Home' className='linkChild'><div>Home</div></Link>
        <Link to='/Games' className='linkChild'>Games</Link>
        <Link to='/Games/Category' className='linkChild'>Category</Link>
        <Link to='/Help' className='linkChild'>Help</Link>
        <Link to='/About' className='linkChild'>About Me</Link>
        </div>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;