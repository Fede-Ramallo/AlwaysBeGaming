import React from 'react';
import Logo from '../../assets/images/abg-icon.png'
import SearchBar from './SearchBar/SearchBar';
import './NavBar.css';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">
          <Link to={"/"}>
          <img id="logoABG" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          </Link>
        </span> 
        <div className='linkContainer'>
        <Link to='/home' className='linkChild'>Home</Link>
        <Link to='/games' className='linkChild'>Games</Link>
        <Link to='/games/category' className='linkChild'>Category</Link>
        <Link to='/help' className='linkChild'>Help</Link>
        <Link to='/about' className='linkChild'>About Me</Link>
        </div>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;