import React, { Component } from "react";
import axios from "axios";

export default class Public extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/public", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
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
