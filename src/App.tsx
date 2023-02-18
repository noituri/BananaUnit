import { ChangeEvent, useRef, useState } from "react";
import { useMutation } from "react-query";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import BananaViewer from "./components/ViewerContainer";
import { AnalizeResult, fetchResult } from "./models/analize";
import { EXAMPLES } from "./models/example";
import "./styles/App.css";

function App() {
  const [imgSrc, setImgSrc] = useState("");
  const [data, setData] = useState<AnalizeResult | undefined>(undefined);
  const mutation = useMutation(fetchResult, {
    onSuccess: (data, variables, context) => {
      setData(data);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgSrc(reader.result as string);
        // console.log(reader.result);
      }, false);
      
      reader.readAsDataURL(variables);
    },
  });
  const imgRef = useRef(null);

  const onExampleChange = (imgSrc: string, isExample: boolean) => {
    if (isExample) {
      const example = EXAMPLES[imgSrc];
      setData(example);
      setImgSrc(imgSrc);
    }
  };

  const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files![0]);
    if (e.target.files == null || e.target.files!.length == 0) {
      return;
    }
    const file = e.target.files![0];
    // TODO: Fix uploading the same image twice not working
    mutation.mutate(file);
  };

  return (
    <div className="app">
      <div className="front">
        <div className="container">
          <h1>Measure things with bananas 🍌</h1>
          <BananaViewer
            onExampleChange={onExampleChange}
            imgSrc={imgSrc}
            imgRef={imgRef}
            data={data}
          />
          <label htmlFor="upload-input" className="measure-button">
            Upload
          </label>
          <input id="upload-input" type="file" onChange={onUpload}></input>

          {data && <Stats {...data} />}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
