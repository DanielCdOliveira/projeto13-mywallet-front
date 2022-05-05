import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({ token: "" });
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  const navigate = useNavigate();

  function logIn(data, setDisabled) {
    const URL = "http://localhost:5000/";

    const promise = axios.post(URL, data);
    promise.then((response) => {
        setDisabled(false);
        console.log(response);
      setUser({
          ...response.data
      });
      
    //   navigate("/home");
    });
    promise.catch((e) => {
      setDisabled(false);
      alert("Não foi possível concluir a ação!");
      console.log(e);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        logIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
