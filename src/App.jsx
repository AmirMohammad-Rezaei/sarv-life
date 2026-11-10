import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import Toast from './components/Toast.jsx';
import HomePage from './pages/HomePage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import KnowledgePage from './pages/KnowledgePage.jsx';
import EducationPage from './pages/EducationPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import CentersPage from './pages/CentersPage.jsx';
import CategoryDetailPage from './pages/CategoryDetailPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function Layout() {
  return <><Header /><Outlet /><Footer /><CartDrawer /><Toast /></>;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/knowledge" element={<KnowledgePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/centers" element={<CentersPage />} />
          <Route path="/section/:slug" element={<CategoryDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
