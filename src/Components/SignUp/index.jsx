import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Container from "./../../Utilities/Container.jsx";
import { ThreeDots } from "react-loader-spinner";

function Register() {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });
  const [disabled, setDisbled] = useState(false);
  const navigate = useNavigate();

  function newRegister(e) {
    // setDisbled(true);
    // e.preventDefault();
    // const URL =
    //   "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    // const promise = axios.post(URL, data);
    // promise.then((e) => {
    //   navigate("/");
    // });
    // promise.catch((e) => {
    //   setDisbled(false);
    //   alert("Não foi possível concluir a ação!");
    //   console.log(e.data);
    // });
  }

  return (
    <Container>
        <h2>MyWallet</h2>
      <form onSubmit={newRegister}>
          <input
            disabled={disabled}
            type="text"
            name=""
            id="name"
            placeholder="Nome"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        <input
          disabled={disabled}
          type="email"
          name=""
          id="email"
          placeholder="E-mail"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          disabled={disabled}
          type="password"
          name=""
          id="password"
          placeholder="Senha"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
       <input
          disabled={disabled}
          type="password"
          name=""
          id="password"
          placeholder="Confirme a senha"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button disabled={disabled} type="submit">
          {disabled ? (
            <ThreeDots color="#FFF" height={13} width={50} />
          ) : (
            "Cadastrar"
          )}
        </button>
      </form>
      <Link to={"/"}>
        <p>Já tem uma conta? Entre agora!</p>
      </Link>
    </Container>
  );
}

export default Register;