import { Fragment } from 'react';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Edit from '../components/Edit/Edit';

function Page() {
  return (
    <Fragment>
      <Header title="Edição de Jogador" />
      <Container>
        <Edit />
      </Container>
    </Fragment>
  );
}

export default Page;
