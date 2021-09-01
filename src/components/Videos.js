import { Link } from "react-router-dom";
import classes from "../styles/Videos.module.css";
import Video from "./Video";

export default function Videos() {
  return (
    <div className={classes.videos}>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
    </div>
  );
}
