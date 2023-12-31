import s from "./style.module.css";

export function ImageListItem({ img }) {
  return <img src={img.download_url} className={s.img} />;
}
