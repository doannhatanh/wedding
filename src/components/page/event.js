import React from "react";

export const Event = () => {
  return (
    <section className="grid w-full min-h-screen bg-[#F5EFE6]">
      <div className="relative grid w-full h-full p-0 place-content-center">
        <div className="font-[500] text-[18px] sm:text-[20px] md:text-[24px] m-b-[3rem] font-montagu text-[#262f29] text-center max-w-[980px] relative mx-auto leading-[1.5]" data-aos="zoom-in-up">
          EVENT
        </div>
        <div className="relative grid mt-[30px] w-[calc(100vw-96px)] sm:w-[540px] [grid-template-columns:unset] items-center before:content-[''] before:block before:absolute before:t-0 before:left-[50%] before:h-full before:bg-[#262f29] before:w-[1px] before:z-[2] transform [rotate:0deg]">
          <div className="relative grid [grid-template-columns:1.5fr_1fr] [grid-template-rows:unset] py-[2rem] justify-center before:content-[''] before:block before:absolute before:w-[50px] before:h-[1px] before:left-[calc(50%+1px)] before:top-[50%] before:-translate-y-1/2 before:bg-[#262f29] before:z-[2] first:after:content-[''] first:after:block first:after:absolute first:after:w-[10px] first:after:h-[10px] first:after:left-[calc(50%-4px)] first:after:top-0 first:after:bg-[#262f29] first:after:z-[2] first:after:rounded-full" 
                data-aos="fade-left"
                data-aos-delay="100">
            <div className="p-0 m-0 text-left ">
              <img src="https://static.namtay.vn/assets/img/theme16/gate.png" alt="" className="border-none" />
            </div>
            <div className="grid place-content-center gap-[0.5rem] mt-0">
              <div className="font-[200] text-[1rem] sm:text-[1rem] md:text-[1.3rem] font-montagu text-[#262f29] leading-[1.5] text-center">
                15:30 PM
              </div>
              <div className="font-[500] text-[32px] sm:text-[32px] md:text-[40px] font-greatvibes text-[#262f29] text-center">
                welcome
              </div>
            </div>
          </div>
          <div className="relative grid [grid-template-columns:1.5fr_1fr] [grid-template-rows:unset] py-[2rem] justify-center before:content-[''] before:block before:absolute before:w-[50px] before:h-[1px] before:left-[calc(50%+1px)] before:top-[50%] before:-translate-y-1/2 before:bg-[#262f29] before:z-[2]" 
                data-aos="fade-left"
                data-aos-delay="100">
            <div className="p-0 text-left ">
              <img
                src="https://image.namtay.vn/fit/300/images/wedsite/l7lUZZqM9p_wineglass.png"
                alt=""
                className="border-none"
              />
            </div>
            <div className="grid place-content-center gap-[0.5rem] mt-0">
              <div className="font-[200] text-[1rem] sm:text-[1rem] md:text-[1.3rem] font-montagu text-[#262f29] leading-[1.5] text-center">
                18:00 PM
              </div>
              <div className="font-[500] text-[32px] sm:text-[32px] md:text-[40px] font-greatvibes text-[#262f29] text-center">
                ceremony
              </div>
            </div>
          </div>
          <div className="relative grid [grid-template-columns:1.5fr_1fr] [grid-template-rows:unset] py-[2rem] justify-center before:content-[''] before:block before:absolute before:w-[50px] before:h-[1px] before:left-[calc(50%+1px)] before:top-[50%] before:-translate-y-1/2 before:bg-[#262f29] before:z-[2] last:after:content-[''] last:after:block last:after:absolute last:after:w-[10px] last:after:h-[10px] last:after:left-[calc(50%-4px)] last:after:top-[unset] last:after:bottom-[0] last:after:bg-[#262f29] last:after:z-[2] last:after:rounded-full"
              data-aos="fade-left"
              data-aos-delay="100">
              <div className="p-0 text-left ">
                <img
                  src="https://image.namtay.vn/fit/300/images/wedsite/3BrGSAj97M_plate-3.png"
                  alt=""
                  className="border-none"
                />
              </div>
              <div className="grid place-content-center gap-[0.5rem] mt-0">
                <div className="font-[200] text-[1rem] sm:text-[1rem] md:text-[1.3rem] font-montagu text-[#262f29] leading-[1.5] text-center">
                  21:00 PM
                </div>
                <div className="font-[500] text-[32px] sm:text-[32px] md:text-[40px] font-greatvibes text-[#262f29] text-center">
                  dinner
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
