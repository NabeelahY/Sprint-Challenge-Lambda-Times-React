import React, { Component } from "react";
import {  Modal, ModalBody } from "reactstrap";
import { FormStyle } from './Style';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = () => {
    localStorage.setItem("user", JSON.stringify(this.state));
  };
  
  render() {
    return (
      <Modal isOpen={this.props.modal}>
        <ModalBody>
          <FormStyle onSubmit={this.login}>
            <input
              name="username"
              onChange={this.inputHandler}
              placeholder="Enter username"
            />
            <input
              name="password"
              onChange={this.inputHandler}
              placeholder="Enter password"
            />
            <button type="submit">LOG IN</button>
          </FormStyle>
        </ModalBody>
      </Modal>
    );
  }
}
