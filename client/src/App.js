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
import WrongDevice from "./pages/WrongDevice";
import Contact from "./pages/Contact";
import TestValidation from "./components/TestValidation";

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
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/test">
                <TestValidation
                  data={
                    [
                      // {
                      //   id: 1,
                      //   clue: "A",
                      //   probe: "X",
                      //   warriety: "AX",
                      //   clueResponse: "z",
                      //   probeResponse: "m",
                      //   reactionTime: "127ms",
                      //   affectId: null,
                      // },
                      // {
                      //   id: 2,
                      //   clue: "A",
                      //   clueResponse: "z",
                      //   probeResponse: "z",
                      //   probe: "B",
                      //   warriety: "AY",
                      //   reactionTime: "444ms",
                      //   affectId: null,
                      // },
                    ]
                  }
                  setFailedTest={() => {}}
                />
              </Route>
            </NickNameProvider>
          )}

          {/* Test puropses */}

          <Route path="*">
            <My404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
