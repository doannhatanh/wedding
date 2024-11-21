import React, { useEffect, useState } from "react";

export const DayWrapper = () => {
  const [top, setTop] = useState(0);

  const calculateTop = (currentWidth, currentHeight) => {
    const referenceHeight = 900;
    const referenceTop = 230;

    const heightRatio = currentHeight / referenceHeight;

    return currentWidth < 640 ? referenceTop * heightRatio + 50 : referenceTop * heightRatio;
  };

  useEffect(() => {
    const handleResize = () => {
      // Lấy kích thước hiện tại của màn hình
      const width = window.innerWidth <= 636 ? window.innerWidth : 640;
      const height = window.innerHeight;

      const calculatedTop = calculateTop(width, height);
      setTop(calculatedTop);
    };

    // Gọi hàm tính toán ban đầu
    handleResize();

    window.addEventListener("resize", handleResize);

    // Xóa sự kiện khi component bị hủy
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="pb-6">
      <div data-aos="fade-up" data-aos-delay="300">
        <div
          className="relative flex items-center justify-center w-full min-h-screen bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url("LOG_2635.jpg")`,
          }}
        >
          <div
            style={{
              top: `${top}px`,
            }}
            className="absolute flex flex-col items-center justify-start min-h-screen pt-[5px]"
          >
            {/* Dòng chữ "Save the Date" */}
            <div className="mb-1 text-center">
              <div
                className="font-alexbrush -rotate-90 text-[28px] sm:text-[48px] tracking-[0.3rem] sm:tracking-[0.5rem] text-[#fff] leading-relaxed drop-shadow-lg animate-bounce duration-[2s]"
                data-aos="zoom-in"
                data-aos-delay="350"
              >
                Thị Ánh - Nhật Anh
              </div>
            </div>
            <div className="mb-8 text-center">
              <div className="grid gap-2">
                <div
                  className="font-montagu text-[16px] sm:text-[16x] tracking-[0.3rem] sm:tracking-[0.5rem] text-[#fff] leading-relaxed drop-shadow-lg"
                  data-aos="zoom-in"
                  data-aos-delay="350"
                >
                  SAVE OUR DATE
                </div>
                <div
                  className="font-montagu text-[16px] sm:text-[16x] tracking-[0.8rem] sm:tracking-[1rem] text-[#fff] leading-relaxed drop-shadow-lg"
                  data-aos="zoom-in"
                  data-aos-delay="350"
                >
                  29.12.2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
