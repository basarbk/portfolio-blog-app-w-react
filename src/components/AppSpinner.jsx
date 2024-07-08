export function AppSpinner({ size = "small", full = false }) {
  const classes = `spinner-border ${
    size === "small" ? "spinner-border-sm" : ""
  }`;
  if (!full) {
    return <span className={classes} aria-hidden="true"></span>;
  }

  return (
    <div className="d-block border border-4 rounded-4 bg-white p-4 text-center">
      <span className={classes} aria-hidden="true"></span>
    </div>
  );
}
