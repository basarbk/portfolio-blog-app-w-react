export function AppAlert(props) {
  const { children, variant } = props;
  return (
    <>
      {children && (
        <div className={`alert alert-${variant ?? "success"}`} role="alert">
          {children}
        </div>
      )}
    </>
  );
}
