import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
  return (
    <>
      <h1>Login to your account</h1>

      <div className="column">
        <Illustration />
        <Form className={`${classes.login}`}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <Button>Submit Now</Button>

          <div className="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
