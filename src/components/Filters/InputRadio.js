import React, { Component } from "react";
import { string } from "prop-types";
import "./InputRadio.css";

class InputRadio extends Component {
  static propTypes = {
    title: string
  };

  render() {
    const { id, value, isChecked, label, updateProducts } = this.props;
    return (
      <div>
        <input
          type="radio"
          name="manufacture"
          id={id}
          value={value}
          checked={isChecked === value ? true : false}
          onChange={updateProducts("manufacture", value)}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
}
export default InputRadio;
