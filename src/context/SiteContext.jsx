import { createContext, useContext, useMemo, useState } from 'react';

const SiteContext = createContext(null);

export function SiteProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState('');

  const notify = (message) => {
    setToast(message);
    window.clearTimeout(window.__sarvToastTimer);
    window.__sarvToastTimer = window.setTimeout(() => setToast(''), 2600);
  };

  const addToCart = (product) => {
    setCartItems((current) => {
      const found = current.find((item) => item.id === product.id);
      if (found) return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...current, { ...product, quantity: 1 }];
    });
    notify(`${product.name} به فهرست درخواست اضافه شد.`);
  };

  const removeFromCart = (id) => setCartItems((current) => current.filter((item) => item.id !== id));
  const clearCart = () => setCartItems([]);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const value = useMemo(() => ({
    cartItems, cartCount, cartOpen, setCartOpen, addToCart, removeFromCart,
    clearCart, toast, notify
  }), [cartItems, cartCount, cartOpen, toast]);

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) throw new Error('useSite must be used within SiteProvider');
  return context;
}
