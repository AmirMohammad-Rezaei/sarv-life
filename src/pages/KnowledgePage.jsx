import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Download, BookOpenCheck } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CategoryCard from '../components/CategoryCard.jsx';
import ArticleCard from '../components/ArticleCard.jsx';
import { knowledgeTopics, articles } from '../data/catalog.js';

export default function KnowledgePage() {
  return (
    <main className="page-wrap">
      <PageHero eyebrow="پایگاه دانش سرو لایف" title="دانش، کلید زندگی سالم‌تر" subtitle="مقالات، راهنماها و محتوای آموزشی برای سالمندان، خانواده‌ها و مراقبان." image="/images/knowledge.jpg" imagePosition="left center" tone="sage" action="مرور مطالب" to="#articles" />
      <section className="section-block">
        <SectionHeading eyebrow="دسته‌بندی محتوا" title="از کجا شروع کنیم؟" subtitle="موضوع موردنظر را انتخاب کنید تا به راهنماهای مرتبط برسید." />
        <div className="topic-grid">
          {knowledgeTopics.map((topic) => <CategoryCard key={topic.slug} item={{ ...topic, to: `/section/${topic.slug}` }} />)}
        </div>
      </section>
      <section className="section-block knowledge-feature" id="articles">
        <div className="knowledge-feature-head"><div><span className="eyebrow">مطالب منتخب</span><h2>تازه‌ترین مقالات و راهنماها</h2><p>محتوا با زبان ساده و برای استفاده در زندگی روزمره تهیه شده است.</p></div><div className="knowledge-search"><Search size={17} /><span>جستجو در مطالب و راهنماها</span></div></div>
        <div className="article-grid">{articles.map((article) => <ArticleCard key={article.id} article={article} />)}</div>
      </section>
      <section className="resource-row">
        <div className="resource-icon"><BookOpenCheck size={27} /></div>
        <div><h3>کتابخانه و محتوای قابل دریافت</h3><p>بخش کتاب‌ها، پوسترها، بروشورها و فایل‌های آموزشی به‌تدریج با محتوای تأییدشده تکمیل می‌شود.</p></div>
        <Link to="/section/posters-brochures" className="button button--outline">مشاهده منابع <ArrowLeft size={16} /></Link>
      </section>
    </main>
  );
}
