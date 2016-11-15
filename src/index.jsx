import React from 'react';
import ReactDOM from 'react-dom';

import Nav from 'Nav';
import Main from 'Main';

import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router';

import './index.html';


//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
<Router history={browserHistory}>
  <Route path="/" component={Nav}>
    <IndexRoute component={Main} />
  </Route>
</Router>,
  document.getElementById('root')
)
