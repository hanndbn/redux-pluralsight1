import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './containers/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import CourseManager from './containers/course/CourseManager';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="fuel-savings" component={FuelSavingsPage}/>
    <Route path="course" component={CourseManager}/>
    <Route path="course/:id" component={CourseManager}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
