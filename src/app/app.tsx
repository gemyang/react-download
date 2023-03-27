// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { downloadAndZip } from 'src/api/download-zip';

import styles from './app.module.scss';

import { Button } from '@avaya/neo-react';
export function App() {
  const download2 = () => {
    const urls = ['https://picsum.photos/200/300', 'https://picsum.photos/200'];
    downloadAndZip(urls);
  }
  const download100 = () => {
    const urls = [];
    for(let i=0; i<100; i++){
      urls.push("https://picsum.photos/200");
    }
    downloadAndZip(urls);
  }
  
  return (
    <div>
      <Button name='zip2' onClick={download2}>Download 2 Images</Button>
      <br></br>
      <Button name='zip100' onClick={download100}>Download 100 Images</Button>
    </div>


  );
}

export default App;
