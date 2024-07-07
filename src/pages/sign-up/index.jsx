import { useState } from "react";

export function SignUp() {
  const [email, setEmail] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
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
          <div className="text-center">
            <button className="btn btn-primary" disabled={!email}>
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
