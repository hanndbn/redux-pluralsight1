import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import homePage from './homePageReducer';
import authors from './authorsReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  homePage,
  authors,
  routing: routerReducer
});

export default rootReducer;
