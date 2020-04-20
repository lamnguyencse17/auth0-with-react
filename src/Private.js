import React, { Component } from "react";
import axios from "axios";

export default class Private extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/private", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${this.props.auth.getAccessToken()}`,
        },
      })
      .then((response) => {
        this.setState({ message: response.data.message });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return <p>{this.state.message}</p>;
  }
}
