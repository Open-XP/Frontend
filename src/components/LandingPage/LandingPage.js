import NavBar from "./NavBar/NavBar.js";
import Heros from "./Heros/Heros.js";
import OverLay from "./OverLay/Overlay.js";
import SecondSection from "./SecondSection/SecondSection.js";
import QuoteSection from "./QuoteSection/QuoteSection.js";
import DivisionalSection from "./DivisionalSection/DivisionalSection.js";
import CourseCard from "./CourseCard/CourseCard.js";
import CourseCardImg from "./CourseCardImg/CourseCardImg.js";
import CommunitySection from "./CommunitySection/CommunitySection.js";
import TestimonialSection from "./TestimonialSection/TestimonialSection.js";
import NewsletterSection from "./NewsletterSection/NewsletterSection.js";
import NewsletterSectionImg from "./NewsletterSectionImg/NewsletterSectionImg.js";
import Footer from "./Footer/Footer.js";
import FooterImg from "./FooterImg/FooterImg.js";

function LandingPage() {
  return (
    <div className="overflow-y-scroll no-scrollbar">
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
    </div>
  );
}

export default LandingPage;
