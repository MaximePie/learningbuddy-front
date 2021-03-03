import React from "react";
import Login from './components/pages/Login';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signin">Sign in</NavLink>
        </div>
        <Switch>
          <Route path="/" exact>
            Bienvenue à l'accueil
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signin">
            S'inscrire arrive bientôt. Patience !
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
