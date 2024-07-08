import { useSignUp } from "./useSignUp";

export function SignUp() {
  const {
    apiProgress,
    disabled,
    onChangeEmail,
    onSubmit,
    successMessage,
    errorMessage,
    errors,
  } = useSignUp();

  return (
    <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
      <form className="card" onSubmit={onSubmit}>
        <div className="card-header text-center">
          <h1>Sign Up</h1>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              id="email"
              className="form-control"
              autoComplete="off"
              onChange={onChangeEmail}
            />
            <div className="small text-danger">{errors.email}</div>
          </div>
          {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <div className="text-center">
            <button
              className="btn btn-primary"
              disabled={disabled || apiProgress}
            >
              {apiProgress && (
                <span
                  className="spinner-border spinner-border-sm"
                  aria-hidden="true"
                ></span>
              )}
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
