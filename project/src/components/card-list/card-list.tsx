import FlatCard from '../../components/flat-card/flat-card';
import { Offer } from '../../types/offers';
import {MouseEvent} from 'react';
import {Points} from '../../types/coordinates';

type Flats = {
  offers: Offer[];
  points: Points [],
  onListItemHover: (listItemName: string) => void;
};

function CardList ({offers, points, onListItemHover}: Flats): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const { id } = offer;

        return (
          <div key={id}>
            <FlatCard offer={offer}/>
          </div>
        );
      })}
    </div>

  );
}

export default CardList;
