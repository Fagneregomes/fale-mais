import React from 'react';
import { Table } from 'semantic-ui-react';

import {
  Container,
  Header,
  IconContainer,
  PlusIcon,
} from './styles';

import { Price } from '../../store/ducks/Prices/types';

interface OwnProps {
  prices: Price[]
}

export default function CadPrice({ prices }: OwnProps): JSX.Element {
  return (
    <Container>
      <Header>
        <IconContainer>
          <PlusIcon />
        </IconContainer>
        Preços
      </Header>

      <Table celled>
        <Table.Header>
          <Table.Row>
            {
            ['Origem', 'Destino', 'Preço']
            .map(text => <Table.HeaderCell key={Math.random()}>{text}</Table.HeaderCell>)
          }
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
          prices.map(item => (
            <Table.Row key={Math.random()}>
              <Table.Cell>{item.origin}</Table.Cell>
              <Table.Cell>{item.destiny}</Table.Cell>
              <Table.Cell>{item.value}</Table.Cell>
            </Table.Row>
          ))
        }
        </Table.Body>
      </Table>
    </Container>
  );
}
