import React from "react";

export const ThankYou = () => {
  return (
    <section>
      <div
        className="relative flex items-center justify-center w-full min-h-screen bg-center bg-no-repeat bg-cover grayscale"
        style={{
          backgroundImage: `url("thank.jpg")`,
        }}
      >
        <div className="font-windsong font-[400] text-[26px] sm:text-[26px] mb-[3rem] tracking-[0.3rem] text-[#fff] text-center max-w-[980px] mx-auto leading-[1.5]">
          Thank You
        </div>
      </div>
    </section>
  );
};
