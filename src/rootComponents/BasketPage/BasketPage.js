import React from "react";
import Title from "../../components/Title/Title";
import Container from "../../components/Container/Container";
import { ReactComponent as Garbage } from "../../assets/garbage.svg";

const AboutPage = ({ removeProduct, basket }) => {
  return (
    <Container>
      <Title title={"Basket"} />
      <div className="basket">
        <div className="row">
          <div className="basket_images" />

          <p className="basket_name">Name</p>
          <p className="basket_price">Price</p>
          <p className="basket_del" />
        </div>
        {basket.map(item => {
          return (
            <div className="row">
              <div className="basket_images">
                <img src={item.image} alt={item.name} />
              </div>
              <p className="basket_name">{item.name}</p>
              <p className="basket_price">{item.amount} $</p>
              <p className="basket_del">
                <a onClick={() => removeProduct(item)}>
                  <Garbage />
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default AboutPage;
