import { ChangeEvent, ReactElement, Ref, useState } from "react";
import { AnalizeResult } from "../models/analize";
import { EXAMPLES } from "../models/example";
import "../styles/ViewerContainer.css";
import Viewer from "./Viewer";

export interface ViewerContainerProps {
  onExampleChange: (imgData: string, isExample: boolean) => void,
  imgSrc: string,
  data?: AnalizeResult
  imgRef: Ref<HTMLImageElement>
}

export default function ViewerContainer({
  onExampleChange,
  imgSrc,
  data,
  imgRef,
}: ViewerContainerProps) {
  const [example, setExample] = useState("");

  const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setExample(e.target.value);
    onExampleChange(e.target.value, e.target.value != "");
  }

  return (
    <div className="viewer-container">
      <Viewer key={example} imgSrc={imgSrc} imgRef={imgRef} data={data} />
      <select className="example-select" onChange={onSelect}>
        {/* TODO: Load from EXAMPLES */}
        <option value="">Choose example</option>
        <option value="example-1.png">Example 1</option>
        <option value="example-2.jpg">Example 2</option>
      </select>
    </div>
  );
}
