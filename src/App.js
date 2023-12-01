import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import SignUpLayout from "./Pages/SignUpLayout.js";
import AddsPage from "./Pages/AddsPage.js";
import LoginLayout from "./Pages/LoginLayout.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginLayout />} />
          <Route path="signup" element={<SignUpLayout />}></Route>
          <Route path="login" element={<LoginLayout />}></Route>
          <Route path="adds" element={<AddsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
