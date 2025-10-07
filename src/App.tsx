import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./assets/components/pages/LandingPage";
import LoginPage from "./assets/components/pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
