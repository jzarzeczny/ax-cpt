import Agreement from "./pages/Agreement";
import React from "react";
import Main from "./pages/Main";
import Metrics from "./pages/Metrics";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tutorial from "./pages/Tutorial";
import Reactive from "./pages/Reactive";
import Proactive from "./pages/Proactive";
import Login from "./pages/Login";
import My404 from "./pages/My404";

import { NickNameProvider } from "./nicknameContext";
import Admin from "./pages/Admin";
import WrongDevice from "./pages/WrongDevice";

function App() {
  const width = window.innerWidth;
  const brakePoint = 1120;
  return (
    <div className="App">
      <Router>
        <Switch>
          {width < brakePoint ? (
            <Route path="/">
              <WrongDevice />
            </Route>
          ) : (
            <NickNameProvider>
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
                <Login />
              </Route>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              {/* <Route path="*">
              <My404 />
            </Route> */}
            </NickNameProvider>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
