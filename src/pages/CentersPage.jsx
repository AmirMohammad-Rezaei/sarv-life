import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, HeartHandshake, MapPinned, Sparkles } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CategoryCard from '../components/CategoryCard.jsx';
import ContactCTA from '../components/ContactCTA.jsx';
import { centerItems } from '../data/catalog.js';

export default function CentersPage() {
  return (
    <main className="page-wrap">
      <PageHero eyebrow="مراکز تخصصی سرو لایف" title="مراقبت، تعامل و تجربه زندگی باکیفیت‌تر" subtitle="دسترسی به خدمات روزانه، اقامت موقت، بازتوانی، فعالیت اجتماعی و برنامه‌های اوقات فراغت سالمندان." image="/images/knowledge.jpg" imagePosition="left center" tone="green" action="مشاهده بخش‌ها" to="#center-categories" />
      <section className="section-block" id="center-categories">
        <SectionHeading eyebrow="خدمات و مراکز" title="فضاهایی برای مراقبت و مشارکت اجتماعی" subtitle="هر بخش می‌تواند با توجه به نیاز سالمند و خانواده انتخاب شود." />
        <div className="center-grid">{centerItems.map((item, index) => <CategoryCard key={item.slug} item={item} numbered={index + 1} />)}</div>
      </section>
      <section className="centers-coming-soon">
        <div className="coming-icon"><Sparkles size={30} /></div>
        <div><span className="eyebrow">در حال توسعه</span><h2>ارتقای کیفیت زندگی و برنامه‌های تجربه‌محور</h2><p>برنامه‌های گردشگری، تفریحی و مشارکت اجتماعی با تمرکز بر دسترس‌پذیری و علایق سالمندان به‌تدریج به این بخش افزوده می‌شوند.</p></div>
        <Link to="/services#contact" className="button button--light">اعلام علاقه‌مندی <ArrowLeft size={16} /></Link>
      </section>
      <section className="section-block center-steps">
        <SectionHeading title="برای دریافت اطلاعات یک مرکز" subtitle="مراحل ساده برای شروع گفت‌وگو و بررسی شرایط." />
        <div className="center-process"><div><span><MapPinned size={23} /></span><strong>انتخاب نوع مرکز</strong><small>روزانه، اقامتی یا تفریحی</small></div><div><span><CalendarDays size={23} /></span><strong>ثبت درخواست</strong><small>اعلام نیاز و زمان موردنظر</small></div><div><span><HeartHandshake size={23} /></span><strong>هماهنگی و بازدید</strong><small>بررسی شرایط و جزئیات</small></div></div>
      </section>
      <ContactCTA title="درباره مراکز و ظرفیت خدمات سؤال دارید؟" text="درخواست خود را ثبت کنید تا پس از تکمیل اطلاعات مراکز، امکان راهنمایی دقیق‌تر فراهم شود." />
    </main>
  );
}
