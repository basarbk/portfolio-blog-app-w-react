import { AppAlert, AppSpinner } from "../../components";
import { useCallbackData } from "./useCallbackData";

export function Callback() {
  const { status, message } = useCallbackData();

  return (
    <div>
      {status === "loading" ? (
        <AppSpinner size="regular" full />
      ) : (
        <AppAlert variant={status === "fail" ? "danger" : "success"}>
          {message}
        </AppAlert>
      )}
    </div>
  );
}
