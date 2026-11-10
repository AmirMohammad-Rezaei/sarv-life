import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CategoryCard({ item, compact = false, numbered = false }) {
  const Icon = item.icon;
  return (
    <Link className={`category-card ${compact ? 'category-card--compact' : ''}`} to={item.to || `/section/${item.slug}`}>
      <span className="category-icon"><Icon size={compact ? 22 : 27} strokeWidth={1.8} /></span>
      <div className="category-card-copy">
        {numbered && <small className="category-index">{String(numbered).padStart(2, '0')}</small>}
        <h3>{item.title}</h3>
        {item.description && <p>{item.description}</p>}
      </div>
      <span className="category-arrow"><ArrowLeft size={17} /></span>
    </Link>
  );
}
