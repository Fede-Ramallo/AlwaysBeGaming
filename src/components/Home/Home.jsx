import React from 'react';
import './Home.css';
import NavBar from '../NavBar/NavBar';
import CardList from '../Cards/CardList';
import CardItem from '../Cards/CardItem';

export default function Home (){
    return (
        <div className='containerHome'>
            <NavBar />
            <div className='gifContainer'></div>
            <div className='textHomeContainer'>All Games</div>
            <div><CardItem /></div>
        </div>
    )
}
