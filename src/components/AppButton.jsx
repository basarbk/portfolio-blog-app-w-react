export function AppButton(props) {
  const { disabled, loading, children, variant } = props;
  return (
    <button
      className={`btn btn-${variant ?? "primary"}`}
      disabled={disabled || loading}
    >
      {loading && (
        <span
          className="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
      )}
      {children}
    </button>
  );
}
