import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import { Main } from "./components/common/main";
import { DayWrapper } from "./components/page/day-wrapper";
import AOS from "aos";
import { Gallery } from "./components/page/gallery/gallery";
import { Calendar } from "./components/page/calendar";
import { VideoWedding } from "./components/page/video-wedding";
import { Invitation } from "./components/page/invitation";
import { Event } from "./components/page/event";
import Snowfall from "react-snowfall";
import { Notice } from "./components/page/notice";
import { Audio } from "./components/page/audio";
import { Introduce } from "./components/page/introduce";
import { Location } from "./components/page/location";
import { ThankYou } from "./components/page/thank-you";

function App() {
  const audioRef = useRef();
  const [firstTouch, setFirstTouch] = useState(false);

  useLayoutEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
      once: false,
      delay: 0,
      offset: 200,
      mirror: true,
    });

    AOS.refresh();
  }, []);

  const playAudio = () => {
    if (!audioRef || firstTouch) return;
    setFirstTouch(true);
    audioRef.current.togglePlayPause();
  };

  return (
    <Main onClick={playAudio}>
      <Audio url={"/song.mp3"} ref={audioRef} />
      <Notice />
      <DayWrapper />
      <Introduce />
      <Invitation />
      <Location />
      <Gallery />
      <VideoWedding />
      <ThankYou />
      {/* <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
        speed={[0.2, 0.5]}
        color="#fff"
        wind={[-0.2, 0.2]}
        changeFrequency={100}
      /> */}
    </Main>
  );
}

export default App;
