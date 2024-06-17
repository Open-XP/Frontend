import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import components
import LandingPage from "./components/LandingPage/LandingPage.js";
import LogInPage from "./Pages/Accounts/LogInPage.js";
import SignUpPage from "./Pages/Accounts/SignUpPage.js";
import PrivateRoute from "./Pages/DashBoard/PrivateRoute.js";
import DashBoard from "./Pages/DashBoard/DashBoard.js";
import LogInPage_ from "./Pages/Accounts/LogInPage_.js";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login_" element={<LogInPage_ />} />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <DashBoard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
