import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, HeartHandshake } from 'lucide-react';
import Brand from './Brand.jsx';
import { navigation } from '../data/catalog.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-about">
          <Brand />
          <p> <b>سرو لایف؛</b>
             همراه سالمندان و خانواده‌ها برای دسترسی آسان‌تر به کالاها، آموزش، مراقبت و خدمات تخصصی.</p>
          <div className="footer-foundation"><HeartHandshake size={18} /> بنیاد فرزانگان عمارت ماندگار دوران</div>
        </div>
        <div className="footer-links">
          <h3>دسترسی سریع</h3>
          {navigation.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
        </div>
        <div className="footer-links footer-contact">
          <h3>ارتباط با سرو لایف</h3>
          <p><Phone size={16} /> برای دریافت اطلاعات و هماهنگی، درخواست مشاوره ثبت کنید.</p>
          <p><MapPin size={16} /> اطلاعات نشانی و راه‌های تماس در نسخه نهایی تکمیل می‌شود.</p>
          <Link className="footer-contact-link" to="/services#contact-form"><Mail size={16} /> ثبت درخواست ارتباط</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Sarv Life — تمامی حقوق محفوظ است.</span>
        <span>طراحی‌شده برای زندگی مستقل‌تر و باکیفیت‌تر</span>
      </div>
    </footer>
  );
}
