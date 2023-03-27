import * as BlueBirdPromise from 'bluebird';
import JsZip from 'jszip';
import FileSaver from 'file-saver';

const download = (url) => {
  return fetch(url).then((resp) => resp.blob());
};

const downloadByGroup = (urls, files_per_group = 5) => {
  return BlueBirdPromise.map(
    urls,
    async (url) => {
      return await download(url);
    },
    { concurrency: files_per_group }
  );
};

const exportZip = (blobs) => {
  const zip = JsZip();
  blobs.forEach((blob, i) => {
    zip.file(`file-${i}.jpeg`, blob);
  });
  zip.generateAsync({ type: 'blob' }).then((zipFile) => {
    const currentDate = new Date().getTime();
    const fileName = `combined-${currentDate}.zip`;
    return FileSaver.saveAs(zipFile, fileName);
  });
};

export const downloadAndZip = (urls) => {
  return downloadByGroup(urls, 5).then(exportZip);
};
