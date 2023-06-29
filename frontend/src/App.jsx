import { Login } from "./pages/Login";
import { Register } from "./pages/Register"

import {BrowserRouter, Route, Routes} from "react-router-dom";
import { ResetPassword } from "./pages/ResetPassword";

function App() {
  return (
<BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />}/>


        <Route path="/reset-password" element={<ResetPassword />}/>

        <Route path="/register" element={<Register />}/>



      </Routes>
    </BrowserRouter>
  )
}

export default App;
