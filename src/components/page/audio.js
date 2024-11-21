import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";

export const Audio = forwardRef(({ url }, ref) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  useImperativeHandle(ref, () => ({
    togglePlayPause,
  }));

  return (
    <div
      className="fixed bottom-[1rem] left-[1rem] inline-block p-1 rounded-full cursor-pointer w-[40px] h-[40px] z-[2] pt-[7px] pl-[9px] bg-[#df4758] after:contents-[''] after:absolute after:rounded-full after:bg-[#f23b434d] after:w-[120%] after:h-[120%] after:left-[-10%] after:top-[-10%] after:animate-pulse after:z-[1] after:duration-1000"
      onClick={togglePlayPause}
    >
      <audio ref={audioRef} src={url} controls="controls" loop autoPlay muted={false} className="hidden" />
      {!isPlaying ? (
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="27" fill="#fff" viewBox="0 0 16 16">
            <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"></path>
          </svg>
        </span>
      ) : (
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="27" fill="#fff" viewBox="0 0 16 16">
            <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"></path>
            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"></path>
            <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"></path>
          </svg>
        </span>
      )}
    </div>
  );
});
