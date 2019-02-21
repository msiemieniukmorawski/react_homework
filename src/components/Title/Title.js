import React, { Component } from "react";
import { string } from "prop-types";
import "./Title.css";

class Title extends Component {
  static propTypes = {
    title: string
  };

  render() {
    const { title } = this.props;
    return <h1 className="header-big">{title}</h1>;
  }
}
export default Title;
