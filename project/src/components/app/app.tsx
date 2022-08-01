import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  places: number;
}

function App({places}: AppScreenProps): JSX.Element {
  return (
    <MainPage places={places} />
  );
}

export default App;
