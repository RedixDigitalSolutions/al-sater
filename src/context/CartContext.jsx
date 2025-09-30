import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('alsater-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('alsater-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, selectedSize, selectedColor, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.id === product.id && 
                item.selectedSize === selectedSize && 
                item.selectedColor === selectedColor
      );

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && 
          item.selectedSize === selectedSize && 
          item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevCart, { 
        ...product, 
        selectedSize, 
        selectedColor, 
        quantity 
      }];
    });
  };

  const removeFromCart = (productId, size, color) => {
    setCart(prevCart => 
      prevCart.filter(item => 
        !(item.id === productId && 
          item.selectedSize === size && 
          item.selectedColor === color)
      )
    );
  };

  const updateQuantity = (productId, size, color, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, size, color);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && 
        item.selectedSize === size && 
        item.selectedColor === color
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};
