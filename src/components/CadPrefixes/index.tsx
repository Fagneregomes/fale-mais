import React from 'react';

import { Table } from 'semantic-ui-react';

import {
  Container,
  Header,
  IconContainer,
  PlusIcon,
} from './styles';

import { Prefix } from '../../store/ducks/Prefixes/types';

interface OwnProps {
  prefixes: Prefix[]
}

export default function CadPrefixes({ prefixes }: OwnProps): JSX.Element {
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
            ['Prefixos']
            .map(text => <Table.HeaderCell key={Math.random()}>{text}</Table.HeaderCell>)
          }
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
          prefixes.map(item => (
            <Table.Row key={Math.random()}>
              <Table.Cell>{item.prefix}</Table.Cell>
            </Table.Row>
          ))
        }
        </Table.Body>
      </Table>
    </Container>
  );
}
