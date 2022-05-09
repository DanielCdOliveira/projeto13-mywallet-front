import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Container from "./../../Utilities/Container.jsx";
import { ThreeDots } from "react-loader-spinner";

function Register() {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    repPassword: "",
  });
  const [disabled, setDisbled] = useState(false);
  const navigate = useNavigate();

  function newRegister(e) {
    setDisbled(true);
    e.preventDefault();
    const URL =
      "https://project-mywallet.herokuapp.com/signup";
    const promise = axios.post(URL, data);
    promise.then((e) => {
      navigate("/");
    });
    promise.catch((e) => {
      setDisbled(false);
      alert("Não foi possível concluir a ação!");
      console.log(e);
    });
  }

  return (
    <Container>
        <h2>MyWallet</h2>
      <form onSubmit={newRegister}>
          <input
            disabled={disabled}
            type="text"
            name=""
            id="name-signup"
            placeholder="Nome"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            required
          />
        <input
          disabled={disabled}
          type="email"
          name=""
          id="email-signup"
          placeholder="E-mail"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
        <input
          disabled={disabled}
          type="password"
          name=""
          id="password-signup"
          placeholder="Senha"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          required
        />
       <input
          disabled={disabled}
          type="password"
          name=""
          id="rep-password"
          placeholder="Confirme a senha"
          onChange={(e) => setData({ ...data, repPassword: e.target.value })}
          required
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