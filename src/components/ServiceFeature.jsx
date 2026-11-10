import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ServiceFeature({ item, index }) {
  const Icon = item.icon;
  return (
    <Link className="service-feature" to={`/section/${item.slug}`}>
      <div className="service-feature-icon"><Icon size={25} /></div>
      <div><small>خدمت {String(index + 1).padStart(2, '0')}</small><h3>{item.title}</h3><p>{item.description}</p></div>
      <ArrowLeft className="service-feature-arrow" size={18} />
    </Link>
  );
}
