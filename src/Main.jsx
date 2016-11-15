import React from 'react';
import ReactDOM from 'react-dom';

import Nav from 'Nav';
var Main = (props)=>{
        return(
          <div>
          <Nav/>
          <h2> Main Component</h2>
          {{props.children}}
          </div>
        );
}

module.export = Main;
