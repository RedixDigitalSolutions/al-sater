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
          <div className={styles.header}>
            <h2>سلة المشتريات</h2>
            <button className={styles.closeButton} onClick={onClose}>×</button>
          </div>

          <div className={styles.items}>
            {cart.length === 0 ? (
              <p className={styles.empty}>السلة فارغة</p>
            ) : (
              cart.map((item, index) => (
                <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${index}`} className={styles.item}>
                  <img src={item.images[0]} alt={item.nameAr} className={styles.itemImage} />
                  <div className={styles.itemDetails}>
                    <h4>{item.nameAr}</h4>
                    <p className={styles.itemPrice}>{item.price} {item.currency}</p>
                    {item.selectedSize && <p className={styles.itemOption}>المقاس: {item.selectedSize}</p>}
                    {item.selectedColor && (
                      <p className={styles.itemOption}>
                        اللون: <span className={styles.colorPreview} style={{ backgroundColor: item.selectedColor }}></span>
                      </p>
                    )}
                    
                    <div className={styles.quantityControls}>
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    className={styles.removeButton}
                    onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                  >
                    حذف
                  </button>
                </div>
              ))
            )}
          </div>

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
