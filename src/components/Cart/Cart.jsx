import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import OrderForm from '../OrderForm/OrderForm';
import styles from './Cart.module.css';

const Cart = ({ onClose }) => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleCheckout = () => {
    if (cart.length > 0) {
      setShowOrderForm(true);
    }
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.cart} onClick={(e) => e.stopPropagation()}>
          {/* ... existing cart code ... */}
          
          {cart.length > 0 && (
            <div className={styles.footer}>
              <div className={styles.total}>
                <span>المجموع:</span>
                <span className={styles.totalAmount}>{getCartTotal()} DT</span>
              </div>
              <button className={styles.checkoutButton} onClick={handleCheckout}>
                إتمام الطلب
              </button>
            </div>
          )}
        </div>
      </div>

      {showOrderForm && <OrderForm onClose={() => setShowOrderForm(false)} />}
    </>
  );
};

export default Cart;
