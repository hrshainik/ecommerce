import Image from "next/image";
import React from "react";
import product from "../public/img/products/12599809_6 1.png";

const CategoryC = () => {
  return (
    <div className="category-c">
      <div className="category-c__img">
        <Image src={product} alt="hudai" layout="responsive" />
      </div>

      <div className="category-c-info">
        <h3 className="category-c-info__title">Mini LWC Chari</h3>
      </div>
    </div>
  );
};

export default CategoryC;
