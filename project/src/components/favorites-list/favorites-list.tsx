import {Offer} from '../../types/offers';
import FavoriteCard from '../../components/favorite-card/favorite-card';

type Flats = {
  offers: Offer []
}

function FavoritesList ({offers}: Flats): JSX.Element {

  return(

    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/">
                <span>Amsterdam</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">

            {offers.map((offer) => {
              const {id} = offer;

              return (

                <div key={id}>
                  <FavoriteCard
                    offer={offer}
                  />
                </div>

              );
            })}

          </div>
        </li>
      </ul>
    </section>

  );
}

export default FavoritesList;
