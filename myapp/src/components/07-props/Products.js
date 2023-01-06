import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div>
      <ProductCard name="ali">
        <h2>Sony Display</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
          temporibus dolore debitis in inventore provident quo neque suscipit
          enim aperiam minima eius architecto libero id, recusandae dignissimos
          optio fugit ea.
        </p>
      </ProductCard>
      <ProductCard>
        <h2>İntel processor</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
          temporibus dolore debitis in inventore provident quo neque suscipit
          enim aperiam minima eius architecto libero id, recusandae dignissimos
          optio fugit ea.
        </p>
      </ProductCard>
    </div>
  );
};

export default Products;
