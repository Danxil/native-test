import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { fork } from 'redux-saga/effects';
import restApiInjector from './middlewares/restApiInjector';

import user from './user';

export default () => {
  const rootReducer = combineReducers({
    user,
  });

  const rootSaga = function* () {
  };

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    restApiInjector,
    apiMiddleware,
    sagaMiddleware,
  ];

  if (process.env.NODE_ENV === 'development') middlewares.push(logger);

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
