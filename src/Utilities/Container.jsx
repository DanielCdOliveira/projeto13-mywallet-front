import styled from "styled-components";

const Container = styled.main`
font-family: 'Raleway', sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    margin-top: 159px ;
    font-family: "Saira Stencil One", cursive;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #ffffff;
  }
  h2{
    margin-top: 95px ;
    font-family: "Saira Stencil One", cursive;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #ffffff;
  }
  form {
    width: 80%;
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
    font-size: 21px;
    line-height: 26px;
    font-weight: 700;
    text-align: center;
    color: #ffffff;
    background-color: #A228D6;
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
  p {
    margin-top: 25px;
    color: #fff;
    font-weight: 700;
  }
  a {
    text-decoration: none;
  }
  ::placeholder {
    color: #d4d4d4;
  }
`;

export default Container;
