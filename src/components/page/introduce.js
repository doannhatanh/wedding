import React from "react";

export const Introduce = () => {
  return (
    <section className="bg-[#fff] py-6">
      <div className="grid grid-cols-[1fr_auto_1fr]" data-aos="zoom-in-up">
        <div className="flex items-center justify-end w-full">
          <div className="h-[1px] w-full bg-[#262f29]"></div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="font-[700] text-[26px] sm:text-[26px] mb-[3rem] tracking-[0.3rem] font-alexbrush text-[#262f29] text-center max-w-[980px] mx-auto leading-[1.5]">
            Chú Rể & Cô Dâu
          </div>
        </div>
        <div className="flex items-center justify-start w-full">
          <div className="h-[1px] w-full bg-[#262f29]"></div>
        </div>
      </div>

      <div className="relative grid grid-rows-2">
        <div className="absolute top-1/2 left-1/2 -translate-x-[50px] -translate-y-[50px] z-50">
          <img src="/heart.png" alt="" className="w-[100px]" />
        </div>
        {/* GROOM */}
        <div className="grid items-center justify-around grid-cols-2">
          <div data-aos="fade-right">
            <img src="/groom.JPG" alt="" />
          </div>
          <div className="flex-col items-center space-y-4 lg:space-y-8">
            <div className="flex-col space-y-2 text-center">
              <div className="font-montagu font-[600] text-[12px] sm:text-[12px]  tracking-[0.05rem] sm:tracking-[0.1rem] md:tracking-[0.15rem] text-[#262f29] leading-relaxed">
                NHÀ TRAI
              </div>
              <div className="font-montagu font-[600] text-[12px] sm:text-[12px]  tracking-[0.05rem] sm:tracking-[0.1rem] md:tracking-[0.15rem] text-[#262f29] leading-relaxed">
                ÔNG ĐOÀN QUYỀN
              </div>
              <div className="font-montagu font-[600] text-[12px] sm:text-[12px]  tracking-[0.05rem] sm:tracking-[0.1rem] md:tracking-[0.15rem] text-[#262f29] leading-relaxed">
                BÀ BÙI THỊ DỊU
              </div>
              <div className="font-montagu font-[200] text-[10px] sm:text-[10px] tracking-[0.05rem] sm:tracking-[0.1rem] md:tracking-[0.15rem] text-[#262f29] leading-relaxed">
                90 Đoàn Hữu Trưng, Tp.Đồng Hới, T.Quảng Bình
              </div>
            </div>
            <div className="flex-col items-center justify-center space-y-2 text-center">
              <div className="font-montagu font-[800] text-[12px] sm:text-[12px]  tracking-[0.05rem] sm:tracking-[0.1rem] md:tracking-[0.15rem] text-[#262f29] leading-relaxed">
                Trưởng Nam
              </div>
              <div className="font-alexbrush font-[400] text-[24px] sm:text-[24px] md:text-[32px] tracking-[0.05rem] sm:tracking-[0.1rem] md:tracking-[0.15rem] text-[#262f29] leading-relaxed">
                Đoàn Nhật Anh
              </div>
            </div>
          </div>
        </div>
        <div className="grid items-center justify-around grid-cols-2">
          <div className="flex-col items-center space-y-4 lg:space-y-8">
            <div className="flex-col space-y-2 text-center">
              <div className="font-montagu font-[600] text-[12px] sm:text-[12px]  tracking-[0.05rem] sm:tracking-[0.1rem] md:tracking-[0.15rem] text-[#262f29] leading-relaxed">
                NHÀ GÁI
              </div>
              <div className="font-montagu font-[600] text-[12px] sm:text-[12px]  tracking-[0.05rem] sm:tracking-[0.1rem] md:tracking-[0.15rem] text-[#262f29] leading-relaxed">
                ÔNG NGUYỄN LƯƠNG CHIẾN
              </div>
              <div className="font-montagu font-[600] text-[12px] sm:text-[12px]  tracking-[0.05rem] sm:tracking-[0.1rem] md:tracking-[0.15rem] text-[#262f29] leading-relaxed">
                BÀ ĐINH THỊ LIÊN
              </div>
              <div className="font-montagu font-[200] text-[10px] sm:text-[10px] md:text-[14px] tracking-[0.05rem] sm:tracking-[0.1rem] md:tracking-[0.15rem] text-[#262f29] leading-relaxed">
                Thôn Xuân Diệm, X.Điện Tiến, Tx.Điện Bàn, T.Quảng Nam
              </div>
            </div>
            <div className="flex-col items-center justify-center space-y-2 text-center">
              <div className="font-montagu font-[800] text-[12px] sm:text-[12px]  tracking-[0.05rem] sm:tracking-[0.1rem] md:tracking-[0.15rem] text-[#262f29] leading-relaxed">
                Út Nữ
              </div>
              <div className="font-alexbrush font-[400] text-[24px] sm:text-[24px] md:text-[32px] tracking-[0.05rem] sm:tracking-[0.1rem] md:tracking-[0.15rem] text-[#262f29] leading-relaxed">
                Nguyễn Thị Ánh
              </div>
            </div>
          </div>
          <div>
            <img src="/bride.JPG" alt="" data-aos="fade-left" />
          </div>
        </div>
        {/* BRIGHT */}
      </div>
    </section>
  );
};
