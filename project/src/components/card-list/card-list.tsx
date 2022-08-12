import FlatCard from '../../components/flat-card/flat-card';
import {Offer} from '../../types/offers';

type Flats = {
  offers: Offer[]
}

function CardList ({offers}: Flats): JSX.Element {
  // const [firstCard] = offers;

  return (
    <div className="cities__places-list places__list tabs__content">
      {/* <FlatCard offers={firstCard as Offers}/>
      <FlatCard offers={firstCard as Offers} />
      <FlatCard offers={firstCard as Offers}/>
      <FlatCard offers={firstCard as Offers}/>
      <FlatCard offers={firstCard as Offers}/> */}

      {offers.map((offer, index) => (
        <div key={`${Math.random()}`}>
          <FlatCard offer={offer}/>
        </div>
      ))}
    </div>

  );
}

export default CardList;
