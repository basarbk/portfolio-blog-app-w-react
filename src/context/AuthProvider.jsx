import { useState } from "react";
import { AuthContext } from "./authContext";

export function AuthProvider(props) {
  const [auth, setAuth] = useState({ id: 0 });
  return (
    <AuthContext.Provider value={{ auth }}>
      {props.children}
    </AuthContext.Provider>
  );
}
