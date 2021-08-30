export default function Checkbox({ className, text, ...rest }) {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} /> <span>{text}</span>
    </label>
  );
}
