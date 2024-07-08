export function AppInput(props) {
  const { id, label, onChange, type, help } = props;
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        id={id}
        className="form-control"
        autoComplete="off"
        onChange={onChange}
        type={type}
      />
      <div className="small text-danger">{help}</div>
    </div>
  );
}
