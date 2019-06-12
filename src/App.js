import React, { Component } from "react";
import { Provider } from "react-redux";
import ContentContainer from "./containers/ContentContainer/ContentContainer";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContentContainer />
      </Provider>
    );
  }
}

export default App;
