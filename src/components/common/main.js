import React from "react";

export const Main = ({ children, onClick }) => {
  return (
    <div
      className="overflow-hidden bg-white w-full max-w-[640px] mx-auto p-[2px] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]"
      onClick={onClick}
    >
      <section className="banner-section">{children}</section>
    </div>
  );
};
