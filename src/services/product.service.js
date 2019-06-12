class MoviesService {
  static getProduct(key, val, databd) {
    let dataFilter = [];
    let keyName = key;
    if (val === "all") {
      return databd;
    }
    if (key === "name") {
      databd.map(databd => {
        if (databd[keyName].includes(val)) {
          return dataFilter.push(databd);
        }
        return null;
      });
      return dataFilter;
    }
    databd.map(databd => {
      if (databd[keyName] === val) {
        return dataFilter.push(databd);
      }
      return null;
    });
    return dataFilter;
  }
}

export default MoviesService;
