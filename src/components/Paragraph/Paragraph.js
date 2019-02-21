import React, { Component } from "react";
import { string } from "prop-types";
import "./Paragraph.css";

class Paragraph extends Component {
  static propTypes = {
    paragraph: string
  };

  render() {
    const { paragraph } = this.props;
    return <p>{paragraph}</p>;
  }
}
export default Paragraph;
