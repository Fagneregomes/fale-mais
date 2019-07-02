/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Table } from 'semantic-ui-react';

import { ApplicationState } from '../../store';
import { Plan } from '../../store/ducks/Plans/types';
import { Price } from '../../store/ducks/Prices/types';
import * as PlansActions from '../../store/ducks/Plans/actions';

import {
  Header, Container, Main,
} from './styles';

interface StateProps {
  plans: Plan[]
  prices: Price[]
}

interface DispatchProps {
  loadRequest():void
}

type Props = StateProps & DispatchProps

class FaleMais extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  tablePrices(obj: Plan) {
    const { prices } = this.props;

  const price = prices.find(item => (
    item.origin === obj.dddOrigin
    && item.destiny === obj.dddDestiny
    ));

  if (price) { return price.value; }
  return 0;
}

  handleCalcComFaleMais(obj: Plan) {
    if (obj.time < obj.plan) { return 'R$ 0,00'; }

    const price = this.tablePrices(obj);
    if (price === 0) return '-';

    const value = ((obj.time - obj.plan) * price);

    // Adiciona 10% do valor total
    const total = value + (value * 10 / 100);

    return `R$ ${parseFloat(`${total}`).toFixed(2).replace('.', ',')}`;
  }

  handleCalcSemFaleMais(obj: Plan) {
    if (obj.time < obj.plan) { return 'R$ 0,00'; }

    const price = this.tablePrices(obj);
    if (price === 0) return '-';

    return `R$ ${parseFloat(`${obj.time * price}`).toFixed(2).replace('.', ',')}`;
  }

  render() {
    const { plans } = this.props;
    return (
      <Container>
        <Header> Planos Fale Mais</Header>
        <Main>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Origem</Table.HeaderCell>
                <Table.HeaderCell>Destino</Table.HeaderCell>
                <Table.HeaderCell>Tempo</Table.HeaderCell>
                <Table.HeaderCell>Plano FaleMais</Table.HeaderCell>
                <Table.HeaderCell>Com FaleMais</Table.HeaderCell>
                <Table.HeaderCell>Sem FaleMais</Table.HeaderCell>
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
                      <Table.Cell>{this.handleCalcComFaleMais(item)}</Table.Cell>
                      <Table.Cell>{this.handleCalcSemFaleMais(item)}</Table.Cell>
                    </Table.Row>
                  ))
                }
            </Table.Body>
          </Table>
        </Main>
      </Container>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  plans: state.plans.data,
  prices: state.prices.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(PlansActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FaleMais);
