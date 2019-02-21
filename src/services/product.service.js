import data from "../products.json";
import { string, shape, arrayOf, bool } from "prop-types";

class MoviesService {
  static myPropTypes = {
    data: arrayOf(
      shape({
        amount: string,
        category: string,
        featured: bool,
        id: string,
        manufacture: string,
        name: string
      })
    )
  };

  static getProduct(key, val, databd = data) {
    let dataFilter = [];
    let keyName = key;
    if (val === "all") {
      return data;
    }
    if (key === "name") {
      databd.map(data => {
        if (data[keyName].includes(val)) {
          return dataFilter.push(data);
        }
        return null;
      });
      return dataFilter;
    }
    databd.map(data => {
      if (data[keyName] === val) {
        return dataFilter.push(data);
      }
      return null;
    });
    return dataFilter;
  }
}

export default MoviesService;
