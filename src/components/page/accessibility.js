import React from "react";

export const Accessibility = () => {
  return (
    <section className="py-4 accessibilities-section">
      <div className="container-fluid">
        <div className="row gx-2 justify-content-center">
          <div className="col-sm-4">
            <a
              href="#wishes"
              className="w-100 mb-1 px-2 accessibility-btn btn btn-secondary aos-init aos-animate"
              data-aos="fade-right"
            >
              <span className="content-button">
                <img
                  className="access-section-icon"
                  src="https://cdn.biihappy.com/ziiweb/images/static/common/wishes.png"
                  alt="access-btn"
                />
                Gửi lời chúc
              </span>
            </a>
          </div>
          <div className="col-sm-4">
            <a
              href="https://preview.iwedding.info/rsvp"
              target="_blank"
              className="w-100 mb-1 px-2 accessibility-btn btn btn-secondary aos-init aos-animate"
              data-aos="fade-up"
            >
              <span className="content-button">
                <img
                  className="access-section-icon"
                  src="https://cdn.biihappy.com/ziiweb/images/static/common/rsvp4.png"
                  alt="access-btn"
                />
                Xác nhận tham dự
              </span>
            </a>
          </div>
          <div className="col-sm-4">
            <a
              href="javascript:void(0)"
              className="w-100 mb-1 accessibility-btn btn btn-secondary buttonDonate aos-init aos-animate"
              data-aos="fade-left"
            >
              <span className="content-button">
                <img
                  className="access-section-icon"
                  src="https://cdn.biihappy.com/ziiweb/images/static/common/money_bag.png"
                  alt="access-btn"
                />
                Mừng cưới
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
