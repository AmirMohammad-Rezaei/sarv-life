import { useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, SlidersHorizontal, ShieldCheck, Truck, PackageCheck } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import ProductCard from '../components/ProductCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { products, shopCategories, storeSegments } from '../data/catalog.js';
import CategoryCard from '../components/CategoryCard.jsx';

export default function ShopPage() {
  const [params] = useSearchParams();
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState(params.get('q') || '');
  const filtered = useMemo(() => products.filter((product) => {
    const categoryMatch = category === 'all' || product.category === category;
    const queryMatch = !query.trim() || `${product.name} ${product.description} ${product.tag}`.includes(query.trim());
    return categoryMatch && queryMatch;
  }), [category, query]);

  return (
    <main className="page-wrap">
      <PageHero eyebrow="فروشگاه سرو لایف" title="تأمین کالا و تجهیزات سالمندی" subtitle="محصولات کاربردی برای مراقبت، تحرک، ایمنی و زندگی روزمره؛ متناسب با نیاز هر فرد." image="/images/shop-banner.jpg" tone="green" action="مشاهده محصولات" to="#products" />
      <div className="shop-assurances">
        <div><ShieldCheck size={22} /><span><strong>انتخاب آگاهانه</strong><small>راهنمای انتخاب متناسب با نیاز</small></span></div>
        <div><PackageCheck size={22} /><span><strong>تنوع محصولات</strong><small>مصرفی و تجهیزات تخصصی</small></span></div>
        <div><Truck size={22} /><span><strong>هماهنگی تأمین کالا</strong><small>استعلام و پیگیری درخواست</small></span></div>
      </div>
      <section className="shop-segments section-block">
        <div className="shop-segments-heading"><span className="eyebrow">ساختار تأمین کالا</span><h2>دو گروه اصلی محصولات سرو لایف</h2><p>از اقلام مصرفی روزمره تا تجهیزات تخصصی و کمک‌مراقبتی.</p></div>
        <div className="shop-segments-grid">{storeSegments.map((item) => <CategoryCard key={item.slug} item={item} compact />)}</div>
      </section>
      <section className="section-block shop-layout" id="products">
        <aside className="shop-sidebar">
          <h3><SlidersHorizontal size={18} /> دسته‌بندی محصولات</h3>
          <div className="shop-category-list">
            {shopCategories.map((item) => <button key={item.value} className={category === item.value ? 'active' : ''} onClick={() => setCategory(item.value)}>{item.label}<span>{item.value === 'all' ? products.length : products.filter((p) => p.category === item.value).length}</span></button>)}
          </div>
          <div className="shop-help-card"><strong>برای انتخاب مطمئن‌تر</strong><p>شرایط حرکتی، فضای منزل و نیاز مراقبتی را در انتخاب تجهیزات در نظر بگیرید.</p><Link to="/services#contact">درخواست راهنمایی ←</Link></div>
        </aside>
        <div className="shop-products-area">
          <div className="shop-toolbar">
            <div><span className="eyebrow">فروشگاه سالمندی</span><h2>محصولات منتخب</h2><small>{filtered.length} محصول در این فهرست</small></div>
            <label className="shop-search"><Search size={18} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="جستجو در محصولات..." aria-label="جستجو در محصولات" />{query && <button onClick={() => setQuery('')} aria-label="پاک کردن جستجو">×</button>}</label>
          </div>
          <div className="product-grid">
            {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
          {filtered.length === 0 && <div className="empty-state"><Search size={28} /><h3>محصولی پیدا نشد</h3><p>عبارت جستجو یا دسته‌بندی را تغییر دهید.</p><button className="button button--outline" onClick={() => { setQuery(''); setCategory('all'); }}>نمایش همه محصولات</button></div>}
        </div>
      </section>
      <section className="shop-disclaimer"><ShieldCheck size={20} /><p>توجه: تصاویر برای معرفی گروه کالا هستند. قیمت، مشخصات نهایی، موجودی و تناسب هر وسیله باید پیش از سفارش استعلام و بررسی شود؛ انتخاب تجهیزات پزشکی و مکمل‌ها با نظر متخصص انجام شود.</p></section>
    </main>
  );
}
