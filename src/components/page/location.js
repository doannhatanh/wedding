import React from "react";

export const Location = () => {
  return (
    <section className="py-6">
      <div className="grid grid-cols-[1fr_auto_1fr]" data-aos="zoom-in-up">
        <div className="flex items-center justify-end w-full">
          <div className="h-[1px] w-full bg-[#262f29]"></div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="font-[700] text-[26px] sm:text-[26px]  mb-[3rem] tracking-[0.3rem] font-alexbrush text-[#262f29] text-center max-w-[980px] mx-auto leading-[1.5]">
            Địa Điểm Tổ Chức
          </div>
        </div>
        <div className="flex items-center justify-start w-full">
          <div className="h-[1px] w-full bg-[#262f29]"></div>
        </div>
      </div>

      {/* Phần thông tin địa điểm */}
      <div
        className="flex flex-col items-center space-y-4 text-center bg-[#F5EFE6] mx-3 p-3 rounded-sm"
        data-aos="zoom-in"
      >
        <div className="font-montagu text-xl font-semibold text-[#262f29]">Tư Gia Nữ</div>

        {/* Hình ảnh */}
        <div className="w-full max-w-[600px] mx-auto">
          <img src="/map.png" alt="Map" className="w-full h-auto rounded-sm shadow-lg" />
        </div>

        {/* Nút tối giản với bo tròn và box-shadow */}
        <div>
          <a
            href="https://www.google.com/maps?q=15.9353333,108.1534167+(Ti%E1%BB%87c+C%C6%B0%E1%BB%9Di+H%E1%BA%A1nh+Ph%C3%BAc)&z=16"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bellota inline-block text-sm text-[#fff] bg-[#262f29] py-2 px-6 rounded-lg shadow-lg hover:bg-[#212529] hover:shadow-xl transition-all duration-300"
          >
            Xem Trên Google Map
          </a>
        </div>
      </div>
    </section>
  );
};
