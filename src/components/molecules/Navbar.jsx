import React from 'react';
import {NavLink} from "react-router-dom";
import {routes} from "../../services/routes";

export default function Navbar() {
  return (
    <div className="Navbar">
      <NavLink
        className="Navbar__link"
        activeClassName="Navbar__link--active"
        to={routes.HOME}
        exact
      >
        Accueil
      </NavLink>
      <NavLink
        className="Navbar__link"
        activeClassName="Navbar__link--active"
        to={routes.LOGIN}
      >
        Login
      </NavLink>
      <NavLink
        className="Navbar__link"
        activeClassName="Navbar__link--active"
        to={routes.SIGNIN}
      >
        S'inscrire
      </NavLink>
    </div>
  );
}
