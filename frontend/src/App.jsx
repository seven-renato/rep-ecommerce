import { Login } from "./pages/Login";
import { Register } from "./pages/Register"

import {BrowserRouter, Route, Routes} from "react-router-dom";
 
function App() {
  return (
<BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>

        {/* <Route path="/reset-password" element={<ResetPassword />}/> */}


      </Routes>
    </BrowserRouter>
  )
}

export default App;
