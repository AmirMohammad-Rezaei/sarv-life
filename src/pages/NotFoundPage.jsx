import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
export default function NotFoundPage() {
  return <main className="page-wrap"><div className="empty-state not-found"><strong>۴۰۴</strong><h1>صفحه موردنظر پیدا نشد</h1><p>ممکن است نشانی صفحه تغییر کرده باشد.</p><Link to="/" className="button button--primary"><Home size={17} /> بازگشت به خانه</Link></div></main>;
}
