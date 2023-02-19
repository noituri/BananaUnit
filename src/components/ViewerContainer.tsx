import { ChangeEvent, ReactElement, Ref, useState } from "react";
import { AnalizeResult } from "../models/analize";
import { EXAMPLES } from "../models/example";
import "../styles/ViewerContainer.css";
import Viewer from "./Viewer";

export interface ViewerContainerProps {
  imgSrc: string;
  data?: AnalizeResult;
  showLoading: boolean;
}

export default function ViewerContainer({
  imgSrc,
  data,
  showLoading,
}: ViewerContainerProps) {
  const examples = Object.keys(EXAMPLES).map((e, i) => <option value={e} selected={e === imgSrc}>Example {i+1} </option>);

  return (
    <div className="viewer-container">
      <Viewer
        key={imgSrc}
        imgSrc={imgSrc}
        data={data}
        showLoading={showLoading}
      />
      <select className="example-select">
        <option value="">Choose example</option>
        {examples}
      </select>
    </div>
  );
}
