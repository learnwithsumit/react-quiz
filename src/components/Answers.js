import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="Test answer" />
    </div>
  );
}
