import { useCallback, useEffect, useState } from "react";
import { AuthContext } from "./authContext";

export function AuthProvider(props) {
  let initial = { id: 0 };
  const inStorage = localStorage.getItem("auth");
  if (inStorage) {
    try {
      initial = JSON.parse(inStorage);
    } catch {
      /* empty */
    }
  }
  const [auth, setAuth] = useState(initial);

  const setLoggedIn = useCallback((data) => {
    setAuth(data);
  }, []);

  const setLoggedOut = useCallback(() => {
    setAuth({ id: 0 });
  }, []);

  const userUpdated = useCallback((name, image) => {
    setAuth((previousAuth) => {
      return {
        ...previousAuth,
        name,
        image,
      };
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{ auth, setLoggedIn, setLoggedOut, userUpdated }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
