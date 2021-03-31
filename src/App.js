// core components
import React from "react";
import Admin from "layouts/Admin.js";
import "assets/css/Communify.css";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  const hist = createBrowserHistory();
  return (
    <div>
      <Router history={hist}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
