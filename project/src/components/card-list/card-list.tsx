import FlatCard from '../../components/flat-card/flat-card';
import {Rooms, Offers} from '../../types/offers';

type Flats = {
  offers: Rooms
}

function CardList ({offers}: Flats): JSX.Element {
  const [firstCard] = offers;

  return (
    <div className="cities__places-list places__list tabs__content">
      <FlatCard offers={firstCard as Offers}/>
      <FlatCard offers={firstCard as Offers} />
      <FlatCard offers={firstCard as Offers}/>
      <FlatCard offers={firstCard as Offers}/>
      <FlatCard offers={firstCard as Offers}/>
    </div>

  );
}

export default CardList;
