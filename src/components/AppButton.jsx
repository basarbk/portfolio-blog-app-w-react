import { AppSpinner } from "./AppSpinner";

export function AppButton(props) {
  const { disabled, loading, children, variant, type } = props;
  return (
    <button
      className={`btn btn-${variant ?? "primary"}`}
      disabled={disabled || loading}
      type={type}
    >
      {loading && <AppSpinner />}
      {children}
    </button>
  );
}
