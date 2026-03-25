import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AgeGate from './components/AgeGate.jsx';
import AnnouncementBar from './components/AnnouncementBar.jsx';
import Navbar from './components/Navbar.jsx';
import FloatingCTA from './components/FloatingCTA.jsx';
import MobileStickyBar from './components/MobileStickyBar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import DealsPage from './pages/DealsPage.jsx';
import LoyaltyPage from './pages/LoyaltyPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import VisitPage from './pages/VisitPage.jsx';
import ReviewsPage from './pages/ReviewsPage.jsx';
import BlogPage from './pages/BlogPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <AgeGate />
      <AnnouncementBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/loyalty" element={<LoyaltyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/visit" element={<VisitPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingCTA />
      <MobileStickyBar />
    </BrowserRouter>
  );
}
