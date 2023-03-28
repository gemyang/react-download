// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  downloadAndZip,
  downloadAndZipWithCallback,
} from 'src/api/download-zip';

import styles from './app.module.scss';

import '@avaya/neo-react/avaya-neo-react.css';

import { Button } from '@avaya/neo-react';
import { useCallback, useState } from 'react';

export function App() {
  const download2 = () => {
    const urls = ['https://picsum.photos/200/300', 'https://picsum.photos/200'];
    downloadAndZip(urls);
  };
  const [counter, setCounter] = useState(0);

  const cb = useCallback(
    (status: string) => {
      console.log({ status });
      setCounter((counter) => counter + 1);
    },
    [setCounter]
  );
  const total = 10;
  const downloadMany = () => {
    setCounter(0);
    const urls = [];
    for (let i = 0; i < total; i++) {
      urls.push('https://picsum.photos/200');
    }
    downloadAndZipWithCallback(urls, cb);
  };

  return (
    <div>
      <Button name="download2" onClick={download2}>
        Download 2 Images
      </Button>
      <br></br>
      <Button name="downloadMany" onClick={downloadMany}>
        Download many Images
      </Button>
      <p>
        {counter} of {total} downloaded
      </p>
      <a href="https://www.wavsource.com/snds_2020-10-01_3728627494378403/movie_stars/bogart/down_to_cases.wav">
        Play a wav file
      </a>
      <div>TODO: Download a wav file</div>
      <div>TODO: Download many wav files</div>
    </div>
  );
}

export default App;
