/**
 * Action types
 */
 export enum PricesTypes {
   LOAD_REQUEST = '@prices/LOAD_REQUEST',
   LOAD_SUCCESS = '@prices/LOAD_SUCCESS',
   LOAD_FAILURE = '@prices/LOAD_FAILURE',
 }

/**
 * Data types
 */
export interface Price {
  origin: number
  destiny: number
  value: number
}

export interface PriceState {
  readonly data: Price[]
  readonly loading: boolean
  readonly error: boolean
}
