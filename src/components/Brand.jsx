import { Sprout } from 'lucide-react';

export default function Brand({ compact = false }) {
  return (
    <div className={`brand ${compact ? 'brand--compact' : ''}`} aria-label="سرو لایف">
      <span className="brand-mark"><Sprout size={30} strokeWidth={1.9} /></span>
      <span className="brand-wordmark">
        <strong>Sarv Life</strong>
        <small>باشگاه مشتریان سرو لایف</small>
      </span>
    </div>
  );
}
