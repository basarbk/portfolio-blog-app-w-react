import { AppSpinner } from "./AppSpinner";

export function AppButton(props) {
  const { disabled, loading, children, variant, type, onClick } = props;
  return (
    <button
      className={`btn btn-${variant ?? "primary"}`}
      disabled={disabled || loading}
      type={type}
      onClick={onClick}
    >
      {loading && <AppSpinner />}
      {children}
    </button>
  );
}
