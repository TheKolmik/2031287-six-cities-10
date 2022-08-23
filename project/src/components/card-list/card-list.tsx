import FlatCard from '../../components/flat-card/flat-card';
import { Offer } from '../../types/offers';
import {MouseEvent, useEffect, useState} from 'react';
import {Points} from '../../types/coordinates';

type Flats = {
  offers: Offer[];
  onCardHover: (offer: Offer | null) => void;
};

function CardList ({offers, onCardHover}: Flats): JSX.Element {
  const [hoveredCard, setHoveredCard] = useState<Offer | null>(null);

  useEffect(() => {
    onCardHover(hoveredCard);
  }, [hoveredCard]);

  const handleHover = (offer: Offer | null) => {
    setHoveredCard(offer);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const { id } = offer;

        return (
          <div key={id}>
            <FlatCard offer={offer} onHover={handleHover} />
          </div>
        );
      })}
    </div>

  );
}

export default CardList;
