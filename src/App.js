import React from "react";
import Login from './components/pages/Login';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import {routes} from "./services/routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <NavLink to={routes.HOME}>Accueil</NavLink>
          <NavLink to={routes.LOGIN}>Login</NavLink>
          <NavLink to={routes.SIGNIN}>Sign in</NavLink>
        </div>
        <Switch>
          <Route path={routes.HOME} exact>
            Bienvenue à l'accueil
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
