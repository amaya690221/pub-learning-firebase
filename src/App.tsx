// /src/App.tsx

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import UpdatePassword from "./components/UpdatePassword";
import SendReset from "./components/SendReset";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/updatePassword" element={<UpdatePassword />} />
        <Route path="/sendReset" element={<SendReset />} />
      </Routes>
    </>
  );
}

export default App;
