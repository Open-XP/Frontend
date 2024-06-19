import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import components
import LandingPage from "./components/LandingPage/LandingPage.js";
import SignUpPage from "./Pages/Accounts/SignUpPage.js";
import PrivateRoute from "./Pages/DashBoard/PrivateRoute.js";
import DashBoard from "./Pages/DashBoard/DashBoard.js";
import LogInPage from "./Pages/Accounts/LogInPage.js";
import PasswordResetPage from "./Pages/Accounts/PasswordResetPage.js";
import ConfirmPasswordResetPage from "./Pages/Accounts/ConfirmPasswordResetPage.js";
import "./App.css";
import PasswordResetSent from "./Pages/PasswordReset/PasswordResetSent.js";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <DashBoard />
              </PrivateRoute>
            }
          />
          <Route path="/password-reset" element={<PasswordResetPage />} />
          <Route path="/password-reset-sent" element={<PasswordResetSent />} />
          <Route
            path="/confirm-password-reset/:uidb64/:token"
            element={<ConfirmPasswordResetPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
