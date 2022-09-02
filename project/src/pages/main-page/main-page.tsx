import Logo from '../../components/Logo/Logo';
import {Offer} from '../../types/offers';
import CardList from '../../components/card-list/card-list';
import {Points, City} from '../../types/coordinates';
import Map from '../../components/map/map';
import { CITY } from '../../mocks/coordinates';
import {useState} from 'react';
import CityList from '../../components/city-list.tsx/city-list';


type MainPageProps = {
  places: number;
  offers: Offer[];
  POINTS: Points [];
  city: City;
}

function MainPage ({places, offers, POINTS, city}: MainPageProps): JSX.Element {

  // Можно вот это запсиать в функцию и передать в property-page чтобы не писать заного?
  const [hoveredCard, setHoveredCard] = useState<Offer | null>(null);

  const handleCardHover = (offer: Offer | null) => {
    setHoveredCard(offer);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <div className="tabs">
          <CityList/>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{places} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <CardList
              // первое это пропс а второе это точно мы туда передаем? т.е. всторое это название параметра который чтото содержит?
                offers={offers}
                onCardHover={handleCardHover}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  points={POINTS}
                  city={CITY}
                  activePoint={hoveredCard}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
