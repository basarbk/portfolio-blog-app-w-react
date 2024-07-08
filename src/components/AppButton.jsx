import { AppSpinner } from "./AppSpinner";

export function AppButton(props) {
  const { disabled, loading, children, variant } = props;
  return (
    <button
      className={`btn btn-${variant ?? "primary"}`}
      disabled={disabled || loading}
    >
      {loading && <AppSpinner />}
      {children}
    </button>
  );
}
