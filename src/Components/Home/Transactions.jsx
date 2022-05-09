import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Context/Auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Transactions({ item }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  function deleteTransaction(id) {
    console.log(id);
    console.log(config);
    const promise = axios({
      method: "delete",
      url: "http://localhost:5000/transaction",
      data: {
        idTransaction: id,
      },
      headers: { Authorization: `Bearer ${user.token}` },
    });
    promise.then((response) => {
      console.log(response.data);
      // atualizar pagina
      window.refresh();
    });
    promise.catch((response) => {
      console.log(response);
    });
  }

  function editTransaction(id){
    navigate(`/transaction/${id}`, {state:item})
  }
  return (
    <Li>
      <div>
        <span className="date">{item.date}</span>
        <span className="description" onClick={() => editTransaction(item._id)}>{item.description}</span>
      </div>
      <span className={`${item.type}`}>{item.value.replace(".", ",")}</span>
      <span className="delete" onClick={() => deleteTransaction(item._id)}>
        x
      </span>
    </Li>
  );
}

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 16px;
  line-height: 19px;
  padding-bottom: 15px;
  position: relative;
  .date {
    color: #c6c6c6;
  }
  .description {
    color: #000;
    padding-left: 8px;
  }
  .true {
    color: #26ac00;
    padding-right: 15px;
  }
  .false {
    color: #c70000;
    padding-right: 15px;
  }
  .delete {
    position: absolute;
    right: 0;
    color: #c6c6c6;
  }
`;
