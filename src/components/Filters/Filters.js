import React, { Component } from "react";
import { string } from "prop-types";
import "./Filters.css";
import InputRadio from "./InputRadio";

class Filters extends Component {
  static propTypes = {
    title: string
  };

  search(e) {
    console.log(e.target.value);
    this.props.searchProducts("name", e.target.value);
  }
  render() {
    const { updateProducts, reset, checked, inputTextValue } = this.props;
    return (
      <div className="filter">
        <div className="filter-header">
          <h4>Search</h4>
          <a href="#" className="clear" onClick={reset()}>
            Clear
          </a>
        </div>
        <div>
          <input
            type="text"
            placeholder="search..."
            onChange={e => this.search(e)}
            value={inputTextValue}
          />
        </div>
        <h4>Manufacturer</h4>
        <div>
          <InputRadio
            updateProducts={updateProducts}
            id="all"
            value="all"
            isChecked={checked}
            label="all"
          />
          <InputRadio
            updateProducts={updateProducts}
            id="apple"
            value="Apple"
            isChecked={checked}
            label="Apple"
          />

          <InputRadio
            updateProducts={updateProducts}
            id="dell"
            value="Dell"
            isChecked={checked}
            label="dell"
          />
        </div>
      </div>
    );
  }
}
export default Filters;
