import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
// Import components
import NavBar from "./components/NavBar/NavBar.js";
import Heros from "./components/Heros/Heros.js";
import OverLay from "./components/OverLay/Overlay.js";
import SecondSection from "./components/SecondSection/SecondSection.js";
import QuoteSection from "./components/QuoteSection/QuoteSection.js";
import DivisionalSection from "./components/DivisionalSection/DivisionalSection.js";
import CourseCard from "./components/CourseCard/CourseCard.js";
import CourseCardImg from "./components/CourseCardImg/CourseCardImg.js";
import CommunitySection from "./components/CommunitySection/CommunitySection.js";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection.js";
import NewsletterSection from "./components/NewsletterSection/NewsletterSection.js";
import NewsletterSectionImg from "./components/NewsletterSectionImg/NewsletterSectionImg.js";
import Footer from "./components/Footer/Footer.js";
import FooterImg from "./components/FooterImg/FooterImg.js";
import LogInPage from "./Pages/Accounts/LogInPage.js";
import { Provider } from "react-redux";
import store from "./Store.js";
import SignUpPage from "./Pages/Accounts/SignUpPage.js";
import PrivateRoute from "./Pages/DashBoard/PrivateRoute.js";
import Dashboard from "./Pages/DashBoard/DashBoard.js";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <NavBar />
                  <Heros />
                  <OverLay />
                  <SecondSection />
                  <QuoteSection />
                  <DivisionalSection />
                  <CourseCardImg />
                  <CourseCard />
                  <CommunitySection />
                  <TestimonialSection />
                  <NewsletterSectionImg />
                  <NewsletterSection />
                  <FooterImg />
                  <Footer />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route path="/login" Component={LogInPage} />
            <Route path="/signup" Component={SignUpPage} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
