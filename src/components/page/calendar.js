import React from "react";

export const Calendar = () => {
  return (
    <section className="pb-12 pt-20 weddingdate-section bg-[#fff]" id="weddingdate">
      <div className="container-fluid">
        <div className="w-100">
          <div className="pt-5 pb-3 m-auto aos-init aos-animate" data-aos="fade-up">
            <div className="mini_calendar">
              <table>
                <caption className="calendar-month">Tháng 4 / 2024</caption>
                <tbody>
                  <tr className="text-[#8c846d] text-[0.9rem]">
                    <th abbr="Monday">Thứ 2</th>
                    <th abbr="Tuesday">Thứ 3</th>
                    <th abbr="Wednesday">Thứ 4</th>
                    <th abbr="Thursday">Thứ 5</th>
                    <th abbr="Friday">Thứ 6</th>
                    <th abbr="Saturday">Thứ 7</th>
                    <th abbr="Sunday">CN</th>
                  </tr>
                  <tr className="text-[#d2c5a2] text-[0.9rem]">
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>
                      <div id="today">4</div>
                    </td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                  </tr>
                  <tr className="text-[#d2c5a2] text-[0.9rem]">
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                  </tr>
                  <tr className="text-[#d2c5a2] text-[0.9rem]">
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                  </tr>
                  <tr className="text-[#d2c5a2] text-[0.9rem]">
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                  </tr>
                  <tr className="text-[#d2c5a2] text-[0.9rem]">
                    <td>29</td>
                    <td>30</td>
                    <td id="emptydays" colspan="5">
                      &nbsp;
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="countdown aos-init aos-animate" data-aos="fade-up-left">
            <div
              className="m-auto"
              id="clock"
              data-date="2024-04-04"
              data-text-day="Ngày"
              data-text-hour="Giờ"
              data-text-minute="Phút"
              data-text-second="Giây"
            >
              <div className="box text-[1.6rem] leading-10 font-bellota text-[#8c846d]">
                <div>232</div> <span>Ngày</span>
              </div>
              <div className="box text-[1.6rem] leading-10 font-bellota text-[#8c846d]">
                <div>12</div> <span>Giờ</span>{" "}
              </div>
              <div className="box text-[1.6rem] leading-10 font-bellota text-[#8c846d]">
                <div>41</div> <span>Phút</span>{" "}
              </div>
              <div className="box text-[1.6rem] leading-10 font-bellota text-[#8c846d]">
                <div>53</div> <span>Giây</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
