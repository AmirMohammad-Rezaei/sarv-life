import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Truck, GraduationCap, Headset, BookOpen, ShoppingBag, HeartHandshake, Leaf, Clock3 } from 'lucide-react';
import { ecosystem, quickLinks, serviceItems, articles } from '../data/catalog.js';
import SectionHeading from '../components/SectionHeading.jsx';
import CategoryCard from '../components/CategoryCard.jsx';
import ArticleCard from '../components/ArticleCard.jsx';
import ContactCTA from '../components/ContactCTA.jsx';

const trustItems = [
  { icon: Headset, title: 'پشتیبانی و مشاوره', text: 'همراهی در انتخاب خدمت' },
  { icon: Truck, title: 'حمل‌ونقل ویژه', text: 'ون مجهز برای ویلچر' },
  { icon: ShieldCheck, title: 'خدمات تخصصی', text: 'مراقبت در منزل و مراکز' },
  { icon: GraduationCap, title: 'آموزش و توانمندسازی', text: 'خانواده و سالمندیاری' },
  { icon: BookOpen, title: 'پایگاه دانش', text: 'اطلاعات و مطالب مفید' },
  { icon: ShoppingBag, title: 'فروشگاه محصولات', text: 'تجهیزات و ملزومات سالمندی' }
];

export default function HomePage() {
  return (
    <main className="page-wrap home-page">
      <section className="home-hero">
        <img src="/images/hero-care.jpg" alt="همراهی مراقب با سالمند" />
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <span className="eyebrow">باشگاه مشتریان بنیاد فرزانگان عمارت ماندگار دوران</span>
          <h1>سرو لایف؛<br /><em>همراه همیشگی شما در مسیر زندگی</em></h1>
          <p>ارائه‌دهنده جامع خدمات و محصولات ویژه سالمندان؛ برای زندگی مستقل‌تر، ایمن‌تر و باکیفیت‌تر.</p>
          <div className="hero-actions">
            <Link className="button button--primary" to="/education#join">عضویت در باشگاه مشتریان <ArrowLeft size={17} /></Link>
            <Link className="button button--outline" to="/services">آشنایی با خدمات</Link>
          </div>
        </div>
        <div className="hero-leaf"><Leaf size={34} /></div>
      </section>

      <section className="trust-strip" aria-label="مزیت‌های سرو لایف">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return <div className="trust-item" key={item.title}><span><Icon size={24} /></span><div><strong>{item.title}</strong><small>{item.text}</small></div></div>;
        })}
      </section>

      <section className="section-block quick-section">
        <SectionHeading eyebrow="دسترسی آسان" title="خدمات سرو لایف در یک نگاه" subtitle="برای شروع، بخش موردنیازتان را انتخاب کنید." />
        <div className="quick-grid">
          {quickLinks.map((item) => <CategoryCard key={item.title} item={item} compact />)}
        </div>
      </section>

      <section className="section-block ecosystem-section">
        <div className="ecosystem-intro">
          <div><span className="eyebrow">یک باشگاه، چندین مسیر همراهی</span><h2>اکوسیستم جامع خدمات سالمندی</h2><p>از انتخاب یک وسیله کاربردی تا دریافت آموزش، مراقبت تخصصی و حضور در مراکز؛ همه در یک نقطه.</p></div>
          <span className="ecosystem-decoration"><HeartHandshake size={58} strokeWidth={1.2} /></span>
        </div>
        <div className="ecosystem-grid">
          {ecosystem.map((item, index) => <CategoryCard key={item.to} item={{ ...item, description: item.description }} numbered={index + 1} />)}
        </div>
      </section>

      <section className="section-block home-split-section">
        <div className="split-photo-card">
          <img src="/images/transport-van.jpg" alt="ون سبز مخصوص جابه‌جایی سالمندان با ویلچر" />
          <div><span className="eyebrow">سفر امن و آسان</span><h2>حمل‌ونقل ویژه سالمندان</h2><p>ون مجهز به سامانه بالابر ویلچر برای سوار و پیاده شدن آسان‌تر.</p><Link to="/section/transport" className="button button--light">جزئیات سرویس <ArrowLeft size={16} /></Link></div>
        </div>
        <div className="split-info-card">
          <span className="eyebrow">یادگیری و توانمندسازی</span><h2>دانش و مهارت، برای مراقبت بهتر</h2><p>دوره‌های آموزشی برای خانواده‌ها و علاقه‌مندان به فعالیت حرفه‌ای در حوزه سالمندی.</p>
          <div className="mini-benefit"><span><GraduationCap size={22} /></span><div><strong>آموزش خانواده</strong><small>افزایش آگاهی و اطمینان در مراقبت</small></div></div>
          <div className="mini-benefit"><span><ShieldCheck size={22} /></span><div><strong>مسیر مهارتی سالمندیاری</strong><small>آموزش، ارزیابی و گواهی در چارچوب مجوزها</small></div></div>
          <Link className="text-link" to="/education">مشاهده دوره‌ها <ArrowLeft size={16} /></Link>
        </div>
      </section>

      <section className="section-block article-preview-section">
        <SectionHeading eyebrow="دانش برای زندگی بهتر" title="تازه‌ترین راهنماها و مطالب" subtitle="محتوای کاربردی برای سالمندان، خانواده‌ها و مراقبان." link="/knowledge" />
        <div className="article-grid">{articles.map((article) => <ArticleCard key={article.id} article={article} />)}</div>
      </section>

      <section className="section-block values-band">
        <div><span className="eyebrow">نگاه سرو لایف</span><h2>احترام به انتخاب، حفظ استقلال، کیفیت زندگی</h2><p>خدمات و محصولات باید با نیاز واقعی هر سالمند و با مشارکت خانواده انتخاب شوند.</p></div>
        <div className="values-points"><span><ShieldCheck size={20} /> توجه به ایمنی</span><span><HeartHandshake size={20} /> همراهی انسانی</span><span><Clock3 size={20} /> دسترسی آسان</span></div>
      </section>
      <ContactCTA title="برای شروع از کجا باید اقدام کنم؟" text="نیاز خود یا خانواده‌تان را توضیح دهید تا مسیر مناسب را پیدا کنید." />
    </main>
  );
}
