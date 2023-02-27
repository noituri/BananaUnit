import { AnalizeData } from "../models/analize";
import { EXAMPLES } from "../models/example";
import "../styles/ViewerContainer.css";
import Viewer from "./Viewer";

export interface ViewerContainerProps {
  imgSrc: string;
  data?: AnalizeData;
  showLoading: boolean;
  onExampleSelect: (example: string) => void;
}

export default function ViewerContainer({
  imgSrc,
  data,
  showLoading,
  onExampleSelect,
}: ViewerContainerProps) {
  const examples = Object.keys(EXAMPLES).map((e, i) => (
    <option key={e} value={e}>
      Example {i + 1}{" "}
    </option>
  ));

  return (
    <div className="viewer-container">
      <Viewer
        key={imgSrc}
        imgSrc={imgSrc}
        data={data}
        showLoading={showLoading}
      />
      <select
        className="example-select secondary-font"
        value={imgSrc}
        onChange={(e) => onExampleSelect(e.target.value)}
      >
        <option value="">Choose example</option>
        {examples}
      </select>
    </div>
  );
}
