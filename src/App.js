import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import components
import LandingPage from "./components/LandingPage/LandingPage.js";
import LogInPage from "./Pages/Accounts/LogInPage.js";
import SignUpPage from "./Pages/Accounts/SignUpPage.js";
import PrivateRoute from "./Pages/DashBoard/PrivateRoute.js";
import DashBoard from "./Pages/DashBoard/DashBoard.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <DashBoard />
              </PrivateRoute>
            }
          />
          {/* <Route path="/mock-test" element={<div>Mock Test Page</div>} />
          <Route path="/dashboard/*" element={<DashBoard />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
