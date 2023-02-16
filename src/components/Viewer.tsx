import {
  MutableRefObject,
  PropsWithChildren,
  ReactElement,
  Ref,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useIsMutating } from "react-query";
import { SquareLoader } from "react-spinners";
import { AnalizeResult } from "../models/analize";
import "../styles/Viewer.css";
import Box from "./Box";

export interface ViewerProps {
  imgSrc: string;
  data?: AnalizeResult;
  imgRef: Ref<HTMLImageElement>
}

export default function Viewer({ imgSrc, data, imgRef }: ViewerProps) {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [xScale, setXScale] = useState(1);
  const [yScale, setYScale] = useState(1);
  const [isImgLoading, setImgLoading] = useState(true);
  const isDataLoading = useIsMutating() > 0;

  const adjustScale = () => {
    const size = ref.current;
    if (size == null) {
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

  if (!isDataLoading && data == null) {
    return (
      <div className="viewer-card">
        <p className="viewer-placeholder">
          Press to upload new image to measure
        </p>
      </div>
    );
  }

  // TODO: Handle no banana
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
      <svg className="viewer-boxes" data-isloading={isDataLoading || isImgLoading}>
        {banana}
        {boxes}
      </svg>
      <img
        src={imgSrc}
        ref={imgRef}
        // itemType="file"
        alt="An image with detected objects"
        onLoad={onImageLoad}
      />

      <Loader isLoading={isDataLoading || isImgLoading} />
    </div>
  );
}

function Loader({ isLoading }: { isLoading: boolean }) {
  return (
    <div className="loader-container" data-isloading={isLoading}>
      <SquareLoader className="loader" color="#FD7E89" loading={isLoading} />
    </div>
  );
}
