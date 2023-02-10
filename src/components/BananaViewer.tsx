import { ChangeEvent, useState } from 'react';
import { Example } from '../models/example';
import '../styles/BananaViewer.css'

export default function BananaViewer() {
  const [example, setExample] = useState("");

  const onSelect = (e: ChangeEvent<HTMLSelectElement>) => setExample(e.target.value);

  return (
    <div className="viewer-container">

      <div className="viewer-card">
        { example != "" && <img src={example} alt="An image with detected objects" />}
      </div>
      <select className='example-select' onChange={onSelect}>
        <option value="">Choose example</option>
        <option value="example-1.png">Example 1</option>
        <option value="example-2.jpg">Example 2</option>
      </select>
    </div>
  );
}
