import React from 'react';
import { useSelector } from 'react-redux';

import CadPrefixes from '../../components/CadPrefixes';

import { ApplicationState } from '../../store';

export default function CadPrefix() {
  const prefixes = useSelector((state:ApplicationState) => state.prefixes.data);
  return (
    <CadPrefixes prefixes={prefixes} />
  );
}
