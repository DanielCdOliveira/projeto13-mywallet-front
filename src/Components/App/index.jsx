import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "../LogIn"
import SignUp from "../SignUp"
import Start from "../Start"
import Transaction from "../Transaction"
import GlobalStyle from "../../assets/css/globalStyles";

function App() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Start />}></Route>
            <Route path="/cadastro" element={<Register />}></Route>
            <Route path="/habitos" element={<Habits />}></Route>
            <Route path="/hoje" element={<Today />}></Route>
            <Route path="/historico" element={<History />}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    );
  }
  
  export default App;