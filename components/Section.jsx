import React from "react";

const Section = ({ children, bgCol }) => {
  return (
    <section style={{ backgroundColor: `${bgCol}` }}>
      <div className="section">{children}</div>
    </section>
  );
};

export default Section;
