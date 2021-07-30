import Agreement from "./pages/Agreement";
import React, { useState } from "react";
import Main from "./pages/Main";
import Metrics from "./pages/Metrics";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tutorial from "./pages/Tutorial";
import Reactive from "./pages/Reactive";
import Proactive from "./pages/Proactive";
import My404 from "./pages/My404";

import { UserContext } from "./context";

// Temp import for testing, remove!!!!!!

function App() {
  const [user, setUser] = useState(null);

  const userEvent = (action, load) => {
    switch (action) {
      case "ADD_USER":
        setUser(load);
        return;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ user, userEvent }}>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/metrics">
              <Metrics />
            </Route>
            <Route path="/agreement">
              <Agreement />
            </Route>
            <Route path="/tutorial">
              <Tutorial />
            </Route>
            <Route path="/reactive">
              <Reactive />
            </Route>
            <Route path="/proactive">
              <Proactive />
            </Route>
            <Route path="/testing">
              <Proactive />
            </Route>
            <Route path="*">
              <My404 />
            </Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
