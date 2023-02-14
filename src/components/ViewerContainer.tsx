import { ChangeEvent, ReactElement, useState } from 'react';
import { EXAMPLES } from '../models/example';
import '../styles/ViewerContainer.css'
import Viewer from './Viewer';


export default function ViewerContainer() {
  const [example, setExample] = useState("");

  const onSelect = (e: ChangeEvent<HTMLSelectElement>) => setExample(e.target.value);

  return (
    <div className="viewer-container">
      <Viewer imgSrc={example} data={EXAMPLES[example]} />
      <select className='example-select' onChange={onSelect}>
        <option value="">Choose example</option>
        <option value="example-1.png">Example 1</option>
        <option value="example-2.jpg">Example 2</option>
      </select>
    </div>
  );
}
