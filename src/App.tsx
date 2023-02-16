import { ChangeEvent, useRef, useState } from "react";
import { useMutation } from "react-query";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import BananaViewer from "./components/ViewerContainer";
import { AnalizeResult, fetchResult } from "./models/analize";
import { EXAMPLES } from "./models/example";
import "./styles/App.css";

function App() {
  const [data, setData] = useState<AnalizeResult | undefined>(undefined);
  const mutation = useMutation(fetchResult);
  const imgRef = useRef(null);

  const onDataChange = (
    imgSrc: string,
    isExample: boolean
  ): AnalizeResult | undefined => {
    if (isExample) {
      const example = EXAMPLES[imgSrc];
      setData(example);
      return example;
    }

    // const { data, error} = useQuery(["measurements", imgSrc], fetchResult)
    // return data;
  };

  const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files![0]);
    if (e.target.files == null || e.target.files!.length == 0) {
      return;
    }
    const file = e.target.files![0];
    mutation.mutate(file);
    // const { data, error} = useQuery<AnalizeResult>(["measurements", file], () => fetchResult(file));
  };

  return (
    <div className="app">
      <div className="front">
        <div className="container">
          <h1>Measure things with bananas 🍌</h1>
          <BananaViewer onChange={onDataChange} imgRef={imgRef} />
          <label htmlFor="upload-input" className="measure-button">Upload</label>
          <input id="upload-input" type="file" onChange={onUpload}></input>

          {data && <Stats {...data} />}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
