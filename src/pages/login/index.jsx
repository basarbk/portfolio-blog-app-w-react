import { AppAlert, AppButton, AppInput } from "../../components";
import { useLogin } from "./useLogin";

export function Login() {
  const {
    apiProgress,
    disabled,
    onChangeEmail,
    onSubmit,
    successMessage,
    errorMessage,
    errors,
  } = useLogin();

  return (
    <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
      <form className="card" onSubmit={onSubmit} noValidate>
        <div className="card-header text-center">
          <h1>Login</h1>
        </div>
        <div className="card-body">
          <AppInput
            id="email"
            label="E-mail"
            onChange={onChangeEmail}
            type="email"
            help={errors.email}
          />
          <AppAlert>{successMessage}</AppAlert>
          <AppAlert variant="danger">{errorMessage}</AppAlert>
          <div className="text-center">
            <AppButton disabled={disabled} loading={apiProgress}>
              Login
            </AppButton>
          </div>
        </div>
      </form>
    </div>
  );
}
