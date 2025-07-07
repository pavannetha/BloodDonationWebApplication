import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import RequestForm from "./Pages/RequestForm";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />}></Route>
     <Route path="/login"element={<Login></Login>}></Route>
     <Route path="/signup"element={<SignUp></SignUp>}></Route>
     <Route path="/request" element={<RequestForm></RequestForm>}></Route>
    </Routes>
  );
}

export default App;
