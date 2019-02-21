import React, { Component } from "react";
import { string } from "prop-types";
import "./Subtitle.css";

class Subtitle extends Component {
  static myPropTypes = {
    subtitle: string
  };

  render() {
    const { subtitle } = this.props;
    return <h2 className="header-small">{subtitle}</h2>;
  }
}
export default Subtitle;
