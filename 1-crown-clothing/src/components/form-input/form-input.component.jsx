import "./form-input.styles.scss";
export default function FormInput({ label, inputOptions }) {
  return (
    <div className="group">
      <input type="text" {...inputOptions} className="form-input" />
      <label
        className={`form-input-label ${
          inputOptions.value.length ? "shrink" : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
}
