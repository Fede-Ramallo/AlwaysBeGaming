import React from 'react';
import './CardItem.css';

export default function CardItem ({name, background_image, id, genre, }) {
    return (
      <div className="cardItem">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Genres:</p>
              <p>{genre}</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="imagenJuego" src={background_image} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
