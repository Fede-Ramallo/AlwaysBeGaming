import React from 'react';
import { Link } from 'react-router-dom';
import './Results.css'

const Results = (props) => {

return(
    <div>
        <ul className='containerResult'>
            {
                props.gameResults.map(game => (
                    <li key={game.id} className='eachGameR'>
                        <Link to={{
                            pathname: `/game/${game.name}`,
                            gameProps: {
                                game: game
                            }
                        }}>
                            <h3>{game.name}</h3>
                            <img src={game.background_image} alt='game' className='backgroundImgR'/>
                        </Link>
                    </li>
                ))
            }
            </ul>
    </div>
)
}

export default Results;