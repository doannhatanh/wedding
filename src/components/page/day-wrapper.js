import React from "react";

export const DayWrapper = () => {
  return (
    <>
      <div className="day_wrapper aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
        <div className="day_area text-center flex flex-col">
          <div
            className="section-sub-title day_area_inner text-center m-1 h-full flex flex-col justify-center"
            data-aos="fade-up"
          >
            <span className="day">04 / 04</span>
            <span className="yoil">Thứ 5</span>
          </div>
        </div>
      </div>
      <div className="main_image_area pt-4" data-aos="fade-up" data-aos-delay="50">
        <div className="main_image">
          <img
            alt=""
            src="https://cdn.biihappy.com/ziiweb/default/template/64257401855becefb90bba72/309178d7d1b689cc37d1f12a13b5aa79.jpg"
          />
        </div>
      </div>
      <div
        className="section-title wedding_area pt-5 my-10 flex justify-around w-full tracking-[3px] aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <span className="groom_name fcim">Nhật Anh</span>
        <img
          alt=""
          src="https://preview.iwedding.info/templates/template101/img/main_icon01.png"
          style={{ width: "50px" }}
        />
        <span className="bride_name fcim">Thị Ánh</span>
      </div>
    </>
  );
};
