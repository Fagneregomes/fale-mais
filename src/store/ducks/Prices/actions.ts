import { action } from 'typesafe-actions';

import { PricesTypes, Price } from './types';

export const loadRequest = () => action(PricesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Price[]) => action(PricesTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(PricesTypes.LOAD_FAILURE);
