import classes from "../styles/Videos.module.css";
import Video from "./Video";

export default function Videos() {
  return (
    <div className={classes.videos}>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
}
