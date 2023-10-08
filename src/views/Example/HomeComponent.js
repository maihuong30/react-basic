import React from "react";
import "../App.scss"
import logo from '../logo.svg';


class HomeComponent extends React.Component {
   render() {
      return (
         <div>
            <img src={logo} className="App-logo" alt="logo" /> <br/>
           Hello Mario
         </div>
      )
   }
}

export default HomeComponent;