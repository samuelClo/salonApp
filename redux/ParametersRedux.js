import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
//this is the step 1 (entry point)
//call this entry point from any screen
//then go to step 2 : check the XXX_XXX type to call reducer step 3
//ACTION -> TYPE
const { Types, Creators } = createActions({
  updateIsFirstTime: ['isFirstTime'],
  updateMonTitre:['monTitre'],
  askForFoods:['categorie']
})

export const ParametersRedux = Types
export default Creators

/* ------------- Initial State ------------- */
//Very first step 0, we have to initiate the state
export const INITIAL_STATE = Immutable({
  isFirstTime: true,
  monTitre: 'my first title'
})

/* ------------- Reducers ------------- */
//this is the step 3 - last step
//the reducer has to modify the overall state

export const updateIsFirstTime = (
  state,
  { isFirstTime }
) => {
  return {
    ...state,
    isFirstTime
  }
}

export const updateMonTitre = (
  state,
  { monTitre }
) => {
  return {
    ...state,
    monTitre
  }
}

export const askForFoods = (
  state,
  {categorie}
) => {
  return {
    ...state
  }
}

/* ------------- Hookup Reducers To Types ------------- */
//this is the step 2
//in order to call a reducer "updateMMR" from XXX_XXX as type
export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_IS_FIRST_TIME]: updateIsFirstTime,
  [Types.UPDATE_MON_TITRE]: updateMonTitre,
  [Types.ASK_FOR_FOODS]: askForFoods
})
