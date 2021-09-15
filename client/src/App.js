import Agreement from "./pages/Agreement";
import Main from "./pages/Main";
import Metrics from "./pages/Metrics";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tutorial from "./pages/Tutorial";
import Login from "./pages/Login";
import My404 from "./pages/My404";

import { NickNameProvider } from "./nicknameContext";
import WrongDevice from "./pages/WrongDevice";
import Contact from "./pages/Contact";
import Experiment from "./pages/Experiment";

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
              <Route path="/experiment">
                <Experiment />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </NickNameProvider>
          )}

          <Route path="*">
            <My404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
