import { useState } from "react";

export function SignUp() {
  const [email, setEmail] = useState();
  const [apiProgress, setApiProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    setApiProgress(true);
    setSuccessMessage();
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const body = await response.json();
    setSuccessMessage(body.message);
    setApiProgress(false);
  };

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
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}
          <div className="text-center">
            <button
              className="btn btn-primary"
              disabled={!email || apiProgress}
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
