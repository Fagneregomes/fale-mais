import { action } from 'typesafe-actions';

import { PlansTypes, Plan } from './types';

export const loadRequest = () => action(PlansTypes.LOAD_REQUEST);

export const loadSuccess = (data: Plan[]) => action(PlansTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(PlansTypes.LOAD_FAILURE);
