import { CheckCircle2 } from 'lucide-react';
import { useSite } from '../context/SiteContext.jsx';

export default function Toast() {
  const { toast } = useSite();
  if (!toast) return null;
  return <div className="toast-message" role="status"><CheckCircle2 size={18} />{toast}</div>;
}
