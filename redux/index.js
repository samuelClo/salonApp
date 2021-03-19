import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../sagas/'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  ParametersStore: require('./ParametersRedux').reducer,
})

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(
    reducers,
    rootSaga
  )

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYeildedSagas = require('../sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagaManager = sagaMiddleware.run(newYeildedSagas)
      })
    })
  }

  return { store }
}
