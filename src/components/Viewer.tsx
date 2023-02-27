import { MutableRefObject, useLayoutEffect, useRef, useState } from "react";
import { SquareLoader } from "react-spinners";
import { AnalizeData } from "../models/analize";
import "../styles/Viewer.css";
import Box from "./Box";

export interface ViewerProps {
  imgSrc: string;
  showLoading: boolean;
  data?: AnalizeData;
}

export default function Viewer({ imgSrc, data, showLoading }: ViewerProps) {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [xScale, setXScale] = useState(1);
  const [yScale, setYScale] = useState(1);
  const [isImgLoading, setImgLoading] = useState(true);

  const adjustScale = () => {
    const size = ref.current;
    if (size == null || data == null) {
      return;
    }

    setXScale(size!.clientWidth / data!.imageSize[0]);
    setYScale(size!.clientHeight / data!.imageSize[1]);
  };

  const onImageLoad = () => {
    adjustScale();
    setImgLoading(false);
  };

  useLayoutEffect(adjustScale, []);

  const banana = data?.banana && (
    <Box
      key="main-banana"
      obj={data.banana!}
      xScale={xScale}
      yScale={yScale}
      isRef={true}
    />
  );
  const boxes = data?.objects.map((o) => (
    <Box key={o.label} obj={o} xScale={xScale} yScale={yScale} isRef={false} />
  ));
  return (
    <div ref={ref} className="viewer-card">
      <svg
        className="viewer-boxes secondary-font"
        data-isloading={showLoading || isImgLoading}
      >
        {banana}
        {boxes}
      </svg>
      {imgSrc !== "" && (
        <img
          src={imgSrc}
          alt="An image with detected objects"
          onLoad={onImageLoad}
        />
      )}

      <Loader isLoading={showLoading || isImgLoading} />
    </div>
  );
}

function Loader({ isLoading }: { isLoading: boolean }) {
  return (
    <div className="loader-container" data-isloading={isLoading}>
      <SquareLoader className="loader" color="#FD7E89" loading={isLoading} />
      <p>This may take a while</p>
    </div>
  );
}
