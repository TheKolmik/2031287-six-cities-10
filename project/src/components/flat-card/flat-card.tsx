import React from 'react';
import {Link} from 'react-router-dom';
import { Offers } from '../../types/offers';
import {useState} from 'react';

type OffersProps = {
  offers: Offers;
};

function FlatCard (props: OffersProps): JSX.Element {
  const {offers} = props;
  const {price, name, type, src} = offers;

  const [selectedCard, setSelectedCard] = useState(offers);

  return (

  {offers.map((point, id) => {

    const keyPrice = `${id}-${point.price}`;
    const keyName = `${id}-${point.name}`;
    const keyType = `${id}-${point.type}`;
    const keySrc = `${id}-${point.src}`;

    return (

    <article onMouseOver={() => {
      setSelectedCard({
        ...selectedCard,
      });
      console.log(selectedCard);
    }} className="cities__card place-card"
    >

      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div key={keySrc} className="cities__image-wrapper place-card__image-wrapper">
        <Link to="offer">
          <img className="place-card__image" src={point.src} width="260" height="200" alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div key={keyPrice} className="place-card__price">
            <b className="place-card__price-value">&euro;{point.price}</b>
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
        <h2 key={keyName} className="place-card__name">
          <Link to="offer">{point.name}</Link>
        </h2>
        <p key={keyType} className="place-card__type">{point.type}</p>

      </div>


    </article>

  );

  })}

  );
}

export default FlatCard;
