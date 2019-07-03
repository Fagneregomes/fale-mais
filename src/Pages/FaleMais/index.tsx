import React from 'react';
import { useSelector } from 'react-redux';

import { ApplicationState } from '../../store';

import { Header, Container, Main } from './styles';

import ListPlans from '../../components/ListPlans';
import NewSimulated from '../NewSimulated';

export default function FaleMais() {
  const plans = useSelector((state:ApplicationState) => state.plans.data);
  const prices = useSelector((state:ApplicationState) => state.prices.data);
  const prefixes = useSelector((state:ApplicationState) => state.prefixes.data);

  return (
    <Container>
      <Header> Planos Fale Mais</Header>
      <Main>
        <NewSimulated prices={prices} prefixes={prefixes} />
        <ListPlans plans={plans} prices={prices} />
      </Main>
    </Container>
  );
}
