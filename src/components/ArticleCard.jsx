import { ArrowLeft, Clock3 } from 'lucide-react';

export default function ArticleCard({ article }) {
  const Icon = article.icon;
  return (
    <article className="article-card">
      <div className={`article-image ${article.image ? '' : 'article-image--placeholder'}`}>
        {article.image ? <img src={article.image} alt="" loading="lazy" /> : <Icon size={46} strokeWidth={1.4} />}
      </div>
      <div className="article-content">
        <span className="article-category">{article.category}</span>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <div className="article-footer"><span><Clock3 size={14} /> {article.readTime}</span><span className="article-more">مطالعه راهنما <ArrowLeft size={15} /></span></div>
      </div>
    </article>
  );
}
