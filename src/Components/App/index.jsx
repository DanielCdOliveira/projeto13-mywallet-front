import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "../LogIn";
import SignUp from "../SignUp";
import Start from "../Start";
import Transaction from "../Transaction";
import GlobalStyle from "../../assets/css/globalStyles";
import AuthProvider from "../../Context/Auth";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LogIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/home" element={<Start />}></Route>
          <Route path="/transaction/:type" element={<Transaction />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
