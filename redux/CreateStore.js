import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

// creates the store
export default (rootReducer, rootSaga) => {
  const middleware = []
  const enhancers = []

  // saga middleware
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  enhancers.push(composeWithDevTools({})(applyMiddleware(...middleware)))
  let store = createStore(rootReducer, compose(...enhancers))

  const sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
