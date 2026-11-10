import { Link } from 'react-router-dom';
import { ArrowLeft, BadgeCheck, Users, GraduationCap, FileCheck2 } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CourseCard from '../components/CourseCard.jsx';
import ContactCTA from '../components/ContactCTA.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { courses } from '../data/catalog.js';

const IMG = `${import.meta.env.BASE_URL}images/`;

export default function EducationPage() {
  return (
    <main className="page-wrap">
      <PageHero eyebrow="آموزش و توانمندسازی" title="یادگیری در هر سن، برای زندگی بهتر" subtitle="آموزش خانواده‌ها و علاقه‌مندان به حوزه مراقبت سالمندی؛ از مهارت‌های روزمره تا مسیرهای حرفه‌ای." image={`${IMG}education.jpg`} imagePosition="left center" tone="cream" action="مشاهده دوره‌ها" to="#courses" />
      <section className="section-block education-audiences">
        <SectionHeading eyebrow="دو مسیر آموزشی" title="آموزش متناسب با نقش شما" subtitle="محتوا و مسیر یادگیری بر اساس نیاز خانواده یا علاقه‌مندی حرفه‌ای انتخاب می‌شود." />
        <div className="audience-grid">
          <article className="audience-card"><div className="audience-icon"><Users size={28} /></div><div><h3>خانواده سالمندان</h3><p>برای مراقبت آگاهانه‌تر از عزیزان؛ شناخت نیازها، ارتباط مؤثر، ایمنی منزل و استفاده از تجهیزات.</p><Link to="/section/family-rights">آشنایی با آموزش خانواده <ArrowLeft size={16} /></Link></div></article>
          <article className="audience-card"><div className="audience-icon"><GraduationCap size={28} /></div><div><h3>سالمندیاری</h3><p>برای علاقه‌مندان به فعالیت در حوزه خدمات سالمندی؛ آموزش مهارت‌های پایه و آمادگی برای ارائه خدمت.</p><Link to="/section/senior-carer">آشنایی با مسیر سالمندیاری <ArrowLeft size={16} /></Link></div></article>
        </div>
      </section>
      <section className="section-block" id="courses">
        <SectionHeading eyebrow="دوره‌های آموزشی" title="دوره‌هایی برای مهارت، اطمینان و استقلال بیشتر" subtitle="فهرست زیر نمونه‌ای از مسیرهای آموزشی پیشنهادی سرو لایف است." />
        <div className="course-grid">{courses.map((course, index) => <CourseCard key={course.title} course={course} index={index} />)}</div>
      </section>
      <section className="certificate-band">
        <div className="certificate-icon"><FileCheck2 size={32} /></div>
        <div><span className="eyebrow">مسیر مهارتی و حرفه‌ای</span><h2>آموزش، ارزیابی و دریافت گواهی مهارتی</h2><p>برای برخی مسیرهای آموزشی، امکان صدور گواهی‌های فنی‌وحرفه‌ای در چارچوب مجوزهای اخذشده و ضوابط مرجع صادرکننده پیش‌بینی می‌شود. جزئیات هر دوره هنگام ثبت‌نام اعلام خواهد شد.</p></div>
        <div className="certificate-seal"><BadgeCheck size={28} /><span>مسیر مهارتی</span></div>
      </section>
      <section className="section-block education-steps">
        <SectionHeading title="مسیر ثبت‌نام در دوره‌ها" />
        <div className="steps-row"><div><b>۱</b><strong>انتخاب دوره</strong><small>بر اساس هدف و نیاز</small></div><i /><div><b>۲</b><strong>مشاوره و ثبت درخواست</strong><small>بررسی پیش‌نیازها</small></div><i /><div><b>۳</b><strong>شرکت در آموزش</strong><small>حضوری یا آنلاین طبق دوره</small></div><i /><div><b>۴</b><strong>ارزیابی و گواهی</strong><small>طبق ضوابط هر دوره</small></div></div>
      </section>
      <div id="join" className="section-block join-section"><ContactForm /></div>
      <ContactCTA title="برای انتخاب دوره مناسب راهنمایی می‌خواهید؟" text="هدف آموزشی و تجربه خود را ثبت کنید تا مسیر مناسب معرفی شود." />
    </main>
  );
}
