import React from 'react';
import { Select } from 'semantic-ui-react';

import { Price } from '../../store/ducks/Prices/types';
import { Prefix } from '../../store/ducks/Prefixes/types';

interface OwnProps {
  prices: Price[]
  prefixes: Prefix[]
}

export default function NewSimulated({ prefixes }: OwnProps) {
  const optios = prefixes.map(p => (
    { key: Math.random(), value: p.prefix, text: p.prefix }
  ));

  return (
    <>
      <Select options={optios} />
    </>
  );
}
