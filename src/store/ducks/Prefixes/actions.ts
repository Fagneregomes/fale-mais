import { action } from 'typesafe-actions';

import { PrefixesTypes, Prefix } from './types';

export const loadRequest = () => action(PrefixesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Prefix[]) => action(PrefixesTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(PrefixesTypes.LOAD_FAILURE);
