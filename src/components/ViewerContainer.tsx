import { ChangeEvent, ReactElement, useState } from "react";
import { AnalizeResult } from "../models/analize";
import { EXAMPLES } from "../models/example";
import "../styles/ViewerContainer.css";
import Viewer from "./Viewer";

export interface ViewerContainerProps {
  onChange: (imgData: string, isExample: boolean) => AnalizeResult | undefined,
}

export default function ViewerContainer({
  onChange,
}: ViewerContainerProps) {
  const [example, setExample] = useState("");
  const [data, setData] = useState<AnalizeResult | undefined>(undefined);

  const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setExample(e.target.value);
    const newData = onChange(e.target.value, e.target.value != "");
    setData(newData);
  }

  return (
    <div className="viewer-container">
      <Viewer imgSrc={example} data={data} />
      <select className="example-select" onChange={onSelect}>
        {/* TODO: Load from EXAMPLES */}
        <option value="">Choose example</option>
        <option value="example-1.png">Example 1</option>
        <option value="example-2.jpg">Example 2</option>
      </select>
    </div>
  );
}
