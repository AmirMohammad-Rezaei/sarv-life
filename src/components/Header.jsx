import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, UserRound, Menu, X, Phone, ArrowLeft } from 'lucide-react';
import Brand from './Brand.jsx';
import { navigation } from '../data/catalog.js';
import { useSite } from '../context/SiteContext.jsx';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { cartCount, setCartOpen } = useSite();

  const submitSearch = (event) => {
    event.preventDefault();
    navigate(`/shop${search.trim() ? `?q=${encodeURIComponent(search.trim())}` : ''}`);
    setMobileOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-shell">
        <div className="header-top">
          <Brand />
          <form className="header-search" onSubmit={submitSearch} role="search">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="جستجو در سرو لایف..."
              aria-label="جستجو در سرو لایف"
            />
            <button type="submit" aria-label="جستجو"><Search size={18} /></button>
          </form>
          <div className="header-actions">
            <button className="header-action login-action" onClick={() => navigate('/education#join')}>
              <UserRound size={17} /> <span>ورود / ثبت‌نام</span>
            </button>
            <button className="header-action cart-action" onClick={() => setCartOpen(true)} aria-label="نمایش فهرست درخواست">
              <ShoppingCart size={19} /><span className="cart-count">{cartCount}</span>
            </button>
            <button className="mobile-menu-button" onClick={() => setMobileOpen((v) => !v)} aria-label={mobileOpen ? 'بستن منو' : 'باز کردن منو'}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        <div className="header-bottom">
          <nav className={`main-nav ${mobileOpen ? 'main-nav--open' : ''}`} aria-label="منوی اصلی">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setMobileOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link className="support-pill" to="/services#contact-form">
            <Phone size={15} /> پشتیبانی و مشاوره <ArrowLeft size={14} />
          </Link>
        </div>
      </div>
    </header>
  );
}
