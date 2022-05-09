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
  const navigate = useNavigate();
  const { setType } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("user"));

  const [transactions, setTransactions] = useState({});
  const [text, setText] = useState();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
    const promise = axios.get("https://git.heroku.com/project-mywallet.git/home", config);

    promise.then((response) => {
      setText("Não há registros de entrada ou saída");
      setTransactions(response.data);
    });
    promise.catch((response) => {
      console.log(response);
    });
  }, []);
  function logOut() {
    localStorage.removeItem("user");
    navigate("/");
  }
  return (
    <Main>
      <header>
        <h1>Olá, {user.name}</h1>
        <RiLogoutBoxRLine onClick={logOut} />
      </header>
      <section>
        {transactions.transactions?.length > 0 ? (
          <ul>
            {transactions.transactions.map((item, index) => (
              <Transactions
                key={index}
                item={item}
                setTransactions={setTransactions}
              />
            ))}
            <Balance className="balance">
              <strong>SALDO</strong>
              <span
                className={`${
                  transactions.balance >= 0 ? "positive" : "negative"
                } `}
              >
                {transactions.balance < 0
                  ? (transactions.balance * -1).toString().replace(".", ",")
                  : transactions.balance.replace(".", ",")}
              </span>
            </Balance>
          </ul>
        ) : (
          <p className="empty">{text}</p>
        )}
      </section>

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
  span {
    font-size: 17px;
    line-height: 20px;
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
  strong {
    font-size: 17px;
    line-height: 20px;
    font-weight: 700;
    position: absolute;
    bottom: 10px;
    left: 15px;
  }
  .positive {
    color: #03ac00;
  }
  .negative {
    color: #c70000;
  }
`;
