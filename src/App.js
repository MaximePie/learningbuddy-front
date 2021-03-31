import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routes} from "./services/routes";
import Navbar from "./components/molecules/Navbar";
import BackgroundIllustration from "./components/atoms/BackgroundIllustration";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <BackgroundIllustration/>
        <Navbar/>
        <Switch>
          <Route path={routes.HOME} exact>
            <h1>Bienvenue</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
