import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { Plan } from '../../store/ducks/Plans/types';
import { setPlan } from '../../store/ducks/Plans/actions';

import {
  Container,
  Header,
  Content,
  Bottom,
  Label,
  FormGroup,
  IconContainer,
  PlusIcon,
  Select,
} from './styles';

import { Price } from '../../store/ducks/Prices/types';
import { Prefix } from '../../store/ducks/Prefixes/types';
import PrimaryButton from '../../components/Common/PrimaryButton';

const schema = Yup.object().shape({
  origin: Yup.string().required('Origem é obrigatório.'),
  destiny: Yup.string().required('Destino é obrigatório'),
  time: Yup.string().required('Tempo é obrigatório'),
  plan: Yup.string().required('Plano é obrigatório'),
});

export const TextInput = styled(Input).attrs({
  type: 'number',
  })`
    display: block;
    border-radius: 5px;
    border: 1px solid;
    border-color: #CCC;
    background:#FFF;
    width: 95%;
    padding: 10px;
    font-family: 'Source Sans Pro, Regular', sans-serif;
  `;
interface OwnProps {
  prices: Price[]
  prefixes: Prefix[]
}

export default function NewSimulated({ prefixes }: OwnProps): JSX.Element {
  const dispatch = useDispatch();

  const options = prefixes.map(p => (
    { id: `${p.prefix}`, title: `${p.prefix}` }
  ));

  function handleSubmit(data: any, { resetForm }:any) {
    const payload: Plan = {
      dddOrigin: data.origin * 1,
      dddDestiny: data.destiny * 1,
      plan: data.plan * 1,
      time: data.time * 1,
    };

    dispatch(setPlan(payload));
    resetForm();
  }

  return (
    <Container>
      <Header>
        <IconContainer>
          <PlusIcon />
        </IconContainer>
        Nova simulação
      </Header>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Content>
          <FormGroup>
            <Label htmlFor="origin">Origem</Label>
            <Select
              id="origin"
              name="origin"
              placeholder="Origem"
              options={options}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="destiny">Destino</Label>
            <Select
              id="destiny"
              name="destiny"
              placeholder="Destino"
              options={options}
            />
          </FormGroup>

          <FormGroup>
            <TextInput label="Tempo" id="time" name="time" placeholder="tempo" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="plan">Plano</Label>
            <Select
              id="plan"
              name="plan"
              placeholder="Plano"
              options={[
                { id: '30', title: 'Fale Mais 30' },
                { id: '60', title: 'Fale Mais 60' },
                { id: '120', title: 'Fale Mais 120' },
              ]}
            />
          </FormGroup>

        </Content>
        <Bottom>
          <PrimaryButton type="submit">Salvar</PrimaryButton>
        </Bottom>
      </Form>
    </Container>
  );
}
