import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./composants/interface/Header";
import Liste from "./composants/contact/Liste";
import { Provider } from "./context";
import AddContact from "./composants/contact/addContact";
import Apropos from "./composants/pages/Apropos";
import Erreur from "./composants/pages/Erreur";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Liste} />
                <Route exact path="/liste" component={Liste} />
                <Route exact path="/ajouter" component={AddContact} />
                <Route exact path="/apropos" component={Apropos} />
                <Route component={Erreur} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
