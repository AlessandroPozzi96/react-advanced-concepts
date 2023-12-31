import { ImageListItem } from "../ImageListItem/ImageListItem";
import s from "./style.module.css";

export function ImageList({ imgList }) {
  return (
    <div>
      {imgList.map((img) => {
        return (
          <div key={img.id}>
            <ImageListItem img={img} />
          </div>
        );
      })}
    </div>
  );
}
