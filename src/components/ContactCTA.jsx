import { ArrowLeft, Headset } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactCTA({ title = 'برای انتخاب خدمت مناسب، همراه شما هستیم', text = 'نیازتان را با ما در میان بگذارید تا برای انتخاب مسیر مناسب راهنمایی شوید.' }) {
  return (
    <section className="contact-cta" id="contact">
      <div className="contact-cta-icon"><Headset size={30} /></div>
      <div className="contact-cta-copy"><h2>{title}</h2><p>{text}</p></div>
      <Link to="/services#contact-form" className="button button--primary">درخواست مشاوره <ArrowLeft size={17} /></Link>
    </section>
  );
}
