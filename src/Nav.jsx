import React from 'react';
import ReactDOM from 'react-dom';

import {Link, IndexLink} from 'react-router';

var Example = React.createClass({
    render(){
      return(
        <div>
        <header>
                <div className="top-bar">
                  <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text"> ACC Club</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>ACC Club</IndexLink>
                        </li>
                        <li>
                            <Link to="/Main" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Main</Link>
                        </li>
                        <li>
                            <Link to="/Nav" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/Schedule" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Schedule</Link>
                        </li>
                      </ul>
                </div>
                <div className="top-bar-right">
                  <ul className="menu">
                    <li><input type="search" placeholder="Search weather"/></li>
                    <li><button type="submit" className="button" value="Get Weather">Search</button></li>
                  </ul>
                </div>
        </div>
      </header>
      <main>
          {this.props.children}
      </main>
  </div>
      )
    }

});

module.exports = Example;
