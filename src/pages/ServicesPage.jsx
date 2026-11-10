import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Clock3, ShieldCheck, Accessibility, BusFront } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceFeature from '../components/ServiceFeature.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { serviceItems } from '../data/catalog.js';

const transportHighlights = [
  'مناسب برای سالمندانی که با ویلچر جابه‌جا می‌شوند',
  'بالابر یا سامانه مخصوص برای ورود و خروج ویلچر از ون',
  'هماهنگی زمان، مبدأ و مقصد پیش از انجام سرویس'
];

export default function ServicesPage() {
  return (
    <main className="page-wrap">
      <PageHero eyebrow="خدمات تخصصی سرو لایف" title="مراقبت حرفه‌ای، در کنار شما" subtitle="از مراقبت در منزل تا خدمات درمانی، کلینیک‌های تخصصی و حمل‌ونقل ویژه سالمندان." image="/images/hero-care.jpg" tone="sage" action="درخواست راهنمایی" to="#contact-form" />
      <section className="section-block">
        <SectionHeading eyebrow="خدمات ما" title="یک مسیر ساده برای دسترسی به خدمات تخصصی" subtitle="خدمت موردنیازتان را انتخاب کنید تا جزئیات و شرایط دریافت آن را ببینید." />
        <div className="service-list-grid">{serviceItems.map((item, index) => <ServiceFeature key={item.slug} item={item} index={index} />)}</div>
      </section>
      <section className="transport-feature-section">
        <div className="transport-photo"><img src="/images/transport-van.jpg" alt="ون سبز مجهز به بالابر ویلچر برای حمل‌ونقل سالمندان" /><span className="transport-photo-label"><BusFront size={16} /> ناوگان حمل‌ونقل ویژه</span></div>
        <div className="transport-copy">
          <span className="eyebrow">حمل‌ونقل ویژه سالمندان</span>
          <h2>سفر ایمن‌تر، بدون دشواری جابه‌جایی ویلچر</h2>
          <p>ون‌های سبز مجموعه به سامانه جابه‌جایی ویلچر مجهز هستند؛ به‌گونه‌ای که سالمند می‌تواند در حالی که روی ویلچر قرار دارد، با کمک دستگاه بالابر وارد خودرو شود و در مقصد نیز به‌آرامی پایین آورده شود.</p>
          <ul className="check-list">{transportHighlights.map((item) => <li key={item}><CheckCircle2 size={18} />{item}</li>)}</ul>
          <Link className="button button--primary" to="/section/transport">جزئیات حمل‌ونقل ویژه <ArrowLeft size={17} /></Link>
        </div>
      </section>
      <section className="section-block service-standards">
        <SectionHeading eyebrow="تعهد ما" title="مراقبت با احترام و توجه به نیاز فرد" />
        <div className="standards-grid"><div><ShieldCheck size={25} /><h3>توجه به ایمنی</h3><p>در انتخاب تجهیزات و شیوه ارائه خدمت، شرایط فرد در اولویت است.</p></div><div><Clock3 size={25} /><h3>هماهنگی شفاف</h3><p>پیش از ارائه خدمت، موضوع درخواست و زمان‌بندی بررسی می‌شود.</p></div><div><Accessibility size={25} /><h3>دسترسی‌پذیری</h3><p>تلاش می‌کنیم مسیر دریافت خدمات برای سالمندان و همراهان آسان باشد.</p></div></div>
      </section>
      <section className="section-block service-contact-grid">
        <div className="contact-side-note"><span className="eyebrow">درخواست خدمت</span><h2>چه کمکی نیاز دارید؟</h2><p>نوع خدمت، شرایط حرکتی سالمند و زمان موردنظر را بنویسید تا در مرحله بعد امکان بررسی و هماهنگی فراهم باشد.</p><div className="note-badge"><CheckCircle2 size={19} /> ثبت درخواست در این نسخه نمایشی آزمایشی است.</div></div>
        <ContactForm />
      </section>
    </main>
  );
}
