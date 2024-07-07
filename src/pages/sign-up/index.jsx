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
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        autoComplete="off"
        onChange={(event) => setEmail(event.target.value)}
      />
      <button disabled={!email}>Sign Up</button>
    </form>
  );
}
