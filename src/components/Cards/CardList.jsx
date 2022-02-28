import React from 'react';

import CardItem from './CardItem';

export default function CardList({games}) {
  return (
    <div className='cardList'>
      {games.map(g => <CardItem
          key={g.data.results.id}
          name={g.data.results.name}
          img={g.data.results.background_image}
          genre={g.data.results.genres[0].name}
        /> )}
    </div>
  );
}
