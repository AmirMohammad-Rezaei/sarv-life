import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', subject: 'مشاوره خدمات', message: '' });

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));
  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) return (
    <div className="form-success" role="status">
      <CheckCircle2 size={34} />
      <h3>درخواست شما ثبت آزمایشی شد</h3>
      <p>این فرم در نسخه نمایشی به سرور ارسال نمی‌شود. برای دریافت درخواست‌های واقعی، اتصال بک‌اند و پنل مدیریت لازم است.</p>
      <button className="text-button" onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', subject: 'مشاوره خدمات', message: '' }); }}>ثبت درخواست جدید</button>
    </div>
  );

  return (
    <form className="contact-form" onSubmit={submit} id="contact-form">
      <div className="form-heading"><span className="eyebrow">ارتباط با ما</span><h2>درخواست راهنمایی ثبت کنید</h2><p>اطلاعات زیر را وارد کنید تا در نسخه نهایی امکان پیگیری درخواست فراهم باشد.</p></div>
      <div className="form-grid">
        <label>نام و نام خانوادگی<input required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="نام شما" /></label>
        <label>شماره تماس<input required inputMode="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="مثلاً ۰۹۱۲..." /></label>
        <label>موضوع درخواست<select value={form.subject} onChange={(e) => update('subject', e.target.value)}><option>مشاوره خدمات</option><option>تأمین کالا</option><option>حمل‌ونقل ویژه</option><option>آموزش و دوره‌ها</option><option>مراکز تخصصی</option></select></label>
        <label className="form-full">توضیحات<textarea rows="4" value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="نیاز یا پرسش خود را بنویسید..." /></label>
      </div>
      <button className="button button--primary" type="submit">ثبت درخواست <Send size={16} /></button>
    </form>
  );
}
