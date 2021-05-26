import Agreement from "./Agreement";
import Header from "./Header";
import DayToChoose from "./DayToChoose";
import Metrics from "./Metrics";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InstructionsTutorial from "./strategy/tutorial/InstructionsTutorial";
import DisplayTutorial from "./strategy/tutorial/DisplayTutorial";
import ProactiveInstruction from "./strategy/proactive/InstructionsProactive";
import DisplayProactive from "./strategy/proactive/DisplayProactive";
import MiddleProactive from "./strategy/proactive/MiddleProactive";
import DisplayReactive from "./strategy/reactive/DisplayReactive";
import MiddleReactive from "./strategy/reactive/MiddleReactive";

import EndDay1 from "./EndDay1";
import EndDay2 from "./EndDay2";

import IntroSecondDay from "./IntroDay2";
import ReactiveInstruction from "./strategy/reactive/InstructionsReactive";

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
          <Route path="/displayproactive">
            <DisplayProactive />
          </Route>
          <Route path="/middlep">
            <MiddleProactive />
          </Route>
          <Route path="/endp">
            <EndDay2 />
          </Route>
          <Route path="/introsd">
            <IntroSecondDay />
          </Route>
          <Route path="/instructionsreactive">
            <ReactiveInstruction />
          </Route>
          <Route path="/displayreactive">
            <DisplayReactive />
          </Route>
          <Route path="/middler">
            <MiddleReactive />
          </Route>
          <Route path="/endr">
            <EndDay1 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
