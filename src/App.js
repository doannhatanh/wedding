import React, { useEffect } from "react";
import "./App.css";
import { Main } from "./components/common/main";
import { DayWrapper } from "./components/page/day-wrapper";
import AOS from "aos";
import { Gallery } from "./components/page/gallery/gallery";
import { Calendar } from "./components/page/calendar";
import { Story } from "./components/page/story";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
      once: false,
      delay: 0,
      offset: 120,
      mirror: true,
    });

    AOS.refresh();
  }, []);

  return (
    <Main>
      <DayWrapper />
      <Gallery />
      <Calendar />
      <Story />
    </Main>
  );
}

export default App;
