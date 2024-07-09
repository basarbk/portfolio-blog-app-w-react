import { useCallback, useState } from "react";
import { AuthContext } from "./authContext";

export function AuthProvider(props) {
  const [auth, setAuth] = useState({ id: 0 });

  const setLoggedIn = useCallback((data) => {
    setAuth(data);
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}
