import React from "react"; 
import NavComponent from "./Example/NavComponent";
import HomeComponent from "./Example/HomeComponent";
import ListUsers from "./User/ListUsers";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavComponent />
          <header className="App-header">
            <Switch>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route path="/user">
            <ListUsers />
          </Route>
        </Switch>
          </header>
        </div>
      </Router>

    )
  }
}

export default App;