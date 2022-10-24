import Image from "next/image";
import React from "react";
import img from "../public/img/products/purepng 1.png";

const FeatureC = () => {
  return (
    <div className="feature-c">
      <div className="feature-c__img">
        <Image src={img} alt="hudai" layout="responsive" />
      </div>

      <div className="feature-c-info">
        <h4 className="feature-c-info__title">24/7 Support</h4>
        <p className="feature-c-info__disc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
          gravida.
        </p>
      </div>
    </div>
  );
};

export default FeatureC;
