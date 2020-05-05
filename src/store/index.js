import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddlewares from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddlewares();

const enhancer =
  process.env.NODE_ENV == 'development' ?
    compose(
      console.tron.createEnhancer(),
      applyMiddleware(sagaMiddleware)
    )
    : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
