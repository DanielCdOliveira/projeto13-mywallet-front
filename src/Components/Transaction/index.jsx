import { useState, useContext } from "react";
import { AuthContext } from "../../Context/Auth";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Transaction() {
  const { user, type } = useContext(AuthContext);
  const [data, setData] = useState({ value: "", description: "" });
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };  
  const navigate = useNavigate()
  console.log(user);
  console.log(type);
  function setTransaction(e) {
    e.preventDefault()
    const URL = "http://localhost:5000/transaction";
    data.type = type;
    if (type) {
      const promise = axios.post(URL, data, config);
      promise.then(()=>{
          navigate("/home")
      })
      //criar mensagem de erro
    }
  }

  if (type) {
    return (
      <MainTransaction>
        <header>
          <h1>Nova entrada</h1>
        </header>
        {/* criar input q aceita numeros float */}
        <form onSubmit={setTransaction}>
          <input
            type="number"
            name="value"
            id="value"
            placeholder="Valor"
            onChange={(e) => setData({ ...data, value: e.target.value })}
          />

          <input
            type="text"
            name="description"
            id="description"
            placeholder="Descrição"
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
          <button type="submit">Salvar entrada</button>
        </form>
      </MainTransaction>
    );
  } else {
    return (
      <MainTransaction>
        <header>
          <h1>Nova saída</h1>
        </header>
        <form onSubmit={setTransaction}>
          <input type="number" name="value" id="value" placeholder="Valor" />
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Descrição"
          />
          <button type="submit">Salvar saída</button>
        </form>
      </MainTransaction>
    );
  }
}

const MainTransaction = styled.main`
  display: flex;
  flex-direction: column;
  margin: 25px 5%;
  height: 100%;
  align-self: center;
  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }
  input {
    width: 100%;
    height: 58px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 13px;
    font-size: 20px;
    line-height: 25px;
    padding-left: 11px;
  }
  input:focus {
    border: 2px solid #fff;
    outline: 0;
  }
  input:disabled {
    background: #f2f2f2;
    border: 1px solid #d5d5d5;
  }
  button {
    width: 100%;
    height: 46px;
    font-size: 20px;
    line-height: 26px;
    font-weight: 700;
    text-align: center;
    color: #ffffff;
    background-color: #a228d6;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 36px;
  }
  button:disabled {
    background-color: #d779ff;
  }
`;
