import React from 'react';
import ReactDOM from 'react-dom';

import Nav from 'Nav';
import Main from 'Main';
import Schedule from 'Schedule';

import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import './index.html';


//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
<Router history={browserHistory}>
  <Route path="/" component={Nav}>
    <IndexRoute component={Main} />
    <Route path="Schedule" component={Schedule}/>
  </Route>
</Router>,
  document.getElementById('root')
)
