import React, { Component } from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Content from "./components/Content/Content";
import withAuthenticate from "./components/Authenticate";
import Login from "./components/Login";

const WrappedComponent = withAuthenticate(Content)(Login);
class App extends Component {
  constructor() {
    super();

    this.state = {
      modal: true
    };
  }

  logUser = () => {
    this.setState({
        modal: true
    })
    localStorage.clear()
}

  render() {
    return (
      <div className="App">
        <TopBar logUser = {this.logUser} />
        <Header />
        <WrappedComponent modal={this.state.modal} />
      </div>
    );
  }
}

export default App;
