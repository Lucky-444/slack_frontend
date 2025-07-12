import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // Here you can manage authentication state, such as user info, token, etc.
  // This is where you would typically fetch user data or manage auth state

  //   const [user, setUser] = useState(null);
  //   const [token, setToken] = useState(null);

  const [auth, setAuth] = useState({
    user: null,
    token: null,
    isLoading : true,
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    // Check if user data exists in localStorage and set it to state
    if (storedUser) {
      setAuth({
        user: JSON.parse(storedUser),
        token: storedToken,
        isLoading : false,
      });
    }else {
      setAuth({
        user: null,
        token: null,
        isLoading : false,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth , setAuth }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
