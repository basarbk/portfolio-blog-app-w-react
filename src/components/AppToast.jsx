import { useEffect, useState } from "react";

export function AppToast({ message }) {
  const [show, setShow] = useState();

  useEffect(() => {
    if (message) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div
      className="position-fixed toast-wrapper"
      style={{ opacity: message && show ? 1 : 0 }}
    >
      <div className="toast text-bg-danger border-0 show">
        <div className="toast-body">{message}</div>
      </div>
    </div>
  );
}
