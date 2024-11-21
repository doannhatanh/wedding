import React from "react";

export const Main = ({ children }) => {
  return (
    <div className="wrapper shadow">
      <section className="banner-section">
        <div className="main_area py-5">{children}</div>
      </section>
    </div>
  );
};
