import Instructions from "./Instructions";
import Header from "./Header";
import DayToChoose from "./DayToChoose";
import Metricsv2 from "./Metricsv2";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tutorial from "./Tutorial";
import DisplayTutorial from "./DisplayTutorial";

function App() {
  const [name, setName] = useState(null);

  return (
    <div className="App">
      <Router>
        <Header name={name} />
        <Switch>
          <Route exact path="/">
            <DayToChoose />
          </Route>
          <Route path="/metrics">
            <Metricsv2 />
          </Route>
          <Route path="/instructions">
            <Instructions />
          </Route>
          <Route path="/tutorial">
            <Tutorial />
          </Route>
          <Route path="/displaytutorial">
            <DisplayTutorial />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
