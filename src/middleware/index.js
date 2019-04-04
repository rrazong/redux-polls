import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from './logger';
import {loadingBarMiddleware} from 'react-redux-loading';

export default applyMiddleware(
  loadingBarMiddleware(),
  thunk,
  logger
);
