import { saveAs } from "file-saver";
import "./imageListItem.css";

export function ImageListItem({ img }) {
  async function downloadImage(e) {
    const resp = await fetch(img.download_url);
    const blob = await resp.blob();
    saveAs(blob, img.author + "_" + img.id);
  }

  return (
    <div className="card">
      <a href={img.url}>
        <img src={img.download_url} className="img" alt="test" />
      </a>
      <div className="card_banner">
        <img src={img.download_url} className="card_thumb" alt="test" />
        <div className="card_text">
          <h3 className="card_title">{img.author}</h3>
          <div className="card_status">
            Original size: {img.height}x{img.width}
          </div>
          <button onClick={downloadImage}>Download</button>
        </div>
      </div>
    </div>
  );
}
