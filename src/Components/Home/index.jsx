import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Context/Auth";
import axios from "axios";
import styled from "styled-components";
import Transactions from "./Transactions";

import Main from "../../Utilities/Main";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

export default function Home() {
  const { user, setType } = useContext(AuthContext);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  const [transactions, setTransactions] = useState({});
  const [text, setText] = useState();
  useEffect(() => {
    const promise = axios.get("http://localhost:5000/home", config);

    promise.then((response) => {
      console.log(response.data);
      setText("Não há registros de entrada ou saída");
      setTransactions(response.data);
    });
    promise.catch((response) => {
      console.log(response);
    });
  }, []);

  return (
    <Main>
      <header>
        <h1>Olá, {user.name}</h1>
        <RiLogoutBoxRLine />
      </header>
      <ul>
        {transactions.transactions?.length > 0 ? (
          transactions.transactions.map((item, index) => (
            <Transactions
              key={index}
              item={item}
              setTransactions={setTransactions}
            />
          ))
        ) : (
          <p>{text}</p>
        )}
        <Balance className="balance">
          <strong>SALDO</strong>
          <span
            className={`${transactions.balance > 0 ? "positive" : "negative"} `}
          >
            {transactions.balance < 0 ? transactions.balance*(-1):transactions.balance}
          </span>
        </Balance>
      </ul>
      <div className="buttons">
        <Link to="/transaction" onClick={() => setType(true)}>
          <AiOutlinePlusCircle />
          <p>Nova entrada</p>
        </Link>
        <Link to="/transaction" onClick={() => setType(false)}>
          <AiOutlineMinusCircle />
          <p>Nova saída</p>
        </Link>
      </div>
    </Main>
  );
}

const Balance = styled.div`
  position: absolute;
  bottom: 10px;
  left: 15px;
  display: flex;
  justify-content: space-between;
  width: 90%;
  span {
    font-size: 17px;
    line-height: 20px;
  }
  strong {
    font-size: 17px;
    line-height: 20px;
    font-weight: 700;
  }
  .positive {
    color: #03ac00;
  }
  .negative {
    color: #c70000;
  }
`;
