import { Link } from "react-router-dom";
import { useState } from "react";

import Container from "../../Utilities/Container";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
export default function LogIn() {
  const [disabled, setDisbled] = useState(false);

  return (
    <Container>
      <h2>MyWallet</h2>
      <form action="">
        <input type="email" name="email" id="email  " placeholder="E-mail"/>
        <input type="password" name="password" id="password"  placeholder="Senha"/>
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
