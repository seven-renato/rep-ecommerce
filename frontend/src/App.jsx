import { Login } from "./pages/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { ResetPassword } from "./pages/ResetPassword";

function App() {
  return (
<BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />}/>
        {/* <Route path="/register" element={<Register />}/> */}
        <Route path="/reset-password" element={<ResetPassword />}/>


      </Routes>
    </BrowserRouter>
  )
}

export default App;