import React from 'react';
import ReactDOM from 'react-dom';

import Main from 'Main';
import Nav from 'Nav';
import Examples from 'Examples';

import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import './index.html';

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Examples}>
      <Route path="examples" component={Nav}/>
      <IndexRoute component={Main}/>
    </Route>
  </Router>,
  document.getElementById('root')
)
