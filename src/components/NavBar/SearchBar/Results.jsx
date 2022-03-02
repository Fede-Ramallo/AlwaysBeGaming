import React from 'react';
import { Link } from 'react-router-dom';
import './Results.css'

const Results = (props) => {

return(
    <div className='containerResult'>
            {
                props.gameResults.map(game => (
                    <div key={game.id} className='eachGameR'>
                        <Link to={{
                            pathname: `/game/${game.name}`,
                            gameProps: {
                                game: game
                            }
                        }}>
                            <h3>{game.name}</h3>
                            <img src={game.background_image} alt='game' className='backgroundImgR'/>
                        </Link>
                    </div>
                ))
            }
    </div>
)
}

export default Results;