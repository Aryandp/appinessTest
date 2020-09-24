

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import authReducer from 'modules/auth/auth-reducer';
import { layoutReducer } from 'shared/layouts';
import dashboardReducer from 'modules/dashboard/dashboard-reducer'

const rootReducer = combineReducers({
  layoutReducer,
  authReducer,
  dashboardReducer
});

const store = createStore(rootReducer, applyMiddleware(promise, thunk, logger));

export default store;
