import React, { useEffect } from "react";

import Title from "../../components/Title/Title";
import Container from "../../components/Container/Container";
import Paragraph from "../../components/Paragraph/Paragraph";
const ProductPage = ({
  match: {
    params: { id }
  },
  getProductInfo,
  singleProduct
}) => {
  useEffect(() => {
    getProductInfo(id);
  }, []);
  if (singleProduct) {
    return (
      <Container>
        <Title title={singleProduct.name} />
        <div class="row">
          <div class="half">
            <img src={singleProduct.image} alt={singleProduct.name} />
          </div>
          <div class="half">
            <Paragraph paragraph={`Category: ${singleProduct.category}`} />
            <Paragraph
              paragraph={`Manufacture: ${singleProduct.manufacture}`}
            />
            <Paragraph paragraph={`Price: ${singleProduct.amount}`} />
          </div>
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <h2>Loading...</h2>
      </Container>
    );
  }
};
export default ProductPage;
