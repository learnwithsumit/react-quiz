export default function Checkbox({ text, ...rest }) {
  return (
    <label>
      <input type="checkbox" {...rest} /> <span>{text}</span>
    </label>
  );
}
