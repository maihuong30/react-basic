import React from "react";
import NavComponent from "./Example/NavComponent";
import HomeComponent from "./Example/HomeComponent";
import ListUsers from "./User/ListUsers";
import HookComponent from "./Example/HookComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route
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
              <Route path="/hook">
                <HookComponent />
              </Route>
            </Switch>
          </header>
        </div>
      </Router>

    )
  }
}

export default App;