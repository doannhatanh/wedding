import React from "react";

export const Invitation = () => {
  return (
    <section className="relative bg-[#F5EFE6] flex-col justify-between pb-6 mt-6">
      <div className="absolute bottom-0] -translate-y-[13px]">
        <img alt="" src="https://thiduyenwedding.iwedding.info/templates/template131/img/main_title.png" />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <div className="flex items-center justify-center w-full min-h-screen bg-center bg-no-repeat bg-cover">
          <div className="flex flex-col items-center px-4 pt-10">
            <div className="text-center" data-aos="fade-up" data-aos-delay="150">
              {/* Dòng chữ mời */}
              <div
                className="font-montagu text-[18px] sm:text-[20px]  tracking-[0.05rem] sm:tracking-[0.1rem]  text-[#262f29] leading-relaxed mb-4"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                Trân trọng kính mời
              </div>

              {/* Dòng tên với viền dưới */}
              <div
                className="block mx-auto min-w-[250px] sm:min-w-[300px] border-b-2 border-[#3a5141] border-solid min-h-[50px] pb-8 my-12"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="font-greatvibes text-[#262f29] text-[2.5rem] sm:text-[3rem]  lg:text-[5rem]">
                  A Bảy
                </span>
              </div>
              <div
                className="font-[400] text-[16px] sm:text-[16px]  tracking-[0.05rem] sm:tracking-[0.1rem]  max-w-[980px] relative text-center mx-auto font-montagu text-[#262f29] leading-[1.5] mb-10"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <div>Đến Dự</div>
                <div>Tiệc Mừng Lễ Vu Quy Nhà Gái</div>
              </div>

              {/* Ngày giờ */}
              <div
                className="font-[400] text-[18px] sm:text-[20px]  tracking-[0.05rem] sm:tracking-[0.1rem]  max-w-[980px] relative text-center mx-auto font-montagu text-[#262f29] leading-[1.5] mb-10"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                VÀO LÚC 16 GIỜ 00, THỨ HAI
              </div>
              <div
                className="font-[600] text-[24px] sm:text-[28px]  max-w-[980px] relative text-center mx-auto font-montagu text-[#262f29] leading-[1.5] mb-10"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                03 . 12 . 22
              </div>
              <div
                className="font-[200] text-[16px] sm:text-[18px]  max-w-[980px] relative text-center mx-auto font-montagu text-[#262f29] leading-[1.5] mb-10"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                (Tức Ngày 10 Tháng 9 Năm Giáp Thìn)
              </div>
              <div
                className="font-[400] text-[16px] sm:text-[18px]  tracking-[0.004rem] max-w-[980px] relative text-center mx-auto font-montagu text-[#262f29] leading-[1.5]"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                Tư Gia Nữ
              </div>
              {/* <div className="flex items-center justify-center py-6" data-aos="fade-up" data-aos-delay="250">
                <a
                  href="https://www.google.com/maps?q=15.9353333,108.1534167&label=Tiệc+Cưới+Hạnh+Phúc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block p-0 rounded-lg shadow-2xl group"
                >
                  <svg
                    className="w-[32px] h-[32px] text-[#262f29] duration-100 animate-bounce shadow-lg shadow-[#262f29] rounded-full"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.4"
                      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.4"
                      d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                    />
                  </svg>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
