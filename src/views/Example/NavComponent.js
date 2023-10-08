import React from "react";
import './nav.scss';
import {
   Link
 } from "react-router-dom";

class NavComponent extends React.Component {

   render() {
      return (
            <div className="topnav">
               <Link to="/">Home</Link>
               <Link to="/user">Users</Link>
               <Link to="/hook">Hooks</Link>
            </div>
      )
   }
}

export default NavComponent;