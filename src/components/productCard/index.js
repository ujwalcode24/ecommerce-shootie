import React from "react";
import { useHistory } from "react-router-dom";

import "./index.scss";

const ProductCard = (props) => {
  const {
    id,
    img,
    title = "-",
    subtitle = "-",
    Price = "-",
    originalPrice = "-",
  } = props;

  let history = useHistory();
  const handleClick = () => {
    history.push(`/product-detail/${id}`);
  };

  return (
    <div className="cardContainer" onClick={handleClick}>
      <img src={img} alt="" />
      <div className="cardInfo">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
        <div className="priceSection">
          <span>Rs. {Price}</span>
          <span className="originalPrice">Rs. {originalPrice} </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
