import { Login } from "./pages/Login";
import { Register } from "./pages/Register"
import { ResetPassword } from "./pages/ResetPassword";
import { Profile } from "./pages/Profile";

import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {

  const user = useSelector((state) => state.user.currentUser);

  return (
    <BrowserRouter>
          <Routes>

            <Route path="/profile" element={user ? <Profile/> : <Navigate to="/" />} />
            <Route path="/login" element={user ? <Navigate to="/profile" />  : <Login />}/>
            <Route path="/register" element={user ? <Navigate to="/profile" />  : <Register />}/>
            <Route path="/reset-password" element={user ? <Navigate to="/profile" />  : <ResetPassword />}/>

          </Routes>
        </BrowserRouter>
  )
}

export default App;
