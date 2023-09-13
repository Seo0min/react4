import { BrowserRouter, Routes, Route } from "react-router-dom";
import JoinPage from "../pages/JoinPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="join" element={<JoinPage />} />
        <Route path="main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;