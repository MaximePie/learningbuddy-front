import React from "react";
import "@fortawesome/fontawesome-free/js/all.min";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routes} from "./services/routes";
import Navbar from "./components/molecules/Navbar";
import BackgroundIllustration from "./components/atoms/BackgroundIllustration";
import ReactModule from "./components/pages/ReactModule";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <BackgroundIllustration/>
        <Navbar/>
        <Switch>
          <Route path={routes.HOME} exact>
            <ReactModule/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
