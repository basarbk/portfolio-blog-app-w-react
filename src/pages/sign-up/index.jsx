export function SignUp() {
  return (
    <form>
      <h1>Sign Up</h1>
      <label htmlFor="email">E-mail</label>
      <input id="email" autoComplete="off" />
      <button disabled>Sign Up</button>
    </form>
  );
}
