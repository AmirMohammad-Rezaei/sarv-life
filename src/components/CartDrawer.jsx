import { X, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useSite } from '../context/SiteContext.jsx';

export default function CartDrawer() {
  const { cartItems, cartOpen, setCartOpen, removeFromCart, clearCart, notify } = useSite();
  if (!cartOpen) return null;

  const submitRequest = () => {
    notify('در نسخه نمایشی، درخواست شما فقط در همین مرورگر نگهداری می‌شود. برای اتصال به سامانه سفارش، بک‌اند لازم است.');
    setCartOpen(false);
  };

  return (
    <div className="drawer-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setCartOpen(false)}>
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <div className="drawer-head">
          <div><span className="eyebrow">SARV LIFE</span><h2 id="cart-title">فهرست درخواست کالا</h2></div>
          <button className="icon-button" onClick={() => setCartOpen(false)} aria-label="بستن"><X size={22} /></button>
        </div>
        {cartItems.length === 0 ? (
          <div className="empty-cart"><span><ShoppingBag size={34} /></span><h3>هنوز محصولی انتخاب نکرده‌اید</h3><p>محصولات مورد نیازتان را به این فهرست اضافه کنید.</p></div>
        ) : (
          <>
            <div className="cart-lines">
              {cartItems.map((item) => (
                <div className="cart-line" key={item.id}>
                  <div className="cart-line-icon">{item.emoji || '📦'}</div>
                  <div className="cart-line-info"><strong>{item.name}</strong><small>تعداد: {item.quantity}</small></div>
                  <button className="remove-line" onClick={() => removeFromCart(item.id)} aria-label={`حذف ${item.name}`}><Trash2 size={17} /></button>
                </div>
              ))}
            </div>
            <p className="cart-note">قیمت و موجودی کالا پس از بررسی درخواست و هماهنگی با شما اعلام می‌شود.</p>
            <button className="button button--primary button--wide" onClick={submitRequest}>ثبت درخواست و هماهنگی <ArrowLeft size={17} /></button>
            <button className="text-button clear-cart" onClick={clearCart}>پاک کردن فهرست</button>
          </>
        )}
      </aside>
    </div>
  );
}
