import { useState } from "react";

import axios from "axios";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

export default function Transaction() {
  const transaction = useLocation().state;
  const user = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState({
    value: transaction.value,
    description: transaction.description,
  });

  const navigate = useNavigate();

  function setTransaction(e) {
    e.preventDefault();
    const promise = axios({
      method: "put",
      url: `http://localhost:5000/transaction/${transaction._id}`,
      data: {
        data,
      },
      headers: { Authorization: `Bearer ${user.token}` },
    });
    promise.then(() => {
      navigate("/home");
    });
    promise.catch((e) => {
      console.log(e);
    });
  }

  if (transaction.type) {
    return (
      <MainTransaction>
        <header>
          <h1>Editar entrada</h1>
        </header>
        {/* criar input q aceita numeros float */}
        <form onSubmit={setTransaction}>
          <input
            type="number"
            name="value"
            id="value"
            min={1}
            step="any"
            placeholder="Valor"
            value={data.value}
            onChange={(e) => setData({ ...data, value: e.target.value })}
            required
          />

          <input
            type="text"
            name="description"
            id="description"
            placeholder="Descrição"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            required
          />
          <button type="submit">Atualizar entrada</button>
        </form>
      </MainTransaction>
    );
  } else {
    return (
      <MainTransaction>
        <header>
          <h1>Editar saída</h1>
        </header>
        <form onSubmit={setTransaction}>
          <input
            type="number"
            min={1}
            step="any"
            name="value"
            id="value"
            value={data.value}
            placeholder="Valor"
            onChange={(e) => setData({ ...data, value: e.target.value })}
            required
          />
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Descrição"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            required
          />
          <button type="submit">Atualizar saída</button>
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
