import React from "react";
import Login from './components/pages/Login';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routes} from "./services/routes";
import Navbar from "./components/molecules/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path={routes.HOME} exact>
            <h1>Bienvenue</h1>
          </Route>
          <Route path={routes.LOGIN}>
            <Login/>
          </Route>
          <Route path={routes.SIGNIN}>
            S'inscrire arrive bientôt. Patience !
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
