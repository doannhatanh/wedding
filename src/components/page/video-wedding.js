import React from "react";

export const VideoWedding = () => {
  return (
    <section className="grid w-full bg-[#F5EFE6] py-6">
      <div className="relative grid w-full h-full gap-8 p-0 py-6 place-content-center">
        <div className="grid grid-cols-[1fr_auto_1fr]" data-aos="zoom-in-up">
          <div className="flex items-center justify-end w-full">
            <div className="h-[1px] w-full bg-[#262f29]"></div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="font-[700] text-[26px] sm:text-[26px] md:text-[32px] mb-[3rem] tracking-[0.3rem] font-alexbrush text-[#262f29] text-center max-w-[980px] mx-auto leading-[1.5]">
              Địa Điểm Tổ Chức
            </div>
          </div>
          <div className="flex items-center justify-start w-full">
            <div className="h-[1px] w-full bg-[#262f29]"></div>
          </div>
        </div>
        <div
          className="font-[500] text-[24px] sm:text-[24px] md:text-[32px] font-greatvibes text-[#262f29] text-center px-6"
          data-aos="fade-up"
        >
          Tình yêu không làm cho thế giới quay tròn.
        </div>
        <div className="ratio ratio-16x9 aos-init aos-animate" data-aos="zoom-in">
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/N_wM9mfN7JY?si=-4hZROQgstq-T9Dr"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
