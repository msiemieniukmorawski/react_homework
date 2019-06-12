import React from "react";
import InputRadio from "./InputRadio";

const Filters = ({
  searchProducts,
  updateProducts,
  reset,
  checked,
  inputTextValue
}) => {
  const search = e => {
    searchProducts("name", e.target.value);
  };
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
          onChange={e => search(e)}
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
};
export default Filters;
