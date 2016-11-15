import React from 'react';
import ReactDOM from 'react-dom';

import {Link, IndexLink} from 'react-router';

var Example = React.createClass({
    render(){
      return(
                <div className="top-bar">
                  <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text"> ACC Club</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>ACC Club</IndexLink>
                        </li>
                        <li>
                            <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/Nav" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                      </ul>
                </div>
                <div className="top-bar-right">
                  <ul className="menu">
                    <li><input type="search" placeholder="Search"/></li>
                    <li><button type="button" className="button">Search</button></li>
                  </ul>
                </div>
        </div>
      )
    }

});

module.exports = Example;
