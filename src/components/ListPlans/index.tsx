import React from 'react';

import { Table } from 'semantic-ui-react';

import { Plan } from '../../store/ducks/Plans/types';
import { Price } from '../../store/ducks/Prices/types';

interface OwnProps {
  plans: Plan[]
  prices: Price[]
}

export default function ListPlans(props:OwnProps) {
  const { plans } = props;

  function tablePrices(obj: Plan) {
    const { prices } = props;

    // Procura DDD origem e destino retornando o preço
    const price = prices.find(item => (
      item.origin === obj.dddOrigin
      && item.destiny === obj.dddDestiny
      ));

    if (price) { return price.value; }
    return 0;
  }

  function handleCalcComFaleMais(obj: Plan) {
    // verifica se existe preço cadastrado
    const price = tablePrices(obj);
    if (price === 0) return '-';

    // Se usuário não usou todo tempo
    if (obj.time < obj.plan) { return 'R$ 0,00'; }

    const value = ((obj.time - obj.plan) * price);

    // Adiciona 10% do valor total
    const total = value + (value * 10 / 100);

    return `R$ ${parseFloat(`${total}`).toFixed(2).replace('.', ',')}`;
  }

  function handleCalcSemFaleMais(obj: Plan) {
    // verifica se existe preço cadastrado
    const price = tablePrices(obj);
    if (price === 0) return '-';

    // Se usuário não usou todo tempo
    if (obj.time < obj.plan) { return 'R$ 0,00'; }

    return `R$ ${parseFloat(`${obj.time * price}`).toFixed(2).replace('.', ',')}`;
  }

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {
            ['Origem', 'Destino', 'Tempo', 'Plano FaleMais', 'Com FaleMais', 'Sem FaleMais']
            .map(text => <Table.HeaderCell key={Math.random()}>{text}</Table.HeaderCell>)
          }
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {
          plans.map(item => (
            <Table.Row key={Math.random()}>
              <Table.Cell>{item.dddOrigin}</Table.Cell>
              <Table.Cell>{item.dddDestiny}</Table.Cell>
              <Table.Cell>{item.time}</Table.Cell>
              <Table.Cell>{`FaleMais ${item.plan}` }</Table.Cell>
              <Table.Cell>{handleCalcComFaleMais(item)}</Table.Cell>
              <Table.Cell>{handleCalcSemFaleMais(item)}</Table.Cell>
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  );
}
