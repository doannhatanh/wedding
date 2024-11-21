import React from "react";
import { photos } from "./photos";

const layout = "masonry";
const width = 100;

const useLayoutEffect = typeof document !== "undefined" ? React.useLayoutEffect : React.useEffect;

export const useSetting = () => {
  // rows columns masonry
  const [targetRowHeight, setTargetRowHeight] = React.useState(300);
  const [spacing, setSpacing] = React.useState(30);
  const [padding, setPadding] = React.useState(0);

  useLayoutEffect(() => {
    const viewportSize = window.innerWidth;
    setSpacing(viewportSize < 480 ? 10 : viewportSize < 900 ? 3 : 7);
    setPadding(viewportSize < 480 ? 10 : viewportSize < 900 ? 1 : 3);
    setTargetRowHeight(viewportSize < 480 ? 100 : viewportSize < 900 ? 150 : 200);
  }, []);

  return { photos, layout, columns: 2, targetRowHeight, spacing, padding, width };
};
