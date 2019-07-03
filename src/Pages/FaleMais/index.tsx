import React from 'react';
import { useSelector } from 'react-redux';

import { ApplicationState } from '../../store';

import { Header, Container, Main } from './styles';
import ListPlans from '../../components/ListPlans';

export default function FaleMais() {
  const plans = useSelector((state:ApplicationState) => state.plans.data);
  const prices = useSelector((state:ApplicationState) => state.prices.data);

  return (
    <Container>
      <Header> Planos Fale Mais</Header>
      <Main>
        <ListPlans plans={plans} prices={prices} />
      </Main>
    </Container>
  );
}
