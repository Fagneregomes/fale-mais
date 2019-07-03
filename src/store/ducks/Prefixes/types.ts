/**
 * Action types
 */
 export enum PrefixesTypes {
   LOAD_REQUEST = '@prefixes/LOAD_REQUEST',
   LOAD_SUCCESS = '@prefixes/LOAD_SUCCESS',
   LOAD_FAILURE = '@prefixes/LOAD_FAILURE',
 }

/**
 * Data types
 */
export interface Prefix {
  prefix: number
}

export interface PrefixesState {
  readonly data: Prefix[]
  readonly loading: boolean
  readonly error: boolean
}
