import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 25px 5%;
  height: 100%;
  align-self: center;
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }
  header svg {
    font-size: 30px;
    color: #fff;
  }
  ul {
    margin: 22px 0 13px 0;
    background-color: #fff;
    width: 100%;
    height: 65vh;
    border-radius: 5px;
    padding: 23px 12px 10px 12px;
    position: relative;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  a {
    width: calc(50% - 7.5px);
    height: 114px;
    background-color: #a228d6;
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
  }
  a svg{
      font-size: 22px;
  }
  a p{
    width: 30px;
  }
`;
export default Main;
