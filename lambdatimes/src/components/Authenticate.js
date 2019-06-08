import React, { Component } from "react";

const withAuthenticate = Content => Login => {
  return class extends Component {
    // constructor() {
    //   super();
    //   this.state = {
    //     loggedIn: false
    //   };
    // }
    // // componentDidMount() {
    // //   return localStorage.getItem("user") === null
    // //     ? this.setState({ loggedIn: false })
    // //     : this.setState({ loggedIn: true });
    // // }

    render() {
      return localStorage.getItem("user") === null ? (
        <Login  {...this.props} />
      ) : (
        <Content />
      );
    }
  };
};

export default withAuthenticate;