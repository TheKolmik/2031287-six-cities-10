import React from 'react';
import {Link} from 'react-router-dom';
import { Offer } from '../../types/offers';
import {useState} from 'react';

type Props = {
  offer: Offer;
};

function FlatCard ({offer}: Props): JSX.Element {
  const { price, name, type, src} = offer;

  const [selectedCard, setSelectedCard] = useState(offer);

  return (

    <article onMouseOver={() => {
      setSelectedCard({
        ...selectedCard,
      });
    }} className="cities__card place-card"
    >

      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="offer">
          <img className="place-card__image" src={src} width="260" height="200" alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="offer">{name}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );
}

export default FlatCard;
