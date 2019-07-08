import React from 'react';
import { useSelector } from 'react-redux';

import CadPrice from '../../components/CadPrice';
import { ApplicationState } from '../../store';

export default function Price() {
  const prices = useSelector((state:ApplicationState) => state.prices.data);
  return (
    <CadPrice prices={prices} />
  );
}
