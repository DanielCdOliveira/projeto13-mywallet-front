import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../Context/Auth";

import Container from "../../Utilities/Container";
import { ThreeDots } from "react-loader-spinner";


export default function LogIn() {
  const { logIn, user } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  function login(e) {
    setDisabled(true);
    e.preventDefault();
    logIn(data, setDisabled);
  }



  return (
    <Container>
      <h2>MyWallet</h2>
      <form onSubmit={login}>
        <input
          type="email"
          name="email"
          id="email  "
          placeholder="E-mail"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button disabled={disabled} type="submit">
          {disabled ? (
            <ThreeDots color="#FFF" height={13} width={50} />
          ) : (
            "Entrar"
          )}
        </button>
      </form>
      <Link to={"/signup"}>
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Container>
  );
}
