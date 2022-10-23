import Image from "next/image";
import React from "react";
import product from "../public/img/products/image 1167.png";

const RegularProductC = () => {
  return (
    <div className="regular-product-c">
      <div className="regular-product-c__img">
        <Image src={product} layout="responsive" alt="product" />
      </div>
      <div className="regular-product-c-info">
        <h3 className="regular-product-c-info__title">Vel elit euismod</h3>
        <div className="regular-product-c-info__dot">
          <div className="regular-product-c-info__dot-1"></div>
          <div className="regular-product-c-info__dot-2"></div>
          <div className="regular-product-c-info__dot-3"></div>
        </div>
        <p className="regular-product-c-info__price">
          20${" "}
          <span className="regular-product-c-info__price-p">
            <s>30$</s>
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegularProductC;
