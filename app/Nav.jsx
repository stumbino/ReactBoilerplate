import React from 'react';
import ReactDOM from 'react-dom';

import {Link, IndexLink} from 'react-router';

var Example = React.createClass({
    render(){
      return(
            <div className="top-bar">
              <div className="top-bar-title">
                <span data-responsive-toggle="responsive-menu" data-hide-for="medium">
                  <button className="menu-icon dark" type="button" data-toggle></button>
                </span>
                <strong>Site Title</strong>
              </div>
              <div id="responsive-menu">
                <div className="top-bar-left">
                  <ul className="dropdown menu" data-dropdown-menu>
                    <li>
                      <a href="#">One</a>
                      <ul className="menu vertical">
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
                    </li>
                    <li>
                        <Link to="/Main" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
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
        </div>
      )
    }

});

module.exports = Example;
