import { MutableRefObject, ReactElement, useLayoutEffect, useRef, useState } from "react";
import { AnalizeResult } from "../models/analize";
import "../styles/Viewer.css"
import Box from "./Box";

export interface ViewerProps {
  imgSrc: string,
  data?: AnalizeResult
}

export default function Viewer({imgSrc, data}: ViewerProps) {
  if (imgSrc === "" || data == null) {
    return (
      <div className="viewer-card">
        <p className="viewer-placeholder">Press to upload new image to measure</p>
      </div>
    );
  }

  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [xScale, setXScale] = useState(1);
  const [yScale, setYScale] = useState(1);

  useLayoutEffect(() => {
    const size = ref.current;
    if (size == null) {
      return;
    }

    setXScale(size!.offsetWidth / data!.imageSize[0]);
    setYScale(size!.offsetHeight / data!.imageSize[1]);
  }, []);
  
  const banana = data!.banana && <Box key="main-banana" obj={data.banana!} xScale={xScale} yScale={yScale} isRef={true} />;
  const boxes = data?.objects.map(o => <Box key={o.label} obj={o} xScale={xScale} yScale={yScale} isRef={false}/>);

  return (
    <div ref={ref} className="viewer-card">
      <svg className="viewer-boxes">
        {banana}
        {boxes}
      </svg>
      <img src={imgSrc} alt="An image with detected objects" />
    </div>
  );
}
