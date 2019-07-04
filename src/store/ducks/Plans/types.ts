/**
 * Action types
 */
 export enum PlansTypes {
   LOAD_REQUEST = '@plans/LOAD_REQUEST',
   LOAD_SUCCESS = '@plans/LOAD_SUCCESS',
   LOAD_FAILURE = '@plans/LOAD_FAILURE',

   SET_PLAN = '@plans/SET_PLAN'
 }

/**
 * Data types
 */
export interface Plan {
  dddOrigin: number
  dddDestiny: number
  time: number
  plan: number
}

export interface PlansState {
  readonly data: Plan[]
  readonly loading: boolean
  readonly error: boolean
}
