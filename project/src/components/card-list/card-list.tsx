import FlatCard from '../../components/flat-card/flat-card';
import { Offer } from '../../types/offers';

type Flats = {
  offers: Offer[]
}

function CardList ({offers}: Flats): JSX.Element {
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
