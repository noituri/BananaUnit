import { ChangeEvent, useRef, useState } from "react";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import BananaViewer from "./components/ViewerContainer";
import { AnalizeResult, fetchResult } from "./models/analize";
import { DEFAULT_EXAMPLE, EXAMPLES } from "./models/example";
import "./styles/App.css";

function App() {
  const [imgSrc, setImgSrc] = useState(DEFAULT_EXAMPLE);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<AnalizeResult>(EXAMPLES[DEFAULT_EXAMPLE]);

  const onExampleSelect = (example: string) => {
    setData(EXAMPLES[example] ?? EXAMPLES[DEFAULT_EXAMPLE]);
    setImgSrc(example === "" ? DEFAULT_EXAMPLE : example);
  };

  const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files == null || e.target.files!.length == 0) {
      return;
    }

    const file = e.target.files![0];
    setIsLoading(true);
    fetchResult(file).then((result) => {
      console.log(result);
      setData(result);
      setIsLoading(false);

      // Load file
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () => {
          setImgSrc(reader.result as string);
        },
        false
      );

      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="app">
      <div className="front">
        <div className="container">
          <h1>Measure things with bananas 🍌</h1>
          <BananaViewer
            imgSrc={imgSrc}
            data={data}
            showLoading={isLoading}
            onExampleSelect={onExampleSelect}
          />
          <label htmlFor="upload-input" className="measure-button">
            Upload
          </label>
          <input id="upload-input" type="file" onChange={onUpload}></input>

          <Stats {...data} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
