import { ChangeEvent, ReactElement, Ref, useState } from "react";
import { AnalizeResult } from "../models/analize";
import { DEFAULT_EXAMPLE, EXAMPLES } from "../models/example";
import "../styles/ViewerContainer.css";
import Viewer from "./Viewer";

export interface ViewerContainerProps {
  imgSrc: string;
  data?: AnalizeResult;
  showLoading: boolean;
  onExampleSelect: (example: string) => void
}

export default function ViewerContainer({
  imgSrc,
  data,
  showLoading,
  onExampleSelect
}: ViewerContainerProps) {
  const examples = Object.keys(EXAMPLES).map((e, i) => <option key={e} value={e}>Example {i+1} </option>);

  return (
    <div className="viewer-container">
      <Viewer
        key={imgSrc}
        imgSrc={imgSrc}
        data={data}
        showLoading={showLoading}
      />
      <select className="example-select" value={imgSrc} onChange={e => onExampleSelect(e.target.value)}>
        <option value="">Choose example</option>
        {examples}
      </select>
    </div>
  );
}
