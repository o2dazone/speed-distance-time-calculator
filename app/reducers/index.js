import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';
import time from './time';

const rootReducer = combineReducers({
  time,
  router
});

export default rootReducer;
