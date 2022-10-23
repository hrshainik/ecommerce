import Image from "next/image";
import React from "react";
import product from "../public/img/products/image 1169.png";

const FeatureProductC = () => {
  return (
    <div className="feature-product-c">
      <div className="feature-product-c__img">
        <Image src={product} layout="responsive" alt="product" />
      </div>
      <div className="feature-product-c-info">
        <h3 className="feature-product-c-info__title">Vel elit euismod</h3>
        <div className="feature-product-c-info__dot">
          <div className="feature-product-c-info__dot-1"></div>
          <div className="feature-product-c-info__dot-2"></div>
          <div className="feature-product-c-info__dot-3"></div>
        </div>
        <p className="feature-product-c-info__code">Code - Y523201</p>
        <p className="feature-product-c-info__price">20$</p>
      </div>
    </div>
  );
};

export default FeatureProductC;
