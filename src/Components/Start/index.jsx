import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../Context/Auth";

import Main from "../../Utilities/Main";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

export default function Start() {
  const { user, setType } = useContext(AuthContext);

  function changeType(value) {
    if (value) setType(true);
    else setType(false);
  }

  return (
    <Main>
      <header>
        <h1>Olá, {user.name}</h1>
        <RiLogoutBoxRLine />
      </header>
      <ul></ul>
      <div className="buttons">
        <Link to="/transaction" onClick={() => changeType(true)}>
          <AiOutlinePlusCircle />
          <p>Nova entrada</p>
        </Link>
        <Link to="/transaction" onClick={() => changeType(false)}>
          <AiOutlineMinusCircle />
          <p>Nova saída</p>
        </Link>
      </div>
    </Main>
  );
}
