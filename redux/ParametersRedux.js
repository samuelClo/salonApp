import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
//this is the step 1 (entry point)
//call this entry point from any screen
//then go to step 2 : check the XXX_XXX type to call reducer step 3
//ACTION -> TYPE
const { Types, Creators } = createActions({
  updateBrands: ['brands'],
  updateEvents: ['events'],
  askForBrands:['from'],
  askForEvents:['from'],

})

export const ParametersRedux = Types
export default Creators

/* ------------- Initial State ------------- */
//Very first step 0, we have to initiate the state
export const INITIAL_STATE = Immutable({
  brands: [],
  events: null
})

/* ------------- Reducers ------------- */
//this is the step 3 - last step
//the reducer has to modify the overall state


export const askForBrands = (
  state,
  {from}
) => {
  return {
    ...state,
  }
}
export const askForEvents = (
  state,
  {from}
) => {
  return {
    ...state,
  }
}

export const updateBrands = (
    state,
    { brands }
) => {
  return {
    ...state,
    brands
  }
}
export const updateEvents = (
    state,
    { events }
) => {
  return {
    ...state,
    events
  }
}

/* ------------- Hookup Reducers To Types ------------- */
//this is the step 2
//in order to call a reducer "updateMMR" from XXX_XXX as type
export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_BRANDS]: updateBrands,
  [Types.UPDATE_EVENTS]: updateEvents,
  [Types.ASK_FOR_BRANDS]: askForBrands,
  [Types.ASK_FOR_EVENTS]: askForEvents
})
