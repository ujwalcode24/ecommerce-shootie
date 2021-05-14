import React, { useState } from "react";
import { Products } from "../../constants";
import ProductCard from "../../components/productCard";
import { Grid } from "@material-ui/core";

import "./index.scss";

const Product = () => {
  const [productData, setProductData] = useState(Products);

  return (
    <div className="productGrid">
      <Grid container>
        {Products.map((product) => (
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProductCard key={product.id} {...product} />
          </Grid>
        ))}
      </Grid>
      {console.log(productData)}
    </div>
  );
};

export default Product;
