import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import PageDefault from "./pages/PageDefault"
import Advertising from "./components/Advertising"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Home from "./pages/Home"
import AddDonghua from "./pages/EditDonghua"
import Profile from "./pages/Profile"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<PageDefault/>}>
              <Route index element={<Advertising />}/>
              <Route path="sign-up" element={<SignUp />} />
              <Route path="login" element={<Login />} />
              <Route path="home" element={<Home />}/>
              <Route path="add-donghua" element={<AddDonghua />}/>
              <Route path="perfil" element={<Profile />} />
              <Route path="editar-donghua/:name" element={<AddDonghua />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
