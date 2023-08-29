import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageDefault from "./pages/PageDefault"
import Advertising from "./components/Advertising"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<PageDefault/>}>
              <Route index element={<Advertising />}/>
              <Route path="sign-up" element={<SignUp />} />
              <Route path="login" element={<Login />} />
              <Route path="home" element={<Home />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
