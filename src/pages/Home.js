import { Fragment } from 'react';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Players from '../components/Players/Players';

function Home() {
  return (
    <Fragment>
      <Header title="Jogadores" />
      <Container>
        <Players />
      </Container>
    </Fragment>
  );
}
export default Home;
