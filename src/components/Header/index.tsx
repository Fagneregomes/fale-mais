import React from 'react';
import { Link } from 'react-router-dom';

import {
 Container,
 Logo,
 ItemContainer,
 Items,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Logo>FaleMais</Logo>
      <ItemContainer>
        <Link to="/">
          <Items>Planos</Items>
        </Link>

        <Link to="/price">
          <Items>Preços</Items>
        </Link>

        <Link to="/prefix">
          <Items>Prefixos</Items>
        </Link>
      </ItemContainer>
    </Container>
  );
}
