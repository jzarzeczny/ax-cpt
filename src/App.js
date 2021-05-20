import Agreement from "./Agreement";
import Header from "./Header";
import DayToChoose from "./DayToChoose";
import Metrics from "./Metrics";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InstructionsTutorial from "./strategy/tutorial/InstructionsTutorial";
import DisplayTutorial from "./strategy/tutorial/DisplayTutorial";
import ProactiveInstruction from "./strategy/proactive/InstructionsProactive";
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
            <Metrics />
          </Route>
          <Route path="/agreement">
            <Agreement />
          </Route>
          <Route path="/tutorial">
            <InstructionsTutorial />
          </Route>
          <Route path="/displaytutorial">
            <DisplayTutorial />
          </Route>
          <Route path="/instructionsproactive">
            <ProactiveInstruction />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
