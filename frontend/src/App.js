import React from "react"
import {HashRouter, Link, Route, Switch} from "react-router-dom"
import NotFound from "./components/NotFound";
import Reports from "./components/Reports";

function App() {
  return (
    <>
    <HashRouter>
    <div className="App">
      <Switch>
        <Route exact path='/'>
        <Reports />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
    </HashRouter>
    </>
  );
}

export default App;