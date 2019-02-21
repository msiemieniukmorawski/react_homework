import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import HomePage from "./rootComponents/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import AboutPage from "./rootComponents/AboutPage/AboutPage";
import CatalogPage from "./rootComponents/CatalogPage/CatalogPage";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <Menu />

            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/catalog" component={CatalogPage} />
              <Route path="/about" component={AboutPage} />

              <Route render={() => <h1>Page not found :(</h1>} />
            </Switch>

            <Footer />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
