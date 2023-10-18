import classes from "./input.module.css";

interface InputProps {
  label?: string;
  name: string;
  placeholder: string;
  handleChange: (value: string) => void;
}

export const Input = ({
  label = "",
  name,
  placeholder,
  handleChange,
}: InputProps) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type="input"
      name={name}
      className={classes.input}
      placeholder={placeholder}
      onChange={(event) => {
        console.log("event.target.value :>> ", event.target.value);
        handleChange(event.target.value);
      }}
    />
  </div>
);
