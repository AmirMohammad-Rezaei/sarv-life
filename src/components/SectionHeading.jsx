export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', link, linkText = 'مشاهده همه' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {link && <a className="section-heading-link" href={link}>{linkText} <span>←</span></a>}
    </div>
  );
}
