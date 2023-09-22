import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageDefault from "./pages/PageDefault";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Index from "./pages/Index";
import Home from "./pages/Home";
import AddDonghua from "./pages/EditDonghua";
import Profile from "./pages/Profile";
import Donghua from "./pages/Donghua";
import { NotFound } from "./pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<PageDefault/>}>
              <Route index element={<Index />}/>
              <Route path="sign-up" element={<SignUp />} />
              <Route path="login" element={<Login />} />
              <Route path="home" element={<Home />}/>
              <Route path="donghua/:name" element={<Donghua />} />
              <Route path="add-donghua" element={<AddDonghua />}/>
              <Route path="perfil" element={<Profile />} />
              <Route path="editar/:name" element={<AddDonghua />} />
              <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
