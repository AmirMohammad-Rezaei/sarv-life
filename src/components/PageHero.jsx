import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PageHero({ eyebrow, title, subtitle, image, imagePosition = 'center', action, to = '/services#contact', tone = 'green', compact = false }) {
  return (
    <section className={`page-hero page-hero--${tone} ${compact ? 'page-hero--compact' : ''}`}>
      {image && <img className="page-hero-image" src={image} alt="" style={{ objectPosition: imagePosition }} />}
      <div className="page-hero-shade" />
      <div className="page-hero-content">
        {eyebrow && <span className="eyebrow page-hero-eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {action && <Link className="button button--light" to={to}>{action}<ArrowLeft size={17} /></Link>}
      </div>
    </section>
  );
}
