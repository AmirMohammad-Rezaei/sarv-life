import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronLeft, Home, Headset } from 'lucide-react';
import { sectionDetails, serviceItems, centerItems, knowledgeTopics, ecosystem } from '../data/catalog.js';
import PageHero from '../components/PageHero.jsx';
import ContactCTA from '../components/ContactCTA.jsx';
import CategoryCard from '../components/CategoryCard.jsx';

const IMG = `${import.meta.env.BASE_URL}images/`;

const pageImages = {
  transport: '/images/transport-van.jpg',
  'home-care': '/images/hero-care.jpg',
  'home-treatment': '/images/hero-care.jpg',
  'family-rights': '/images/education.jpg',
  'senior-carer': '/images/education.jpg',
  'health-nutrition': '/images/knowledge.jpg'
};

export default function CategoryDetailPage() {
  const { slug } = useParams();
  const item = sectionDetails[slug];
  if (!item) return <main className="page-wrap"><div className="empty-state"><h2>این بخش پیدا نشد</h2><Link to="/" className="button button--primary">بازگشت به خانه</Link></div></main>;
  const Icon = item.icon || Home;
  const parent = item.parent || (centerItems.some((x) => x.slug === slug) ? 'مراکز تخصصی' : serviceItems.some((x) => x.slug === slug) ? 'خدمات تخصصی' : 'سرو لایف');
  const image = pageImages[slug] || (parent === 'مراکز تخصصی' ? `${IMG}knowledge.jpg` : `${IMG}caregiver.jpg`);
  const related = slug === 'transport' || slug === 'home-care' || slug === 'home-treatment' || slug === 'specialist-clinics'
    ? serviceItems.filter((x) => x.slug !== slug).slice(0, 3)
    : slug === 'senior-tours' || slug === 'leisure-entertainment' || slug === 'volunteer-activities' || slug === 'respite-rehabilitation' || slug === 'residential-care' || slug === 'day-care'
      ? centerItems.filter((x) => x.slug !== slug).slice(0, 3)
      : knowledgeTopics.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <main className="page-wrap">
      <div className="breadcrumbs"><Link to="/">خانه</Link><ChevronLeft size={14} /><span>{parent}</span><ChevronLeft size={14} /><strong>{item.title}</strong></div>
      <PageHero eyebrow={parent} title={item.title} subtitle={item.description} image={image} tone="sage" action="ثبت درخواست یا دریافت راهنمایی" to="/services#contact-form" />
      <section className="section-block detail-content-grid">
        <div className="detail-main">
          <span className="eyebrow">آشنایی با خدمت</span>
          <h2>این بخش چه کمکی می‌کند؟</h2>
          <p>{item.description}</p>
          <div className="detail-points">{(item.bullets || ['معرفی خدمات و امکانات', 'بررسی نیاز سالمند و خانواده', 'هماهنگی برای دریافت اطلاعات بیشتر']).map((text) => <div key={text}><CheckCircle2 size={19} />{text}</div>)}</div>
          {slug === 'transport' && <div className="transport-detail-note"><img src="/images/transport-van.jpg" alt="ون سبز مجهز برای حمل ویلچر" /><div><strong>ون مجهز به بالابر ویلچر</strong><p>سالمند روی ویلچر باقی می‌ماند و با کمک سامانه بالابر وارد خودرو یا از آن خارج می‌شود؛ زمان و مسیر سرویس با خانواده هماهنگ می‌گردد.</p></div></div>}
          {slug === 'senior-carer' && <div className="detail-callout"><Headset size={20} /><p>جزئیات دوره‌ها، پیش‌نیازها و ضوابط دریافت گواهی مهارتی هنگام ثبت‌نام اعلام می‌شود.</p></div>}
        </div>
        <aside className="detail-aside"><div className="detail-aside-icon"><Icon size={32} /></div><h3>برای اطلاعات بیشتر</h3><p>شرایط و نیاز خود را با ما مطرح کنید تا در انتخاب مسیر مناسب راهنمایی شوید.</p><Link to="/services#contact-form" className="button button--primary button--wide">ثبت درخواست <ArrowLeft size={16} /></Link></aside>
      </section>
      <section className="section-block related-section"><div className="section-heading"><div><span className="eyebrow">ادامه مسیر</span><h2>بخش‌های مرتبط</h2></div></div><div className="related-grid">{related.map((x) => <CategoryCard key={x.slug || x.to} item={{ ...x, to: x.to || `/section/${x.slug}` }} compact />)}</div></section>
      <ContactCTA title="برای دریافت راهنمایی بیشتر همراه شما هستیم" />
    </main>
  );
}
