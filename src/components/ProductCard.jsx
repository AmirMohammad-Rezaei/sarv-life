import { ShoppingCart, ArrowUpLeft } from 'lucide-react';
import { useSite } from '../context/SiteContext.jsx';

export default function ProductCard({ product }) {
  const { addToCart } = useSite();
  const Icon = product.icon;
  return (
    <article className="product-card">
      <div className="product-visual">
        {product.image ? <img src={product.image} alt={product.name} loading="lazy" /> : <span className="product-emoji" aria-hidden="true">{product.emoji}</span>}
        <span className="product-tag">{product.tag}</span>
      </div>
      <div className="product-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-meta"><span>قیمت پس از استعلام</span><span className="product-feature-icon"><Icon size={16} /></span></div>
        <button className="button button--primary button--small button--wide" onClick={() => addToCart(product)}>
          <ShoppingCart size={16} /> افزودن به فهرست درخواست
        </button>
      </div>
    </article>
  );
}
